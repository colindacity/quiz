 /* Product Leadership Archetype Quiz
 * Enhanced version with improved functionality, error handling, and UI
 */

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
    "Growth Expertise": "have the skill to identify and optimize key metrics to drive rapid user acquisition and engagement. You're adept at data analysis and implementing effective growth strategies.",
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
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }

  // Go to the previous question
  function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion(currentQuestionIndex);
    }
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
    logDebug(`Selecting option ${optionIndex} for question ${currentQuestionIndex+1} (type: ${questionType})`);
    
    const options = quizContainer.querySelectorAll('.option');
    if (!options || !options.length) {
      logDebug('No options found in selectOption', 'error');
      return;
    }

    if (questionType === 'single') {
      // Single choice question - select one option and move on
      options.forEach((opt, index) => {
        const isSelected = index === optionIndex;
        opt.classList.toggle('selected', isSelected);
        opt.setAttribute('aria-selected', isSelected);
      });
      
      userResponses[currentQuestionIndex] = [optionIndex];
      logDebug(`Set response for question ${currentQuestionIndex+1} to: [${optionIndex}]`);
      
      // Add selection animation
      options[optionIndex].classList.add('pulse-animation');
      
      // Move to the next question after a short delay
      setTimeout(() => {
        goToNextQuestion();
      }, 300);
      
    } else if (questionType === 'multi') {
      // Multi choice question - select up to 2 options
      const selectedOptions = userResponses[currentQuestionIndex] || [];

      if (selectedOptions.includes(optionIndex)) {
        // Deselect if already selected
        options[optionIndex].classList.remove('selected');
        options[optionIndex].setAttribute('aria-selected', 'false');
        selectedOptions.splice(selectedOptions.indexOf(optionIndex), 1);
      } else if (selectedOptions.length < 2) {
        // Select if we haven't already selected 2 options
        options[optionIndex].classList.add('selected');
        options[optionIndex].classList.add('pulse-animation');
        options[optionIndex].setAttribute('aria-selected', 'true');
        selectedOptions.push(optionIndex);
      } else {
        // Give feedback that 2 are already selected
        options[optionIndex].classList.add('shake-animation');
        setTimeout(() => {
          options[optionIndex].classList.remove('shake-animation');
        }, 500);
      }

      // Update the responses
      userResponses[currentQuestionIndex] = selectedOptions;
      logDebug(`Updated response for question ${currentQuestionIndex+1} to: [${selectedOptions}]`);
      
      // Enable/disable the next button based on whether 2 options are selected
      const btn = ensureNextButtonExists();
      if (btn) {
        btn.disabled = selectedOptions.length !== 2;
        btn.setAttribute('aria-disabled', selectedOptions.length !== 2);
      }
      
      logDebug(`Next button ${btn.disabled ? 'disabled' : 'enabled'} (selected: ${selectedOptions.length}/2)`);
    }
    
    // Remove animation classes after they complete
    setTimeout(() => {
      options.forEach(opt => {
        opt.classList.remove('pulse-animation');
      });
    }, 500);
  }

  // ==========================================
  // SCORING & RESULTS CALCULATION
  // ==========================================

  // Calculate scores based on user responses
  function calculateScores() {
    logDebug('------- SCORE CALCULATION START -------');
    logDebug('User responses:', JSON.stringify(userResponses));
    
    // Initialize scores object
    const scores = {
      archetypes: {},
      superpowers: {},
      productCultures: {},
      pmCultures: {}
    };

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
      // Skip if no valid response
      if (!response || !Array.isArray(response) || response.length === 0) {
        logDebug(`Skipping question ${index+1} - no valid response`, 'warn');
        return;
      }

      // Get the question data
      const question = quizData[index];
      if (!question) {
        logDebug(`Skipping question ${index+1} - no question data found`, 'warn');
        return;
      }

      logDebug(`Processing question ${index+1}: "${question.question}"`);
      
      // Process each selected option
      response.forEach(optionIndex => {
        // Validate option index
        if (optionIndex < 0 || optionIndex >= question.options.length) {
          logDebug(`Invalid option index ${optionIndex} for question ${index+1}`, 'warn');
          return;
        }
        
        // Get the selected option
        const option = question.options[optionIndex];
        if (!option) {
          logDebug(`No option found at index ${optionIndex} for question ${index+1}`, 'warn');
          return;
        }
        
        // Check if option has scores
        if (!option.scores) {
          logDebug(`No scoring data for option ${optionIndex} of question ${index+1}`, 'warn');
          return;
        }
        
        logDebug(`  Selected: "${option.text}"`);
        
        // Add scores to the appropriate categories
        Object.entries(option.scores).forEach(([key, value]) => {
          // Check which category this key belongs to and add score
          if (key in archetypeDescriptions) {
            scores.archetypes[key] = (scores.archetypes[key] || 0) + value;
            logDebug(`    Added ${value} points to archetype "${key}" (total: ${scores.archetypes[key]})`);
          } else if (key in superpowerDescriptions) {
            scores.superpowers[key] = (scores.superpowers[key] || 0) + value;
            logDebug(`    Added ${value} points to superpower "${key}" (total: ${scores.superpowers[key]})`);
          } else if (key in productCultureDescriptions) {
            scores.productCultures[key] = (scores.productCultures[key] || 0) + value;
            logDebug(`    Added ${value} points to product culture "${key}" (total: ${scores.productCultures[key]})`);
          } else if (key in pmCultureDescriptions) {
            scores.pmCultures[key] = (scores.pmCultures[key] || 0) + value;
            logDebug(`    Added ${value} points to PM culture "${key}" (total: ${scores.pmCultures[key]})`);
          } else {
            logDebug(`    Unknown category for key "${key}"`, 'warn');
          }
        });
      });
    });

    // Ensure we have at least some values in each category
    if (Object.keys(scores.archetypes).length === 0) {
      logDebug('No archetype scores were calculated - using defaults', 'warn');
      scores.archetypes = getDefaultScores().archetypes;
    }
    
    if (Object.keys(scores.superpowers).length === 0) {
      logDebug('No superpower scores were calculated - using defaults', 'warn');
      scores.superpowers = getDefaultScores().superpowers;
    }
    
    if (Object.keys(scores.productCultures).length === 0) {
      logDebug('No product culture scores were calculated - using defaults', 'warn');
      scores.productCultures = getDefaultScores().productCultures;
    }
    
    if (Object.keys(scores.pmCultures).length === 0) {
      logDebug('No PM culture scores were calculated - using defaults', 'warn');
      scores.pmCultures = getDefaultScores().pmCultures;
    }
    
    logDebug('Final calculated scores:', scores);
    logDebug('------- SCORE CALCULATION END -------');
    
    // Return final scores
    return scores;
  }
  
  // Get default scores if calculation fails
  function getDefaultScores() {
    logDebug('Using default scores due to invalid responses', 'warn');
    return {
      archetypes: {
        "Growth Driver": 10,
        "Product Optimizer": 5,
        "UX Innovator": 3,
        "Internal Scaler": 2,
        "General Manager": 1
      },
      superpowers: {
        "Growth Expertise": 5,
        "Product Crafting": 3
      },
      productCultures: {
        "Data-Driven": 5
      },
      pmCultures: {
        "PM-Guided": 5
      }
    };
  }

  // Get the top two items from a scored object
  function getTopTwo(obj) {
    logDebug('Getting top two from:', JSON.stringify(obj));
    
    // Handle invalid input
    if (!obj || typeof obj !== 'object') {
      logDebug('Invalid input (not an object)', 'error');
      return getDefaultArchetypes();
    }
    
    if (Object.keys(obj).length === 0) {
      logDebug('Empty object - no scores were calculated', 'error');
      return getDefaultArchetypes();
    }
    
    // Sort by score in descending order
    const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    logDebug('Sorted results:', sorted);
    
    // Return the top two items (or default values if not available)
    return [
      sorted[0] ? sorted[0][0] : getDefaultArchetypes()[0], 
      sorted.length > 1 ? sorted[1][0] : getDefaultArchetypes()[1]
    ];
  }
  
  // Default archetypes if none are calculated
  function getDefaultArchetypes() {
    logDebug('Using default archetypes', 'warn');
    return ['Growth Driver', 'Product Optimizer'];
  }

  // Get the highest scoring item from a scored object
  function getHighestScore(obj) {
    logDebug('Getting highest score from:', JSON.stringify(obj));
    
    // Handle invalid input
    if (!obj || typeof obj !== 'object') {
      logDebug('Invalid input (not an object)', 'error');
      return getDefaultForCategory(obj);
    }
    
    if (Object.keys(obj).length === 0) {
      logDebug('Empty object', 'error');
      return getDefaultForCategory(obj);
    }
    
    // Sort by score in descending order
    const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    logDebug('Sorted results for highest score:', sorted);
    
    // Return the highest scoring item (or default if not available)
    return sorted[0] ? sorted[0][0] : getDefaultForCategory(obj);
  }
  
  // Get default category value
  function getDefaultForCategory(category) {
    // Return appropriate default based on category
    if (category === 'productCultures') return 'Data-Driven';
    if (category === 'pmCultures') return 'PM-Guided';
    return 'Not determined';
  }

  // ==========================================
  // RESULTS DISPLAY
  // ==========================================

  // Display quiz results
  function showResults() {
    try {
      logDebug('------- SHOW RESULTS START -------');
      
      if (!verifyRequiredElements()) {
        if (resultsContainer) {
          resultsContainer.innerHTML = '<p>An error occurred while displaying your results. Please refresh the page and try again.</p>';
          resultsContainer.style.display = 'block';
        }
        return;
      }

      // Hide quiz, show results
      quizContainer.style.display = 'none';
      questionTitle.style.display = 'none';
      resultsContainer.style.display = 'block';
      if (nextButton) nextButton.style.display = 'none';
      if (backArrow) backArrow.style.display = 'block';

      // Calculate scores
      let scores;
      try {
        scores = calculateScores();
      } catch (err) {
        logDebug(`Error calculating scores: ${err.message}`, 'error');
        resultsContainer.innerHTML = '<p>An error occurred while calculating your results. Please try again.</p>';
        return;
      }

      // Get the top archetypes, superpowers, and cultures
      const [primaryArchetype, secondaryArchetype] = getTopTwo(scores.archetypes);
      const [primarySuperpower, secondarySuperpower] = getTopTwo(scores.superpowers);
      const productCulture = getHighestScore(scores.productCultures);
      const pmCulture = getHighestScore(scores.pmCultures);

      // Safety checks for required values
      if (!primaryArchetype || !primarySuperpower || !productCulture || !pmCulture) {
        logDebug('Missing required result values', 'error');
        resultsContainer.innerHTML = '<p>An error occurred while analyzing your results. Please try again.</p>';
        return;
      }

      // Safety checks for descriptions
      if (!archetypeDescriptions[primaryArchetype]) {
        logDebug(`Missing description for ${primaryArchetype}`, 'error');
        resultsContainer.innerHTML = '<p>An error occurred with the archetype descriptions. Please try again.</p>';
        return;
      }

      // Build the results HTML
      let summaryHTML = buildResultsSummary(
        primaryArchetype, 
        secondaryArchetype, 
        primarySuperpower, 
        secondarySuperpower, 
        productCulture, 
        pmCulture
      );

      // Set the HTML
      profileSummary.innerHTML = summaryHTML;

      // Create the visualization
      try {
        createVisualization(scores);
      } catch (err) {
        logDebug(`Error creating visualization: ${err.message}`, 'error');
        const vizContainer = document.getElementById('data-visualization');
        if (vizContainer) {
          vizContainer.innerHTML = '<p>Unable to generate the visualization.</p>';
        }
      }

// Submit the data
      try {
        submitQuizData({
          primaryArchetype,
          secondaryArchetype,
          primarySuperpower,
          secondarySuperpower,
          productCulture,
          pmCulture,
          responses: userResponses
        });
      } catch (err) {
        logDebug(`Error submitting data: ${err.message}`, 'warn');
        // Non-critical error, continue showing results
      }

      // Add event listeners for sharing
      setupSharingButtons(primaryArchetype);
      
      // Add event listener for retaking the quiz
      const retakeButton = document.getElementById('retake-quiz');
      if (retakeButton) {
        retakeButton.addEventListener('click', resetQuiz);
      }

      logDebug('------- SHOW RESULTS END -------');
      loadingResults = false;

    } catch (error) {
      logDebug(`Error in showResults: ${error.message}`, 'error');
      if (resultsContainer) {
        resultsContainer.innerHTML = '<p>An error occurred while calculating your results. Please try again.</p>';
        resultsContainer.style.display = 'block';
      }
      loadingResults = false;
    }
  }

  // Build the HTML for the results summary
  function buildResultsSummary(primaryArchetype, secondaryArchetype, primarySuperpower, secondarySuperpower, productCulture, pmCulture) {
    // Safety checks
    const safeProductCulture = productCulture || 'diverse';
    const safePmCulture = pmCulture || 'collaborative';
    
    // Start with the overview section
    let html = `
      <div class="result-section">
        <h3>Your Product Leadership Profile</h3>
        <p>Your results indicate that you are primarily a ${icons[primaryArchetype] || ''} <strong>${primaryArchetype}-style</strong> product leader`;
    
    if (secondaryArchetype) {
      html += ` with elements of a ${icons[secondaryArchetype] || ''} <strong>${secondaryArchetype}</strong>`;
    }
    
    html += `. This combination suggests that you excel in ${getProsString(primaryArchetype)}`;
    
    if (archetypeDescriptions[primaryArchetype] && archetypeDescriptions[primaryArchetype].pros && archetypeDescriptions[primaryArchetype].pros.length > 1) {
      html += ` and ${safeToLowerCase(archetypeDescriptions[primaryArchetype].pros[1])}`;
    }
    
    if (secondaryArchetype && archetypeDescriptions[secondaryArchetype]) {
      html += `, while also demonstrating strengths in ${getProsString(secondaryArchetype)}`;
      
      if (archetypeDescriptions[secondaryArchetype].pros && archetypeDescriptions[secondaryArchetype].pros.length > 1) {
        html += ` and ${safeToLowerCase(archetypeDescriptions[secondaryArchetype].pros[1])}`;
      }
    }
    
    html += `. Your key superpower lies in ${icons[primarySuperpower] || ''} <strong>${primarySuperpower}</strong>`;
    
    if (superpowerDescriptions[primarySuperpower]) {
      html += `, which means you ${superpowerDescriptions[primarySuperpower]}`;
    }
    
    html += ` You have thrived in <strong>${safeProductCulture}</strong> organizations with a <strong>${safePmCulture}</strong> approach to product management.</p>
      </div>`;
    
    // Add primary archetype section
    html += `
      <div class="result-section">
        <div class="archetype-header">
          <h4>Primary Archetype: ${primaryArchetype}</h4>
          ${icons[primaryArchetype] || ''}
        </div>`;
    
    if (archetypeDescriptions[primaryArchetype]) {
      html += `<p>${archetypeDescriptions[primaryArchetype].description || 'No description available.'}</p>
        <div class="pros-cons">
          <div class="pros">
            <b>Strengths:</b>
            <ul>
              ${(archetypeDescriptions[primaryArchetype].pros || []).map(pro => `<li>${pro}</li>`).join('') || '<li>No strengths specified</li>'}
            </ul>
          </div>
          <div class="cons">
            <b>Potential Challenges:</b>
            <ul>
              ${(archetypeDescriptions[primaryArchetype].cons || []).map(con => `<li>${con}</li>`).join('') || '<li>No challenges specified</li>'}
            </ul>
          </div>
        </div>
        <p><strong>Notable Examples:</strong> ${(archetypeDescriptions[primaryArchetype].examples || []).join(', ') || 'No examples available'}</p>`;
    } else {
      html += `<p>Detailed information for ${primaryArchetype} is not available.</p>`;
    }
    
    html += `</div>
      <div id="data-visualization"></div>`;

    // Add secondary archetype if available
    if (secondaryArchetype && archetypeDescriptions[secondaryArchetype]) {
      html += `
        <div class="result-section">
          <div class="archetype-header">
            <h4>Secondary Archetype: ${secondaryArchetype}</h4>
            ${icons[secondaryArchetype] || ''}
          </div>
          <p>${archetypeDescriptions[secondaryArchetype].description || 'No description available.'}</p>
          <div class="pros-cons">
            <div class="pros">
              <b>Strengths:</b>
              <ul>
                ${(archetypeDescriptions[secondaryArchetype].pros || []).map(pro => `<li>${pro}</li>`).join('') || '<li>No strengths specified</li>'}
              </ul>
            </div>
            <div class="cons">
              <b>Potential Challenges:</b>
              <ul>
                ${(archetypeDescriptions[secondaryArchetype].cons || []).map(con => `<li>${con}</li>`).join('') || '<li>No challenges specified</li>'}
              </ul>
            </div>
          </div>
          <p><strong>Notable Examples:</strong> ${(archetypeDescriptions[secondaryArchetype].examples || []).join(', ') || 'No examples available'}</p>
        </div>
      `;
    }

    // Add superpower section
    if (primarySuperpower) {
      html += `
        <div class="result-section">
          <h4>Superpowers</h4>
          <div class="superpower-header">
            <h5>Primary Superpower: ${primarySuperpower}</h5>
            ${icons[primarySuperpower] || ''}
          </div>
          <p>${superpowerDescriptions[primarySuperpower] || 'No description available.'}</p>`;
      
      if (secondarySuperpower && superpowerDescriptions[secondarySuperpower]) {
        html += `
          <div class="superpower-header">
            <h5>Secondary Superpower: ${secondarySuperpower}</h5>
            ${icons[secondarySuperpower] || ''}
          </div>
          <p>${superpowerDescriptions[secondarySuperpower] || 'No description available.'}</p>`;
      }
      
      html += `</div>`;
    }

    // Add environment section
    html += `
      <div class="result-section environment-section">
        <h4>Preferred Environment</h4>
        <p><strong>Product Culture (${safeProductCulture}):</strong> ${productCultureDescriptions[safeProductCulture] || 'No description available.'}</p>
        <h4>Product Decision-Making</h4>
        <p><strong>${safePmCulture}:</strong> ${pmCultureDescriptions[safePmCulture] || 'No description available.'}</p>
      </div>`;

    // Add career opportunities section
    html += `
      <div class="result-section">
        <h4>Career Opportunities</h4>
        <p>Given your ${primaryArchetype || 'unique'} archetype and ${primarySuperpower || 'special'} superpower, you might excel in roles such as Senior Product Manager, Director of Product, or VP of Product in companies that value ${safeToLowerCase(safeProductCulture)} and ${safeToLowerCase(safePmCulture)} approaches. These roles would allow you to leverage your ${getProsString(primaryArchetype)} and ability to ${superpowerDescriptions[primarySuperpower] ? superpowerDescriptions[primarySuperpower].toLowerCase() : 'apply your unique skills'}</p>
        <p>Some companies that might be a good fit include:</p>
        <ul>
          ${(companyRecommendations[primaryArchetype] || ['Companies that value your skills']).map(company => `<li>${company}</li>`).join('')}
        </ul>
        <p>Remember, these are just suggestions. Your unique combination of skills and experiences might make you a great fit for a wide range of roles and companies.</p>
      </div>`;
    
    // Add how to present yourself section
    html += `
      <div class="result-section">
        <h4>How to Present Yourself</h4>
        <p>When introducing yourself or writing your resume, emphasize your unique combination of ${primaryArchetype} strategies and ${primarySuperpower} skills. For example:</p>
        <ul>
          <li>${archetypeStrengths[primaryArchetype] || 'Use your product leadership experience to highlight your expertise'}</li>
          <li>${archetypeAchievements[primaryArchetype] || 'Showcase specific achievements that demonstrate your impact'}</li>
          <li>${superpowerActions[primarySuperpower] || 'Leverage your special abilities in your next role'}</li>
        </ul>
      </div>
      
      <div class="action-buttons">
        <button id="retake-quiz" class="gradient-button">Retake Quiz</button>
        <div class="share-buttons">
          <button class="share-button" data-platform="twitter">Share on Twitter</button>
          <button class="share-button" data-platform="linkedin">Share on LinkedIn</button>
        </div>
      </div>
      
      <div class="results-button-container">
        <h4>Apply to the Product Executive Job Search program:</h4>
        <a href="https://maven.com/colinl/productleaderjobsearch" target="_blank" class="gradient-button course-survey-button">
          APPLY HERE
        </a>
      </div>
    `;
    
    return html;
  }

  // Create data visualization for archetypes
  function createVisualization(scores) {
    const container = document.getElementById('data-visualization');
    if (!container) {
      logDebug('Data visualization container not found', 'error');
      return;
    }
    
    container.innerHTML = '';
    
    if (!scores || !scores.archetypes || Object.keys(scores.archetypes).length === 0) {
      container.innerHTML = '<p>No data available for visualization</p>';
      return;
    }
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 600 400");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "400");
    svg.setAttribute("aria-label", "Product Leadership Archetype Profile Visualization");
    svg.setAttribute("role", "img");
    
    const sortedArchetypes = Object.entries(scores.archetypes)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);

    if (sortedArchetypes.length === 0) {
      container.innerHTML = '<p>Insufficient data for visualization</p>';
      return;
    }

    const maxScore = Math.max(...Object.values(scores.archetypes)) || 1; // Avoid division by zero
    const colors = [
      '#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f', 
      '#edc949', '#af7aa1', '#ff9da7', '#9c755f', '#bab0ab'
    ];
    
    const padding = 40;
    const circleRadius = 25;
    const lineLength = 80;
    const textOffset = 10;

    // Add background
    const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    background.setAttribute("width", "100%");
    background.setAttribute("height", "100%");
    background.setAttribute("fill", "#f8f9fa");
    background.setAttribute("rx", "8"); // Rounded corners
    svg.appendChild(background);

    // Add title
    const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
    title.setAttribute("x", 300);
    title.setAttribute("y", 30);
    title.setAttribute("text-anchor", "middle");
    title.setAttribute("font-size", "18");
    title.setAttribute("font-weight", "bold");
    title.setAttribute("fill", "#333");
    title.textContent = "Your Product Leadership Profile";
    svg.appendChild(title);

    // Draw center lines for reference
    const centerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    centerGroup.setAttribute("opacity", "0.2");
    
    const centerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    centerCircle.setAttribute("cx", 300);
    centerCircle.setAttribute("cy", 220);
    centerCircle.setAttribute("r", 80);
    centerCircle.setAttribute("fill", "none");
    centerCircle.setAttribute("stroke", "#999");
    centerCircle.setAttribute("stroke-dasharray", "2,2");
    centerGroup.appendChild(centerCircle);
    
    const smallerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    smallerCircle.setAttribute("cx", 300);
    smallerCircle.setAttribute("cy", 220);
    smallerCircle.setAttribute("r", 40);
    smallerCircle.setAttribute("fill", "none");
    smallerCircle.setAttribute("stroke", "#999");
    smallerCircle.setAttribute("stroke-dasharray", "2,2");
    centerGroup.appendChild(smallerCircle);
    
    svg.appendChild(centerGroup);

    // Draw archetype spokes and circles
    sortedArchetypes.forEach((archetype, index) => {
      const score = scores.archetypes[archetype] || 0;
      const normalizedScore = score / maxScore;
      
      const angle = ((index / sortedArchetypes.length) * 2 * Math.PI) - (Math.PI / 2);
      const centerX = 300 + Math.cos(angle) * lineLength;
      const centerY = 220 + Math.sin(angle) * lineLength;
      
      // Draw line from center
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", 300);
      line.setAttribute("y1", 220);
      line.setAttribute("x2", centerX);
      line.setAttribute("y2", centerY);
      line.setAttribute("stroke", colors[index % colors.length]);
      line.setAttribute("stroke-width", 2);
      svg.appendChild(line);
      
      // Draw circle for the score
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", centerX);
      circle.setAttribute("cy", centerY);
      circle.setAttribute("r", Math.max(circleRadius * normalizedScore, 5)); // Minimum radius of 5
      circle.setAttribute("fill", colors[index % colors.length]);
      circle.setAttribute("opacity", 0.8);
      
      // Add animation for circles
      const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animate.setAttribute("attributeName", "r");
      animate.setAttribute("from", "0");
      animate.setAttribute("to", Math.max(circleRadius * normalizedScore, 5));
      animate.setAttribute("dur", "0.8s");
      animate.setAttribute("fill", "freeze");
      circle.appendChild(animate);
      
      svg.appendChild(circle);
      
      // Add score text
      const scoreText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      scoreText.setAttribute("x", centerX);
      scoreText.setAttribute("y", centerY);
      scoreText.setAttribute("text-anchor", "middle");
      scoreText.setAttribute("dominant-baseline", "central");
      scoreText.setAttribute("font-size", "12");
      scoreText.setAttribute("font-weight", "bold");
      scoreText.setAttribute("fill", "#fff");
      scoreText.textContent = Math.round(score);
      svg.appendChild(scoreText);
      
      // Add archetype label
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", centerX + (Math.cos(angle) * (circleRadius + textOffset)));
      text.setAttribute("y", centerY + (Math.sin(angle) * (circleRadius + textOffset)));
      text.setAttribute("text-anchor", angle > Math.PI / 2 && angle < 3 * Math.PI / 2 ? "end" : "start");
      text.setAttribute("dominant-baseline", "central");
      text.setAttribute("font-size", "14");
      text.setAttribute("fill", "#333");
      text.textContent = archetype;
      svg.appendChild(text);
    });

    // Add watermark
    const watermark = document.createElementNS("http://www.w3.org/2000/svg", "text");
    watermark.setAttribute("x", 585);
    watermark.setAttribute("y", 390);
    watermark.setAttribute("text-anchor", "end");
    watermark.setAttribute("font-size", "12");
    watermark.setAttribute("fill", "#999");
    watermark.textContent = "toptechnewsletter.com";
    svg.appendChild(watermark);

    container.appendChild(svg);
  }

  // Submit quiz data to external service
  function submitQuizData(data) {
    logDebug('Submitting quiz data');
    
    if (!data || !data.responses) {
      logDebug('Invalid quiz data for submission', 'error');
      return;
    }

    // Format the responses for logging and submission
    const formattedResponses = data.responses.map((response, index) => {
      if (!response || !quizData[index]) return `Q${index + 1}: No answer`;
      
      const question = quizData[index];
      const selectedOptions = response.map(optionIndex => {
        if (question.options[optionIndex]) {
          return question.options[optionIndex].text;
        }
        return "Unknown option";
      });
      
      return `Q${index + 1}: ${selectedOptions.join(', ')}`;
    }).join(' | ');

    // Prepare data for submission
    const formattedData = {
      primaryArchetype: data.primaryArchetype || 'Unknown',
      secondaryArchetype: data.secondaryArchetype || 'None',
      primarySuperpower: data.primarySuperpower || 'Unknown',
      secondarySuperpower: data.secondarySuperpower || 'None',
      productCulture: data.productCulture || 'Unknown',
      pmCulture: data.pmCulture || 'Unknown',
      responses: formattedResponses,
      timestamp: new Date().toISOString()
    };

    logDebug('Formatted data for submission:', formattedData);

    // Submit to Zapier webhook
    fetch('https://hooks.zapier.com/hooks/catch/1229764/24rotzb/', {
      method: 'POST',
      body: JSON.stringify(formattedData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(text => {
      try {
        return JSON.parse(text);
      } catch (e) {
        logDebug('Response is not JSON:', text);
        return text;
      }
    })
    .then(data => logDebug('Submission successful:', data))
    .catch((error) => {
      logDebug(`Error submitting quiz data: ${error.message}`, 'error');
      // Add non-blocking error message for users
      const errorContainer = document.createElement('div');
      errorContainer.className = 'submission-error';
      errorContainer.innerHTML = `<p>Note: There was an error submitting your results. Your results are still displayed above.</p>`;
      if (resultsContainer) {
        resultsContainer.appendChild(errorContainer);
      }
    });
  }

  // Set up sharing buttons
  function setupSharingButtons(primaryArchetype) {
    document.querySelectorAll('.share-button').forEach(button => {
      button.addEventListener('click', function() {
        try {
          const platform = this.getAttribute('data-platform');
          if (platform) {
            shareResults(platform, primaryArchetype);
          }
        } catch (err) {
          logDebug(`Error in share button handler: ${err.message}`, 'error');
        }
      });
    });
  }

  // Share results on social media
  function shareResults(platform, primaryArchetype) {
    try {
      if (!primaryArchetype) {
        logDebug('Cannot share results - primary archetype is undefined', 'error');
        return;
      }

      // Create sharing text
      let text = `I just discovered my Product Leadership Archetype: I'm a ${primaryArchetype}.`;
      
      if (archetypeDescriptions[primaryArchetype] && archetypeDescriptions[primaryArchetype].description) {
        const firstSentence = archetypeDescriptions[primaryArchetype].description.split('.')[0];
        if (firstSentence) {
          text += ` ${firstSentence}.`;
        }
      }
      
      text += ' Take the quiz yourself!';
      
      const url = encodeURIComponent(window.location.href);
      let shareUrl;

      // Generate appropriate sharing URL
      switch (platform) {
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${encodeURIComponent('Product Leadership Archetype Quiz')}&summary=${encodeURIComponent(text)}`;
          break;
        case 'facebook':
          shareUrl = `https://www.facebook.com/dialog/share?app_id=YOUR_FACEBOOK_APP_ID&href=${url}&quote=${encodeURIComponent(text)}`;
          break;
        default:
          logDebug(`Unknown sharing platform: ${platform}`, 'error');
          return;
      }

      // Open sharing dialog
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
      
      logDebug(`Shared results on ${platform}`);
    } catch (err) {
      logDebug(`Error sharing results: ${err.message}`, 'error');
    }
  }

  // Reset the quiz to start over
  function resetQuiz() {
    currentQuestionIndex = 0;
    userResponses = [];
    showQuestion(currentQuestionIndex);
  }

  // ==========================================
  // INITIALIZATION & EVENT LISTENERS
  // ==========================================

  // Start the quiz
  function startQuiz() {
    if (!verifyRequiredElements()) {
      logDebug('Cannot start quiz - missing required elements', 'error');
      return;
    }
    
    // Reset state
    currentQuestionIndex = 0;
    userResponses = [];
    
    // Display first question
    showQuestion(currentQuestionIndex);
    
    // Set up event listeners
    if (backArrow) {
      backArrow.addEventListener('click', handleBackArrowClick);
    }
    
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

  // Add CSS for additional styling
  function addCustomStyles() {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      /* Enhanced styling for the quiz */
      .pulse-animation {
        animation: pulse 0.3s ease-in-out;
      }
      
      .shake-animation {
        animation: shake 0.5s ease-in-out;
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-5px); }
        40%, 80% { transform: translateX(5px); }
      }
      
      .selection-instruction {
        color: #666;
        font-size: 0.9em;
        font-weight: normal;
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
      
      .action-buttons {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        flex-wrap: wrap;
      }
      
      .share-buttons {
        display: flex;
        gap: 10px;
      }
      
      .share-button {
        padding: 8px 16px;
        border-radius: 20px;
        border: none;
        color: white;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        font-family: var(--font-family);
      }
      
      .share-button[data-platform="twitter"] {
        background-color: #1DA1F2;
      }
      
      .share-button[data-platform="linkedin"] {
        background-color: #0077B5;
      }
      
      .share-button[data-platform="facebook"] {
        background-color: #4267B2;
      }
      
      .submission-error {
        color: #e74c3c;
        font-size: 0.9em;
        margin-top: 20px;
        text-align: center;
      }
      
      /* Improve option button accessibility */
      .option:focus-visible {
        outline: 3px solid var(--primary-color);
        outline-offset: 2px;
      }
      
      /* Responsive improvements */
      @media (max-width: 600px) {
        .action-buttons {
          flex-direction: column;
          gap: 10px;
        }
        
        #retake-quiz {
          width: 100%;
        }
        
        .share-buttons {
          width: 100%;
          justify-content: center;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }

  // Initialize the quiz
  function init() {
    try {
      logDebug('Initializing quiz...');
      
      // Add custom styles
      addCustomStyles();
      
      // Set up keyboard navigation
      setupKeyboardNavigation();
      
      // Start the quiz
      startQuiz();
      
      logDebug('Quiz initialized successfully');
    } catch (err) {
      logDebug(`Error initializing quiz: ${err.message}`, 'error');
      if (quizContainer) {
        quizContainer.innerHTML = `
          <div class="error-message">
            <h3>Sorry, there was a problem loading the quiz</h3>
            <p>Please refresh the page to try again. If the problem persists, please contact support.</p>
            <button onclick="location.reload()" class="gradient-button">Refresh Page</button>
          </div>
        `;
      }
    }
  }

  // Run the initialization
  init();
}

// Initialize the quiz when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuiz);
} else {
  initQuiz();
}

// Add global error handler
window.addEventListener('error', function(event) {
  console.error('Product Quiz - Global error caught:', event.error);
});/**
