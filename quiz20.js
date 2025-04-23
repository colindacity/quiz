 /* Product Leadership Archetype Quiz
 * Enhanced version with improved functionality, error handling, and UI
 */

// Add at the top of the file after the initial variable declarations
let isTransitioning = false;
let isCalculatingResults = false;
let lastSelectedTime = 0;
const DEBOUNCE_DELAY = 300; // ms

function initQuiz() {
  console.log("Quiz initialization started...");

  // ==========================================
  // QUIZ DATA CONFIGURATION
  // ==========================================

  const quizData = [
    {
      question: "When working on a product, you excel at:",
      options: [
        {
          text: "Turning abstract ideas into concrete features",
          scores: {
            "Product Crafting": 1,
            "UX Innovator": 1,
            "Design-Driven": 1
          }
        },
        {
          text: "Identifying growth levers and optimizing key metrics",
          scores: {
            "Growth Driver": 2,
            "Product Optimizer": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "Managing complex projects and aligning diverse teams",
          scores: {
            "Internal Scaler": 2,
            "General Manager": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Building and leading high-performing product teams",
          scores: {
            "General Manager": 2,
            "Team Expertise": 1,
            "Vision-Driven": 1
          }
        },
        {
          text: "Adapting products for new markets or use cases",
          scores: {
            "New Market-Fit Expander": 2,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "single"
    },
    {
      question: "Which of these activities do you find most rewarding?",
      options: [
        {
          text: "Designing intuitive user experiences and product flows",
          scores: {
            "UX Innovator": 2,
            "Product Crafting": 1,
            "Design-Driven": 1
          }
        },
        {
          text: "Analyzing user behavior data to drive engagement",
          scores: {
            "Growth Driver": 2,
            "Product Optimizer": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "Streamlining processes to improve product development efficiency",
          scores: {
            "Internal Scaler": 2,
            "Technician": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Conceptualizing and validating new product ideas",
          scores: {
            "Zero-to-One Innovator": 2,
            "UX Innovator": 1,
            "Vision-Driven": 1
          }
        },
        {
          text: "Researching new markets and adapting products to fit local needs",
          scores: {
            "New Market-Fit Expander": 2,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "single"
    },
    {
      question: "In your product role, you're known for:",
      options: [
        {
          text: "Creating innovative solutions to user problems",
          scores: {
            "UX Innovator": 2,
            "Zero-to-One Innovator": 1,
            "Design-Driven": 1
          }
        },
        {
          text: "Driving rapid user acquisition and retention",
          scores: {
            "Growth Driver": 2,
            "Product Optimizer": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "Effectively managing stakeholders and resources",
          scores: {
            "General Manager": 2,
            "Internal Scaler": 1,
            "Sales-Driven": 1
          }
        },
        {
          text: "Solving complex technical challenges",
          scores: {
            "Technician": 2,
            "Product Crafting": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Successfully expanding products into new markets",
          scores: {
            "New Market-Fit Expander": 2,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "single"
    },
    {
      question: "In your ideal product management role:",
      options: [
        {
          text: "PMs have high influence regardless of their experience level",
          scores: {
            "PM-Dominated": 1,
            "General Manager": 1,
            "Vision-Driven": 1
          }
        },
        {
          text: "PM influence is based on demonstrated competence and merit",
          scores: {
            "PM-Guided": 1,
            "Product Optimizer": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "PMs support decisions made by engineering or sales teams",
          scores: {
            "PM-Serviced": 1,
            "Technician": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "PMs are key in identifying and adapting to new market opportunities",
          scores: {
            "New Market-Fit Expander": 1,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "single"
    },
    {
      question: "You prefer working in an environment where:",
      options: [
        {
          text: "Product Managers are the primary decision-makers",
          scores: {
            "PM-Dominated": 1,
            "General Manager": 1,
            "Vision-Driven": 1
          }
        },
        {
          text: "Decision-making is collaborative, with PMs as key influencers",
          scores: {
            "PM-Guided": 1,
            "UX Innovator": 1,
            "Design-Driven": 1
          }
        },
        {
          text: "PMs facilitate decisions made by other key stakeholders",
          scores: {
            "PM-Serviced": 1,
            "Internal Scaler": 1,
            "Sales-Driven": 1
          }
        },
        {
          text: "PMs drive product adaptation for diverse markets",
          scores: {
            "New Market-Fit Expander": 1,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "single"
    },
    {
      question: "How comfortable are you with developing go-to-market strategies and pricing models?",
      options: [
        {
          text: "Very comfortable",
          scores: {
            "General Manager": 2,
            "Growth Driver": 1,
            "Sales-Driven": 1
          }
        },
        {
          text: "Somewhat comfortable",
          scores: {
            "Product Optimizer": 2,
            "Growth Driver": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "Not very comfortable",
          scores: {
            "UX Innovator": 1,
            "Technician": 1,
            "Design-Driven": 1
          }
        },
        {
          text: "Not comfortable at all",
          scores: {
            "Technician": 2,
            "Internal Scaler": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Comfortable, especially for new markets",
          scores: {
            "New Market-Fit Expander": 2,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "single"
    },
    {
      question: "Which metric do you focus on the most in your current role?",
      options: [
        {
          text: "User acquisition and retention rates",
          scores: {
            "Growth Driver": 2,
            "Product Optimizer": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "User satisfaction and engagement scores",
          scores: {
            "UX Innovator": 2,
            "Product Optimizer": 1,
            "Design-Driven": 1
          }
        },
        {
          text: "Team productivity and time-to-market",
          scores: {
            "Internal Scaler": 2,
            "General Manager": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Revenue and profit margins",
          scores: {
            "General Manager": 2,
            "Growth Driver": 1,
            "Sales-Driven": 1
          }
        },
        {
          text: "System performance and reliability",
          scores: {
            "Technician": 2,
            "Internal Scaler": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Market disruption and category creation metrics",
          scores: {
            "Zero-to-One Innovator": 2,
            "Growth Driver": 1,
            "Vision-Driven": 1
          }
        },
        {
          text: "Market share in new regions or segments",
          scores: {
            "New Market-Fit Expander": 2,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "single"
    },
    {
      question: "What's your biggest strength as a product leader?",
      options: [
        {
          text: "Driving rapid user growth and engagement",
          scores: {
            "Growth Driver": 2,
            "Product Optimizer": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "Creating intuitive and delightful user experiences",
          scores: {
            "UX Innovator": 2,
            "Product Crafting": 1,
            "Design-Driven": 1
          }
        },
        {
          text: "Improving organizational efficiency and collaboration",
          scores: {
            "Internal Scaler": 2,
            "General Manager": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Strategic planning and P&L management",
          scores: {
            "General Manager": 2,
            "Growth Driver": 1,
            "Sales-Driven": 1
          }
        },
        {
          text: "Continuously improving product quality and performance",
          scores: {
            "Product Optimizer": 2,
            "Technician": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "Solving complex technical challenges",
          scores: {
            "Technician": 2,
            "Product Crafting": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Pioneering innovative products and features",
          scores: {
            "Zero-to-One Innovator": 2,
            "UX Innovator": 1,
            "Vision-Driven": 1
          }
        },
        {
          text: "Adapting products for diverse markets and cultures",
          scores: {
            "New Market-Fit Expander": 2,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "single"
    },
    {
      question: "What type of company environment do you thrive in?",
      options: [
        {
          text: "Companies with product-market fit, ready for rapid scaling",
          scores: {
            "Growth Driver": 2,
            "Product Optimizer": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "Companies where product differentiation comes from superior user experience",
          scores: {
            "UX Innovator": 2,
            "Product Crafting": 1,
            "Design-Driven": 1
          }
        },
        {
          text: "Rapidly growing companies facing operational challenges",
          scores: {
            "Internal Scaler": 2,
            "General Manager": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Established companies with multiple product lines",
          scores: {
            "General Manager": 2,
            "Product Optimizer": 1,
            "Sales-Driven": 1
          }
        },
        {
          text: "Companies building technical products or platforms",
          scores: {
            "Technician": 2,
            "Product Crafting": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Startups, innovation-focused companies",
          scores: {
            "Zero-to-One Innovator": 2,
            "Growth Driver": 1,
            "Vision-Driven": 1
          }
        },
        {
          text: "Companies looking to expand into new markets or verticals",
          scores: {
            "New Market-Fit Expander": 2,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "single"
    },
    {
      question: "When faced with a product challenge, which TWO of these do you typically prioritize? (Select 2)",
      options: [
        {
          text: "Dive into data and analytics to find insights",
          scores: {
            "Growth Driver": 2,
            "Product Optimizer": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "Talk to users and create prototypes",
          scores: {
            "UX Innovator": 2,
            "Zero-to-One Innovator": 1,
            "Design-Driven": 1
          }
        },
        {
          text: "Optimize internal processes to improve efficiency",
          scores: {
            "Internal Scaler": 2,
            "General Manager": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Develop a comprehensive business strategy",
          scores: {
            "General Manager": 2,
            "Growth Driver": 1,
            "Sales-Driven": 1
          }
        },
        {
          text: "Incrementally improve existing features",
          scores: {
            "Product Optimizer": 2,
            "UX Innovator": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "Solve complex technical problems",
          scores: {
            "Technician": 2,
            "Product Crafting": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Brainstorm entirely new product ideas",
          scores: {
            "Zero-to-One Innovator": 2,
            "UX Innovator": 1,
            "Vision-Driven": 1
          }
        },
        {
          text: "Research market trends and cultural factors",
          scores: {
            "New Market-Fit Expander": 2,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "multi"
    },
    {
      question: "Which TWO activities do you spend the most time on in your current role? (Select 2)",
      options: [
        {
          text: "Analyzing user data and running experiments",
          scores: {
            "Growth Driver": 2,
            "Product Optimizer": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "Conducting user research and designing interfaces",
          scores: {
            "UX Innovator": 2,
            "Product Crafting": 1,
            "Design-Driven": 1
          }
        },
        {
          text: "Improving team processes and workflows",
          scores: {
            "Internal Scaler": 2,
            "General Manager": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Strategic planning and stakeholder management",
          scores: {
            "General Manager": 2,
            "Growth Driver": 1,
            "Sales-Driven": 1
          }
        },
        {
          text: "Optimizing existing features and product performance",
          scores: {
            "Product Optimizer": 2,
            "Technician": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "Working on technical architecture and integrations",
          scores: {
            "Technician": 2,
            "Product Crafting": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Conceptualizing and validating new product ideas",
          scores: {
            "Zero-to-One Innovator": 2,
            "UX Innovator": 1,
            "Vision-Driven": 1
          }
        },
        {
          text: "Researching and adapting products for new markets",
          scores: {
            "New Market-Fit Expander": 2,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "multi"
    },
    {
      question: "In an ideal work environment, decisions are primarily based on:",
      options: [
        {
          text: "Technical feasibility and engineering excellence",
          scores: {
            "Technician": 2,
            "Internal Scaler": 1,
            "Engineering-Driven": 1
          }
        },
        {
          text: "Data analysis and A/B test results",
          scores: {
            "Growth Driver": 2,
            "Product Optimizer": 1,
            "Data-Driven": 1
          }
        },
        {
          text: "User experience and design principles",
          scores: {
            "UX Innovator": 2,
            "Product Crafting": 1,
            "Design-Driven": 1
          }
        },
        {
          text: "Business strategy and market opportunities",
          scores: {
            "General Manager": 2,
            "Growth Driver": 1,
            "Sales-Driven": 1
          }
        },
        {
          text: "Long-term vision and transformative ideas",
          scores: {
            "Zero-to-One Innovator": 2,
            "UX Innovator": 1,
            "Vision-Driven": 1
          }
        },
        {
          text: "Market research and cultural insights",
          scores: {
            "New Market-Fit Expander": 2,
            "Growth Driver": 1,
            "Product Crafting": 1
          }
        }
      ],
      type: "single"
    }
  ];

  const archetypeDescriptions = {
    "Growth Driver": {
      description: "Growth Drivers excel at driving user acquisition and retention through data-driven strategies, rapid experimentation, and growth hacking techniques.",
      pros: ["Data-driven decision making", "User acquisition strategies", "Retention optimization", "Rapid experimentation"],
      cons: ["May prioritize short-term gains over long-term strategy", "Can overlook product quality in favor of speed"],
      examples: [
        "Casey Winters (CPO, Eventbrite)",
        "Elena Verna (Head of Growth, Amplitude)",
        "Brian Balfour (CEO, Reforge)"
      ]
    },
    "UX Innovator": {
      description: "UX Innovators focus on creating intuitive and engaging user experiences, ensuring products are user-friendly and meet user needs effectively.",
      pros: ["User-centric design", "Holistic thinking", "Strong user empathy", "Excellent problem-solving skills"],
      cons: ["May overemphasize design at the expense of business goals", "Could struggle with scalability challenges"],
      examples: [
        "Alex Hood (CPO, Asana)",
        "Rahul Vohra (Founder and CEO, Superhuman)",
        "Aarron Walter (Former VP of Product, InVision)"
      ]
    },
    "Internal Scaler": {
      description: "Internal Scalers focus on optimizing internal processes, improving cross-functional collaboration, and scaling operations to support product development.",
      pros: ["Process optimization", "Cross-functional collaboration", "Scalability expertise", "Team productivity enhancement"],
      cons: ["May focus too much on internal efficiency over external customer needs", "Can be resistant to disruptive change"],
      examples: [
        "Gibson Biddle (Former VP of Product Management, Netflix)",
        "Jackie Bavaro (Former Head of Product Management, Asana)",
        "Shiva Rajaraman (VP of Product, WeWork)"
      ]
    },
    "General Manager": {
      description: "General Managers oversee the entire product strategy, balancing business goals with product development, and often have P&L responsibility.",
      pros: ["Strategic thinking", "Leadership capabilities", "P&L management", "Cross-functional alignment"],
      cons: ["May lack deep expertise in specific technical areas", "Can be too removed from day-to-day product development"],
      examples: [
        "Ravi Mehta (Former CPO, Tinder)",
        "Lenny Rachitsky (Former Product Lead, Airbnb)",
        "Alex Hood (CPO, Asana)"
      ]
    },
    "Product Optimizer": {
      description: "Product Optimizers focus on refining and improving existing products through iterative development, user feedback, and data-driven enhancements.",
      pros: ["Iterative development mastery", "User feedback integration", "Incremental improvements", "Data-driven decisions"],
      cons: ["May struggle with big-picture strategic thinking", "Can be overly focused on existing products rather than innovation"],
      examples: [
        "Ken Norton (Former Partner, Google Ventures)",
        "Teresa Torres (Product Discovery Coach, Product Talk)",
        "Gokul Rajaram (Head of Product, DoorDash)"
      ]
    },
    "Technician": {
      description: "Technicians are deeply technical leaders who focus on complex product architectures, scalability, and integration of new technologies.",
      pros: ["Technical expertise", "Scalability solutions", "System architecture", "Technology integration"],
      cons: ["May focus too much on technology over user experience", "Can struggle communicating with non-technical stakeholders"],
      examples: [
        "Adam Nash (Former VP of Product Management, LinkedIn)",
        "Jeff Dean (Senior Fellow and SVP of Google Research, Google)",
        "Edith Harbaugh (CEO and Co-Founder, LaunchDarkly)"
      ]
    },
    "Zero-to-One Innovator": {
      description: "Zero-to-One Innovators excel at creating entirely new products or entering new markets, often working in high ambiguity and with a visionary approach.",
      pros: ["Visionary thinking", "Market creation", "Breakthrough innovation", "High tolerance for risk and ambiguity"],
      cons: ["May struggle with execution details", "Can overlook operational challenges in favor of vision"],
      examples: [
        "David Cancel (CEO and Founder, Drift)",
        "Gagan Biyani (CEO and Co-Founder, Maven)",
        "Patrick Collison (CEO and Co-Founder, Stripe)"
      ]
    },
    "New Market-Fit Expander": {
      description: "New Market-Fit Expanders excel at adapting existing products for new markets, whether geographical or different market segments.",
      pros: ["Market research expertise", "Cultural adaptability", "Localization skills", "Cross-market insights"],
      cons: ["May struggle with creating entirely new products", "Can over-adapt and dilute core product value"],
      examples: [
        "Neil Hunt (Former CPO, Netflix)",
        "April Underwood (Former CPO, Slack)",
        "Chris O'Neill (Former CEO, Evernote)"
      ]
    }
  };

  const superpowerDescriptions = {
    "Product Crafting": "have the ability to transform abstract concepts into tangible, user-friendly features. You excel at understanding user needs and creating innovative solutions that resonate with users.",
    "Growth Expertise": "have the skill to identify and capitalize on key growth levers to drive rapid user acquisition and engagement. You're adept at data analysis and implementing effective growth strategies.",
    "Organizational Expertise": "have the talent for managing complex projects and aligning diverse teams. You excel at improving efficiency and collaboration across the organization.",
    "Team Expertise": "have the strength in building and leading high-performing product teams. You're skilled at mentoring, fostering a positive culture, and bringing out the best in others."
  };

  const productCultureDescriptions = {
    "Engineering-Driven": "Values technical excellence and innovation. Decisions are primarily based on technical feasibility and engineering constraints.",
    "Data-Driven": "Relies heavily on metrics and experimentation. Decisions are guided by data analysis and A/B testing results.",
    "Design-Driven": "Prioritizes user experience and aesthetic appeal. Decisions are influenced by design principles and user feedback.",
    "Sales-Driven": "Focuses on meeting customer demands and closing deals. Decisions are often influenced by sales team feedback and customer requests.",
    "Vision-Driven": "Emphasizes long-term vision and transformative ideas. Decisions are guided by a desire to create revolutionary products and disrupt markets."
  };

  const pmCultureDescriptions = {
    "PM-Dominated": "Product Managers have high influence and are often the primary decision-makers, leveraging their expertise to drive product direction.",
    "PM-Guided": "PM influence is based on demonstrated competence and merit. Decision-making is collaborative, with PMs as key influencers.",
    "PM-Serviced": "PMs primarily support and facilitate decisions made by other key stakeholders, such as engineering or sales teams."
  };

  const icons = {
    "Growth Driver": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>',
    "UX Innovator": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>',
    "Internal Scaler": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
    "General Manager": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
    "Product Optimizer": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>',
    "Technician": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>',
    "Zero-to-One Innovator": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>',
    "Product Crafting": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>',
    "Growth Expertise": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>',
    "Organizational Expertise": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>',
    "Team Expertise": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
    "New Market-Fit Expander": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/></svg>'
  };

  const archetypeStrengths = {
    "Growth Driver": "I've been a product leader for 10 years, primarily working in high-growth startups where I drove user acquisition and revenue through data-driven strategies and growth hacking techniques.",
    "UX Innovator": "I've been a product leader for 10 years, specializing in creating intuitive and delightful user experiences that redefined industry standards and significantly boosted user engagement.",
    "Internal Scaler": "I've been a product leader for 10 years, focusing on optimizing internal processes and improving team productivity to drive exponential growth in fast-scaling organizations.",
    "General Manager": "I've been a product leader for 10 years, successfully balancing diverse stakeholder needs while achieving overarching business objectives in complex, multi-product environments.",
    "Product Optimizer": "I've been a product leader for 10 years, primarily working in B2B SaaS, turning products with product-market fit into best-in-class solutions through continuous, data-driven improvements.",
    "Technician": "I've been a product leader for 10 years, leveraging deep technical expertise to solve complex challenges and build cutting-edge products in highly technical domains.",
    "Zero-to-One Innovator": "I've been a product leader for 10 years, specializing in conceptualizing and bringing to life entirely new product categories that disrupted established markets.",
    "New Market-Fit Expander": "I've been a product leader for 10 years, specializing in adapting existing products for new markets and use cases, leveraging deep market research and cultural insights to drive successful expansions."
  };

  const archetypeAchievements = {
    "Growth Driver": "Implemented a multi-channel growth strategy that increased user acquisition by 200% and reduced CAC by 40% in 6 months",
    "UX Innovator": "Led a comprehensive UX overhaul that increased user engagement by 70% and reduced churn by 35%, resulting in a $15M ARR increase",
    "Internal Scaler": "Redesigned the product development process, improving time-to-market by 60% and enabling the successful launch of 5 new product lines in one year",
    "General Manager": "Orchestrated the launch of a new enterprise SaaS platform, achieving $20M ARR within the first year and a 95% customer retention rate",
    "Product Optimizer": "Implemented a data-driven optimization framework that improved key performance metrics by 50%, leading to a 30% increase in customer lifetime value",
    "Technician": "Architected a new AI-powered recommendation engine that increased average order value by 45% and drove a 25% improvement in customer satisfaction scores",
    "Zero-to-One Innovator": "Conceptualized and launched an industry-first blockchain-based supply chain solution, securing partnerships with 3 Fortune 500 companies within 6 months of release",
    "New Market-Fit Expander": "Successfully adapted our core product for three new international markets, resulting in a 40% increase in global revenue and establishing market leadership in two new regions within 18 months"
  };

  const superpowerActions = {
    "Product Crafting": "Transform complex market needs into innovative, user-centric features",
    "Growth Expertise": "Identify and capitalize on key growth levers to drive rapid user acquisition and engagement",
    "Organizational Expertise": "Optimize cross-functional workflows and align diverse teams towards common goals",
    "Team Expertise": "Build and mentor high-performing product teams that consistently exceed performance benchmarks"
  };

  const companyRecommendations = {
    "Growth Driver": ["Uber", "Airbnb", "Pinterest", "TikTok", "Dropbox"],
    "UX Innovator": ["Apple", "Figma", "Slack", "Notion", "Canva"],
    "Internal Scaler": ["Amazon", "Google", "Microsoft", "Salesforce", "Oracle"],
    "General Manager": ["Salesforce", "Oracle", "Adobe", "Microsoft", "IBM"],
    "Product Optimizer": ["Booking.com", "Netflix", "Spotify", "LinkedIn", "Twitter"],
    "Technician": ["Tesla", "SpaceX", "NVIDIA", "Cloudflare", "Stripe"],
    "Zero-to-One Innovator": ["Stripe", "Palantir", "Snowflake", "OpenAI", "Anthropic"],
    "New Market-Fit Expander": ["Airbnb", "Netflix", "Uber", "Shopify", "Slack"]
  };

  // ==========================================
  // STATE VARIABLES
  // ==========================================

  let currentQuestionIndex = 0;
  let userResponses = [];
  let nextButton;
  let loadingResults = false;
  let lastSelectedTime = 0; // Add debounce tracking

  // ==========================================
  // UTILITY FUNCTIONS
  // ==========================================

  // Helper function to safely convert strings to lowercase
  function safeToLowerCase(str) {
    if (str && typeof str === 'string') {
      return str.toLowerCase();
    }
    return 'various';
  }
  
  // Helper function for safe property access
  function getSafeProperty(obj, propName, defaultValue) {
    return (obj && obj[propName]) ? obj[propName] : defaultValue;
  }

  // Helper function to get pros string safely
  function getProsString(archetype) {
    if (!archetype) return 'strategic thinking';
    
    const archetypeObj = getSafeProperty(archetypeDescriptions, archetype, {});
    const pros = getSafeProperty(archetypeObj, 'pros', []);
    return pros.length > 0 ? safeToLowerCase(pros[0]) : 'various strengths';
  }

  // Helper function to log debug information
  function logDebug(message, data) {
    console.log(`[Product Quiz] ${message}`, data || '');
  }

  // ==========================================
  // DOM ELEMENT ACCESS
  // ==========================================

  const quizContainer = document.getElementById('quiz');
  const questionTitle = document.getElementById('question-title');
  const resultsContainer = document.getElementById('results');
  const profileSummary = document.getElementById('profile-summary');
  const progressBar = document.getElementById('progress');
  const backArrow = document.getElementById('back-arrow');

  // Check if required elements exist
  function verifyRequiredElements() {
    const elements = {
      quizContainer,
      questionTitle,
      resultsContainer,
      profileSummary,
      progressBar,
      backArrow
    };
    
    const missingElements = Object.entries(elements)
      .filter(([name, element]) => !element)
      .map(([name]) => name);
    
    if (missingElements.length > 0) {
      console.error(`Missing required DOM elements: ${missingElements.join(', ')}`);
      return false;
    }
    
    return true;
  }

  // ==========================================
  // NAVIGATION & UI FUNCTIONS
  // ==========================================

  // Create or ensure next button exists
  function ensureNextButtonExists() {
    if (!nextButton) {
      nextButton = document.createElement('button');
      nextButton.textContent = 'Next';
      nextButton.id = 'next-btn';
      nextButton.classList.add('gradient-button');
      nextButton.style.display = 'none';
      nextButton.style.width = '100%';
      nextButton.style.marginTop = '20px';
      nextButton.addEventListener('click', goToNextQuestion);
      
      if (quizContainer && quizContainer.parentNode) {
        quizContainer.parentNode.insertBefore(nextButton, quizContainer.nextSibling);
      } else {
        logDebug('Cannot add next button - parent container not found');
      }
    }
    return nextButton;
  }

  // Show loading state
  function showLoading() {
    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <div class="loading">
          <p>Analyzing your responses...</p>
          <div class="loading-spinner"></div>
        </div>
      `;
      resultsContainer.style.display = 'block';
    }
  }

  // Update progress bar
  function updateProgressBar() {
    if (!progressBar) return;
    
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Add aria attributes for accessibility
    progressBar.setAttribute('aria-valuenow', currentQuestionIndex + 1);
    progressBar.setAttribute('aria-valuemax', quizData.length);
  }

  // Go to the next question
  function goToNextQuestion() {
    if (isTransitioning) {
      logDebug('Ignoring navigation during transition');
      return;
    }

    isTransitioning = true;
    
    // Validate current responses before moving
    const currentResponses = userResponses[currentQuestionIndex];
    const currentQuestion = quizData[currentQuestionIndex];
    
    if (!currentResponses || !currentQuestion || 
        (currentQuestion.type === 'multi' && (!Array.isArray(currentResponses) || currentResponses.length !== 2))) {
      logDebug('Invalid state for navigation', 'error');
      isTransitioning = false;
      return;
    }

    currentQuestionIndex++;
    
    // Check if we should show results
    if (currentQuestionIndex >= quizData.length) {
      isTransitioning = false;
      showResults();
      return;
    }

    // Show next question with a slight delay for transition
      setTimeout(() => {
    showQuestion(currentQuestionIndex);
      isTransitioning = false;
    }, 100);
  }

  // Go to the previous question
  function goToPreviousQuestion() {
    if (isTransitioning || currentQuestionIndex <= 0) {
        return;
      }

    isTransitioning = true;
      currentQuestionIndex--;
    
    // Show previous question with a slight delay for transition
    setTimeout(() => {
      showQuestion(currentQuestionIndex);
      isTransitioning = false;
    }, 100);
  }

  // ==========================================
  // QUESTION DISPLAY & INTERACTION
  // ==========================================

  // Display current question
  function showQuestion(index) {
    logDebug(`Showing question ${index+1} of ${quizData.length}`);
    
    // Check if we've gone through all questions
    if (index >= quizData.length) {
      logDebug(`All ${quizData.length} questions completed, showing results`);
      loadingResults = true;
      showLoading();
      // Use setTimeout to allow loading state to render
      setTimeout(showResults, 500);
      return;
    }

    // Hide results, show quiz
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'block';
    if (questionTitle) questionTitle.style.display = 'block';
    
    // Show/hide back arrow
    if (backArrow) {
      backArrow.style.display = index === 0 ? 'none' : 'block';
      backArrow.setAttribute('aria-label', 'Go back to previous question');
    }

    if (!quizContainer) {
      logDebug('Quiz container not found', 'error');
      return;
    }

    // Get the current question
    const question = quizData[index];
    logDebug(`Current question: "${question.question}"`);
    
    // Set the question text
    if (questionTitle) {
      questionTitle.textContent = question.question;
      // Add multi-select instruction if needed
      if (question.type === 'multi') {
        const instructionSpan = document.createElement('span');
        instructionSpan.className = 'selection-instruction';
        instructionSpan.textContent = ' (Select 2)';
        questionTitle.appendChild(instructionSpan);
      }
    }
    
    quizContainer.innerHTML = '';

    // Create option buttons
    question.options.forEach((option, optionIndex) => {
      const button = document.createElement('button');
      button.classList.add('option');
      button.setAttribute('role', 'option');
      button.setAttribute('aria-selected', 'false');
      button.innerHTML = `<span>${option.text}</span>`;
      button.addEventListener('click', () => selectOption(optionIndex, question.type));

      // Show previously selected options
      if (userResponses[index] && userResponses[index].includes(optionIndex)) {
        button.classList.add('selected');
        button.setAttribute('aria-selected', 'true');
        logDebug(`Option ${optionIndex} is pre-selected: "${option.text}"`);
      }

      quizContainer.appendChild(button);
    });

    // Update the progress bar
    updateProgressBar();

    // Handle the next button for multi-choice questions
    const btn = ensureNextButtonExists();
    btn.style.display = question.type === 'multi' ? 'block' : 'none';
    
    // Check if we have enough selections for this question
    if (question.type === 'multi') {
      const hasEnoughSelections = userResponses[index] && userResponses[index].length === 2;
      btn.disabled = !hasEnoughSelections;
      btn.setAttribute('aria-disabled', !hasEnoughSelections);
      logDebug(`Next button for multi-choice question is ${btn.disabled ? 'disabled' : 'enabled'}`);
      logDebug(`Current selections: ${userResponses[index] ? userResponses[index].length : 0}/2`);
    }
  }

  // Handle option selection
  function selectOption(optionIndex, questionType) {
    const now = Date.now();
    if (now - lastSelectedTime < DEBOUNCE_DELAY || isTransitioning || isCalculatingResults) {
        return;
    }
    lastSelectedTime = now;

    const currentQuestion = quizData[currentQuestionIndex];
    if (!currentQuestion) {
        logDebug('No current question found');
        return;
    }

    const selectedOption = currentQuestion.options[optionIndex];
    if (!selectedOption) {
        logDebug('Invalid option index:', optionIndex);
        return;
    }

    // Update selected options
    if (currentQuestion.type === 'multi') {
        const index = currentQuestion.selectedOptions.indexOf(optionIndex);
        if (index === -1) {
            currentQuestion.selectedOptions.push(optionIndex);
        } else {
            currentQuestion.selectedOptions.splice(index, 1);
        }
    } else {
        currentQuestion.selectedOptions = [optionIndex];
    }

    // Update UI
    updateOptionButtons();
    updateNextButton();

    // Handle auto-advance for single choice questions
    if (currentQuestion.type === 'single') {
        isTransitioning = true;
        setTimeout(() => {
            if (currentQuestionIndex === quizData.length - 1) {
                showResults();
            } else {
                goToNextQuestion();
            }
            isTransitioning = false;
        }, DEBOUNCE_DELAY);
    }
}

  // ==========================================
  // INITIALIZATION
  // ==========================================

  // Clean up event listeners and state
  function cleanup() {
    // Remove keyboard event listeners
    document.removeEventListener('keydown', handleKeyboardNavigation);
    
    // Remove option click listeners
    const options = quizContainer.querySelectorAll('.option');
    options.forEach(option => {
      const clone = option.cloneNode(true);
      option.parentNode.replaceChild(clone, option);
    });
    
    // Reset state
    currentQuestionIndex = 0;
    userResponses = [];
    loadingResults = false;
    isTransitioning = false;
    lastSelectedTime = 0;
  }

  // Handle keyboard navigation
  function handleKeyboardNavigation(e) {
    // Ignore if quiz is not active or an input is focused
    if (!quizContainer || quizContainer.style.display === 'none' || 
        document.activeElement.tagName === 'INPUT' || 
        document.activeElement.tagName === 'TEXTAREA') {
      return;
    }
    
    // Left arrow = previous question
    if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
      goToPreviousQuestion();
    }
    
    // Right arrow or Enter = next question (if next button is enabled)
    if ((e.key === 'ArrowRight' || e.key === 'Enter') && 
        nextButton && nextButton.style.display !== 'none' && !nextButton.disabled) {
      goToNextQuestion();
    }
    
    // Number keys 1-9 = select option (for single choice questions)
    if (/^[1-9]$/.test(e.key)) {
      const optionIndex = parseInt(e.key) - 1;
      const options = document.querySelectorAll('.option');
      
      if (optionIndex < options.length && quizData[currentQuestionIndex].type === 'single') {
        selectOption(optionIndex, 'single');
      }
    }
  }

  // Reset the quiz
  function resetQuiz() {
    // Clean up existing state and listeners
    cleanup();
    
    // Reset UI elements
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'block';
    if (questionTitle) questionTitle.style.display = 'block';
    if (nextButton) nextButton.style.display = 'none';
    if (backArrow) backArrow.style.display = 'none';
    
    // Set up fresh event listeners
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Start fresh
    showQuestion(0);
  }

  // Validate scores before calculation
  function validateScores(scores) {
    if (!scores || typeof scores !== 'object') {
      logDebug('Invalid scores object', 'error');
      return false;
    }

    const requiredCategories = ['archetypes', 'superpowers', 'productCultures', 'pmCultures'];
    for (const category of requiredCategories) {
      if (!scores[category] || typeof scores[category] !== 'object') {
        logDebug(`Missing or invalid category: ${category}`, 'error');
        return false;
      }
    }

    return true;
  }

  // Calculate scores with validation
  function calculateScores() {
    logDebug('------- SCORE CALCULATION START -------');
    
    // Initialize scores object
    const scores = {
      archetypes: {},
      superpowers: {},
      productCultures: {},
      pmCultures: {}
    };

    try {
    // Validate user responses
    if (!userResponses || !Array.isArray(userResponses)) {
      logDebug('User responses is not an array', 'error');
      return getDefaultScores();
    }
    
    if (userResponses.length === 0) {
      logDebug('User responses array is empty', 'error');
      return getDefaultScores();
    }
    
    // Check for unanswered questions
    const unansweredQuestions = [];
    for (let i = 0; i < quizData.length; i++) {
      if (!userResponses[i] || !userResponses[i].length || 
          (quizData[i].type === 'multi' && userResponses[i].length !== 2)) {
        unansweredQuestions.push(i + 1);
      }
    }
    
    if (unansweredQuestions.length > 0) {
      logDebug(`Warning: Questions ${unansweredQuestions.join(', ')} are unanswered or incomplete`, 'warn');
    }
    
    // Process each response and calculate scores
    userResponses.forEach((response, index) => {
      if (!response || !Array.isArray(response) || response.length === 0) {
        logDebug(`Skipping question ${index+1} - no valid response`, 'warn');
        return;
      }

      const question = quizData[index];
      if (!question) {
        logDebug(`Skipping question ${index+1} - no question data found`, 'warn');
        return;
      }

      response.forEach(optionIndex => {
        if (optionIndex < 0 || optionIndex >= question.options.length) {
          logDebug(`Invalid option index ${optionIndex} for question ${index+1}`, 'warn');
          return;
        }
        
        const option = question.options[optionIndex];
          if (!option || !option.scores) {
          logDebug(`No scoring data for option ${optionIndex} of question ${index+1}`, 'warn');
          return;
        }
        
        Object.entries(option.scores).forEach(([key, value]) => {
          if (key in archetypeDescriptions) {
            scores.archetypes[key] = (scores.archetypes[key] || 0) + value;
          } else if (key in superpowerDescriptions) {
            scores.superpowers[key] = (scores.superpowers[key] || 0) + value;
          } else if (key in productCultureDescriptions) {
            scores.productCultures[key] = (scores.productCultures[key] || 0) + value;
          } else if (key in pmCultureDescriptions) {
            scores.pmCultures[key] = (scores.pmCultures[key] || 0) + value;
          }
        });
      });
    });

      // Ensure we have at least one score in each category
      const categories = ['archetypes', 'superpowers', 'productCultures', 'pmCultures'];
      categories.forEach(category => {
        if (Object.keys(scores[category]).length === 0) {
          logDebug(`No scores found for ${category}, using defaults`, 'warn');
          const defaultScores = getDefaultScores();
          scores[category] = defaultScores[category];
        }
      });

      logDebug('Final scores:', scores);
      return scores;

    } catch (err) {
      logDebug(`Error calculating scores: ${err.message}`, 'error');
      return getDefaultScores();
    }
  }
  
  // Get default scores in case of calculation error
  function getDefaultScores() {
    return {
      archetypes: { "Growth Driver": 1 },
      superpowers: { "Product Crafting": 1 },
      productCultures: { "Data-Driven": 1 },
      pmCultures: { "PM-Guided": 1 }
    };
  }

  // Show quiz results
  function showResults() {
    if (isCalculatingResults) {
      return;
  }
  
    try {
      isCalculatingResults = true;
      logDebug('Showing quiz results');
      
      if (!resultsContainer || !profileSummary) {
        logDebug('Required DOM elements missing for results display', 'error');
        return;
      }

      // Show loading state first
      resultsContainer.innerHTML = `
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Calculating your results...</p>
        </div>
      `;
      resultsContainer.style.display = 'block';

      // Hide quiz elements
      if (quizContainer) quizContainer.style.display = 'none';
      if (questionTitle) questionTitle.style.display = 'none';
      if (nextButton) nextButton.style.display = 'none';
      if (backArrow) backArrow.style.display = 'block';

      // Calculate results after a brief delay to show loading state
      setTimeout(() => {
        try {
      let scores;
      try {
        scores = calculateScores();
            logDebug('Calculated scores:', scores);
      } catch (err) {
            logDebug('Error calculating scores:', err);
        resultsContainer.innerHTML = '<p>An error occurred while calculating your results. Please try again.</p>';
        return;
      }

          if (!scores || !scores.archetypes || Object.keys(scores.archetypes).length === 0) {
            logDebug('Invalid scores calculated');
            resultsContainer.innerHTML = '<p>An error occurred while calculating your results. Please try again.</p>';
        return;
      }

          // Find top scores with error handling
          const getTopScore = (category) => {
            const entries = Object.entries(scores[category] || {});
            if (!entries.length) {
              logDebug(`No entries found for ${category}, using defaults`, 'warn');
              const defaultScores = getDefaultScores();
              return Object.entries(defaultScores[category])[0][0];
            }
            return entries.sort(([,a], [,b]) => b - a)[0][0];
          };

          const topArchetype = getTopScore('archetypes');
          const topSuperpower = getTopScore('superpowers');
          const topProductCulture = getTopScore('productCultures');
          const topPMCulture = getTopScore('pmCultures');

          if (!topArchetype || !archetypeDescriptions[topArchetype]) {
            throw new Error('Invalid top archetype');
    }
    
          // Build results HTML
          const archetypeData = archetypeDescriptions[topArchetype];
          const resultHTML = `
            <div class="results-container">
              <h2>Your Product Leadership Archetype</h2>
              
              <div class="archetype-section">
                <div class="archetype-header">
                  <div class="archetype-icon">${icons[topArchetype] || ''}</div>
                  <h3>${topArchetype}</h3>
                </div>
                <p class="archetype-description">${archetypeData.description}</p>
              </div>

              <div class="strengths-section">
                <h3>Your Professional Summary</h3>
                <p>${archetypeStrengths[topArchetype]}</p>
                <p>You ${superpowerDescriptions[topSuperpower]}</p>
              </div>

              <div class="achievement-section">
                <h3>Example Achievement</h3>
                <p>${archetypeAchievements[topArchetype]}</p>
              </div>

              <div class="visualization-section">
                <h3>Your Archetype Profile</h3>
                <div id="spider-chart"></div>
              </div>

              <div class="superpowers-section">
                <h3>Your Superpowers</h3>
                <div class="primary-superpower">
                  <h4>${topSuperpower}</h4>
                  <p>${superpowerDescriptions[topSuperpower]}</p>
          </div>
                ${secondarySuperpower ? `
                  <div class="secondary-superpower">
                    <h4>${secondarySuperpower}</h4>
                    <p>${superpowerDescriptions[secondarySuperpower]}</p>
          </div>
                ` : ''}
        </div>

              <div class="career-section">
                <h3>Career Development</h3>
                <div class="trajectory">
                  <h4>Recommended Career Path</h4>
                  <ul>
                    <li>Current: Senior Product Manager</li>
                    <li>Next Step: Director of Product</li>
                    <li>Future Path: VP of Product / CPO</li>
              </ul>
            </div>
                <div class="resume-bullets">
                  <h4>Example Resume Bullets</h4>
              <ul>
                    <li>${archetypeAchievements[topArchetype]}</li>
                    <li>Led cross-functional teams to ${superpowerActions[topSuperpower]}</li>
                    <li>Demonstrated expertise in ${getProsString(topArchetype)}</li>
              </ul>
            </div>
          </div>

              <div class="company-fit-section">
                <h3>Recommended Companies</h3>
                <p>Based on your profile, these companies align well with your strengths:</p>
        <ul>
                  ${companyRecommendations[topArchetype].map(company => `<li>${company}</li>`).join('')}
        </ul>
      </div>
      
              <button onclick="location.reload()" class="gradient-button restart-button">Take Quiz Again</button>
            </div>`;

          // Display results
          resultsContainer.innerHTML = resultHTML;
          resultsContainer.style.display = 'block';
          
          // Create visualization
          try {
            createCustomVisualization(scores);
          } catch (err) {
            logDebug('Error creating visualization:', err);
            const vizContainer = document.getElementById('spider-chart');
            if (vizContainer) {
              vizContainer.innerHTML = '<p>Unable to generate the visualization. Please try again.</p>';
            }
  }

          // Submit results data
          submitQuizData({
            primaryArchetype: topArchetype,
            secondaryArchetype,
            primarySuperpower: topSuperpower,
            secondarySuperpower,
            productCulture: topProductCulture,
            pmCulture: topPMCulture,
            responses: userResponses
          });
          
          logDebug('Results displayed successfully');

        } catch (err) {
          logDebug(`Error showing results: ${err.message}`, 'error');
          resultsContainer.innerHTML = `
            <div class="error-state">
              <p>An error occurred while calculating your results.</p>
              <button onclick="location.reload()" class="gradient-button">Try Again</button>
            </div>
          `;
        } finally {
          isCalculatingResults = false;
        }
      }, 100);

    } catch (err) {
      logDebug(`Error in showResults: ${err.message}`, 'error');
      isCalculatingResults = false;
      showError('An error occurred while displaying your results. Please try again.');
  }
  }

  // Start the quiz
  function startQuiz() {
    if (!verifyRequiredElements()) {
      logDebug('Cannot start quiz - missing required elements', 'error');
      showError('An error occurred while loading the quiz. Please refresh the page and try again.');
      return;
    }
    
    // Clean up any existing state
    cleanup();
    
    // Set up keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Start fresh
    showQuestion(0);
    
    logDebug('Quiz started successfully');
  }
  
  // Handle back arrow click
  function handleBackArrowClick() {
    try {
      if (loadingResults) {
        logDebug('Ignoring back button - results are loading');
        return;
      }
      
      if (resultsContainer && resultsContainer.style.display === 'block') {
        // Back from results to last question
        resultsContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        questionTitle.style.display = 'block';
        if (nextButton) nextButton.style.display = 'none';
        currentQuestionIndex = quizData.length - 1;
        showQuestion(currentQuestionIndex);
      } else if (currentQuestionIndex > 0) {
        // Back to previous question
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
      }
    } catch (err) {
      logDebug(`Error in back arrow handler: ${err.message}`, 'error');
    }
  }
  
  // Add keyboard navigation
  function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
      // Ignore if quiz is not active or an input is focused
      if (!quizContainer || quizContainer.style.display === 'none' || 
          document.activeElement.tagName === 'INPUT' || 
          document.activeElement.tagName === 'TEXTAREA') {
        return;
      }
      
      // Left arrow = previous question
      if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        goToPreviousQuestion();
      }
      
      // Right arrow or Enter = next question (if next button is enabled)
      if ((e.key === 'ArrowRight' || e.key === 'Enter') && 
          nextButton && nextButton.style.display !== 'none' && !nextButton.disabled) {
        goToNextQuestion();
      }
      
      // Number keys 1-9 = select option (for single choice questions)
      if (/^[1-9]$/.test(e.key)) {
        const optionIndex = parseInt(e.key) - 1;
        const options = document.querySelectorAll('.option');
        
        if (optionIndex < options.length && quizData[currentQuestionIndex].type === 'single') {
          selectOption(optionIndex, 'single');
        }
      }
    });
  }

  // Helper function to show errors consistently
  function showError(message) {
    if (quizContainer) {
      quizContainer.innerHTML = `
        <div class="error-message">
          <h3>Sorry, there was a problem loading the quiz</h3>
          <p>${message}</p>
          <button onclick="location.reload()" class="gradient-button">Refresh Page</button>
        </div>
      `;
      quizContainer.style.display = 'block';
    }
  }

  // Add CSS for additional styling
  function addCustomStyles() {
    // Check if styles are already added
    if (document.getElementById('quiz-styles')) {
      return;
    }

    const styleEl = document.createElement('style');
    styleEl.id = 'quiz-styles';
    styleEl.textContent = `
      .quiz-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }

      .option {
        display: block;
        width: 100%;
        padding: 15px;
        margin: 10px 0;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        background: #fff;
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: left;
        font-size: 16px;
      }

      .option:hover {
        border-color: var(--primary-color);
        background: #f8f9fa;
      }

      .option.selected {
        border-color: var(--primary-color);
        background: var(--primary-color);
        color: #fff;
      }

      .pulse-animation {
        animation: click-feedback 0.15s ease-out forwards;
      }
      
      .shake-animation {
        animation: shake 0.5s ease-in-out;
      }
      
      @keyframes click-feedback {
        0% { opacity: 1; }
        50% { opacity: 0.7; }
        100% { opacity: 1; }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-5px); }
        40%, 80% { transform: translateX(5px); }
      }
      
      .error-message {
        text-align: center;
        padding: 20px;
        background: #fff3f3;
        border: 1px solid #ffcdd2;
        border-radius: 8px;
        margin: 20px 0;
      }

      .error-message h3 {
        color: #d32f2f;
        margin-bottom: 10px;
      }
      
      .loading {
        text-align: center;
        padding: 30px;
      }
      
      .loading-spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid var(--primary-color);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 20px auto;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      #progress-container {
        width: 100%;
        height: 4px;
        background: #e0e0e0;
        margin: 20px 0;
        border-radius: 2px;
      }
      
      #progress {
        width: 0;
        height: 100%;
        background: var(--primary-color);
        border-radius: 2px;
        transition: width 0.3s ease;
      }

      #back-arrow {
        position: absolute;
        top: 20px;
        left: 20px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
      }

      #back-arrow svg {
        width: 24px;
        height: 24px;
        fill: currentColor;
      }
      
      @media (max-width: 768px) {
        .quiz-container {
          padding: 10px;
        }

        .option {
          padding: 12px;
          font-size: 14px;
        }
      }
      
      .visualization-section {
        margin: 30px 0;
        padding: 20px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .spider-chart {
        width: 100%;
        height: 400px;
        margin: 20px 0;
      }

      .superpowers-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin: 20px 0;
      }
      
      .primary-superpower,
      .secondary-superpower {
        padding: 20px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .career-section {
        margin: 30px 0;
      }

      .trajectory,
      .resume-bullets {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        margin: 15px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .company-fit-section {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      .company-fit-section ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
        list-style: none;
        padding: 0;
        margin: 15px 0;
        }
        
      .company-fit-section li {
        padding: 10px;
        background: #f8f9fa;
        border-radius: 4px;
        text-align: center;
      }

      @media (max-width: 768px) {
        .superpowers-section {
          grid-template-columns: 1fr;
        }
        
        .company-fit-section ul {
          grid-template-columns: 1fr;
        }
      }
    `;
    
    // Append styles to head
    document.head.appendChild(styleEl);
      }
      
  // Initialize required DOM elements
  function initializeElements() {
    // Create quiz container if it doesn't exist
    if (!document.getElementById('quiz-container')) {
      const container = document.createElement('div');
      container.id = 'quiz-container';
      container.className = 'quiz-container';
      document.body.appendChild(container);
      }
      
    // Create quiz elements if they don't exist
    const container = document.getElementById('quiz-container');
    
    if (!document.getElementById('quiz')) {
      const quiz = document.createElement('div');
      quiz.id = 'quiz';
      container.appendChild(quiz);
      }
      
    if (!document.getElementById('question-title')) {
      const title = document.createElement('h2');
      title.id = 'question-title';
      container.insertBefore(title, container.firstChild);
      }
      
    if (!document.getElementById('results')) {
      const results = document.createElement('div');
      results.id = 'results';
      results.style.display = 'none';
      container.appendChild(results);
    }

    if (!document.getElementById('profile-summary')) {
      const summary = document.createElement('div');
      summary.id = 'profile-summary';
      document.getElementById('results').appendChild(summary);
      }
      
    if (!document.getElementById('progress-container')) {
      const progressContainer = document.createElement('div');
      progressContainer.id = 'progress-container';
      const progress = document.createElement('div');
      progress.id = 'progress';
      progressContainer.appendChild(progress);
      container.insertBefore(progressContainer, container.firstChild);
        }
        
    if (!document.getElementById('back-arrow')) {
      const backArrow = document.createElement('button');
      backArrow.id = 'back-arrow';
      backArrow.innerHTML = '<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>';
      backArrow.setAttribute('aria-label', 'Go back');
      container.insertBefore(backArrow, container.firstChild);
    }
  }

  // Initialize the quiz
  function init() {
    try {
      logDebug('Initializing quiz...');
      
      // Verify required elements exist
      if (!verifyRequiredElements()) {
        throw new Error('Required DOM elements not found');
      }
      
      // Start the quiz
      startQuiz();
      
      logDebug('Quiz initialized successfully');
    } catch (err) {
      logDebug(`Error initializing quiz: ${err.message}`, 'error');
      showError('An error occurred while initializing the quiz. Please refresh the page and try again.');
      }
}

// Initialize the quiz when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Add global error handler
window.addEventListener('error', function(event) {
  console.error('Product Quiz - Global error caught:', event.error);
    showError('An unexpected error occurred. Please refresh the page and try again.');
  });

  // Submit quiz results data
  function submitQuizData(scores, topArchetype) {
    logDebug('Submitting quiz data');
    
    try {
      // Prepare data for submission
      const data = {
        scores,
        topArchetype,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      };

      // Log submission attempt
      logDebug('Submitting data:', data);

      // Create a unique callback name
      const callbackName = 'quizCallback_' + Math.random().toString(36).substr(2, 9);
      
      // Define the callback function
      window[callbackName] = function(response) {
        logDebug('Submission response received:', response);
        // Clean up the callback
        delete window[callbackName];
        // Remove the script tag
        const scriptElement = document.getElementById('quiz-submit-script');
        if (scriptElement) {
          scriptElement.remove();
        }
      };

      // Create the script element for JSONP
      const script = document.createElement('script');
      script.id = 'quiz-submit-script';
      script.src = `https://hooks.zapier.com/hooks/catch/YOUR_HOOK_ID?callback=${callbackName}&data=${encodeURIComponent(JSON.stringify(data))}`;
      
      // Handle loading errors
      script.onerror = function() {
        logDebug('Error submitting quiz data', 'error');
        delete window[callbackName];
        script.remove();
      };

      // Append the script to the document
      document.body.appendChild(script);
      
    } catch (err) {
      logDebug(`Error submitting quiz data: ${err.message}`, 'error');
      // Note: We don't show an error to the user here since this is non-critical
    }
  }

  function createCustomVisualization(scores) {
    const container = document.getElementById('data-visualization');
    if (!container) {
      console.error('Data visualization container not found');
      return;
    }
    
    container.innerHTML = '';
    
    if (!scores || !scores.archetypes || Object.keys(scores.archetypes).length === 0) {
      container.innerHTML = '<p>No visualization data available</p>';
      return;
    }

    // Create spider/radar chart
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 600 400");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "400");

    const sortedArchetypes = Object.entries(scores.archetypes)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);

    if (sortedArchetypes.length === 0) {
      container.innerHTML = '<p>Insufficient data for visualization</p>';
      return;
    }

    const maxScore = Math.max(...Object.values(scores.archetypes)) || 1;
    const colors = [
      '#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f', '#edc949', '#af7aa1', '#ff9da7', '#9c755f'
    ];

    // Add spider chart background
    const centerX = 300;
    const centerY = 200;
    const radius = 150;
    const numLevels = 5;

    // Draw spider web background
    for (let level = 1; level <= numLevels; level++) {
      const pathPoints = [];
      const currentRadius = (radius * level) / numLevels;

      sortedArchetypes.forEach((_, i) => {
        const angle = (i / sortedArchetypes.length) * 2 * Math.PI - Math.PI / 2;
        const x = centerX + currentRadius * Math.cos(angle);
        const y = centerY + currentRadius * Math.sin(angle);
        pathPoints.push(`${x},${y}`);
      });

      const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      polygon.setAttribute("points", pathPoints.join(" "));
      polygon.setAttribute("fill", "none");
      polygon.setAttribute("stroke", "#ddd");
      polygon.setAttribute("stroke-width", "1");
      svg.appendChild(polygon);
    }

    // Draw axis lines
    sortedArchetypes.forEach((_, i) => {
      const angle = (i / sortedArchetypes.length) * 2 * Math.PI - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", centerX);
      line.setAttribute("y1", centerY);
      line.setAttribute("x2", x);
      line.setAttribute("y2", y);
      line.setAttribute("stroke", "#ddd");
      line.setAttribute("stroke-width", "1");
      svg.appendChild(line);
    });

    // Draw data points and area
    const dataPoints = sortedArchetypes.map((archetype, i) => {
      const score = scores.archetypes[archetype] || 0;
      const normalizedRadius = (radius * score) / maxScore;
      const angle = (i / sortedArchetypes.length) * 2 * Math.PI - Math.PI / 2;
      const x = centerX + normalizedRadius * Math.cos(angle);
      const y = centerY + normalizedRadius * Math.sin(angle);
      return `${x},${y}`;
    });

    // Draw filled area
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", dataPoints.join(" "));
    polygon.setAttribute("fill", colors[0]);
    polygon.setAttribute("fill-opacity", "0.3");
    polygon.setAttribute("stroke", colors[0]);
    polygon.setAttribute("stroke-width", "2");
    svg.appendChild(polygon);

    // Add data points
    dataPoints.forEach((point, i) => {
      const [x, y] = point.split(",");
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", x);
      circle.setAttribute("cy", y);
      circle.setAttribute("r", "4");
      circle.setAttribute("fill", colors[0]);
      svg.appendChild(circle);

      // Add labels
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      const angle = (i / sortedArchetypes.length) * 2 * Math.PI - Math.PI / 2;
      const labelRadius = radius + 20;
      const labelX = centerX + labelRadius * Math.cos(angle);
      const labelY = centerY + labelRadius * Math.sin(angle);
      
      label.setAttribute("x", labelX);
      label.setAttribute("y", labelY);
      label.setAttribute("text-anchor", angle > Math.PI / 2 && angle < 3 * Math.PI / 2 ? "end" : "start");
      label.setAttribute("alignment-baseline", "middle");
      label.setAttribute("fill", "#333");
      label.setAttribute("font-size", "12");
      label.textContent = sortedArchetypes[i];
      svg.appendChild(label);
    });

    container.appendChild(svg);
  }

  // ... existing code ...
}

// ... existing code ...

// Start the quiz initialization
initQuiz();
