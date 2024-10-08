function initQuiz() {
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
    question: "When faced with a product challenge, which TWO do you typically prioritize? (Select 2)",
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
          "Product Crafting": 1,
          "Zero-to-One Innovator": 1
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
    description: "Growth Drivers have strong marketing skills and an affinity for AB testing and experimentation. They move fast, prioritizing speed and agility over craft. They are data-driven and approach problems more from science than art.",
    pros: ["Marketing expertise", "AB testing / experimentation skills", "Quantitative data fluency", "User psychology understanding"],
    cons: ["May prioritize speed over quality", "Less suited for zero-to-one product development"],
    examples: ["Sean Ellis (Growth Hacking)", "Casey Winters (Pinterest, Grubhub)", "Brian Balfour (Reforge)", "Elena Verna (SurveyMonkey, Malwarebytes)"]
  },
  "UX Innovator": {
    description: "UX Innovators are profoundly committed to user-centered design. They are excellent holistic thinkers and can articulate the end-to-end product experience. They are problem-centered and develop exceptional user empathy.",
    pros: ["User-centered design expertise", "Holistic thinking", "Strong problem-solving skills", "Exceptional user empathy"],
    cons: ["May focus too much on design over business metrics", "Less suited for growth and scaling work"],
    examples: ["Jony Ive (Apple)", "Julie Zhuo (Facebook)", "Luke Wroblewski (Google)", "Sarah Doody (UX consultant and educator)"]
  },
  "Internal Scaler": {
    description: "Internal Scalers excel at navigating organizational intricacies. They're inwardly focused and are efficiency experts who tend to be more technically inclined. They thrive on making internal stakeholders more productive.",
    pros: ["Technical inclination", "Efficiency and productivity expertise", "Strong at build vs. buy decisions", "Excellent internal stakeholder management"],
    cons: ["Less focused on external customers", "Not ideal for product-market fit expansion"],
    examples: ["Sheryl Sandberg (Facebook)", "Jeff Bezos (Amazon)", "Patty McCord (Netflix)", "Laszlo Bock (Google, Humu)"]
  },
  "General Manager": {
    description: "General Managers are natural leaders and communicators with a strong understanding of finance, P&L, and go-to-market strategy. They bridge the gap between technology and business sides of the company.",
    pros: ["Natural leadership skills", "Finance/P&L understanding", "Stakeholder management expertise", "Strong GTM strategy"],
    cons: ["May lack deep expertise in specific areas", "Less suited for zero-to-one product development"],
    examples: ["Sundar Pichai (Google)", "Satya Nadella (Microsoft)", "Marissa Mayer (Yahoo)", "Stewart Butterfield (Slack)"]
  },
  "Product Optimizer": {
    description: "Product Optimizers thrive on fine-tuning product features to make them incrementally better. They have an iterative and quantitative focus in their development and care about feature adoption and effective positioning.",
    pros: ["Iterative development skills", "Messaging expertise", "Quantitative focus", "Strong at incremental improvements"],
    cons: ["May struggle with big-picture thinking", "Less suited for visionary product work"],
    examples: ["Marty Cagan (Netscape, eBay)", "Ken Norton (Google)", "Teresa Torres (Product Discovery Coach)", "Dan Olsen (Lean Product Playbook author)"]
  },
  "Technician": {
    description: "Technicians excel in scaling and systems. They're ideal for technically complex work and often have a background in engineering or data science. They communicate well with technical stakeholders.",
    pros: ["Strong technical skills", "Systems thinking", "Excellent at scaling", "Great communication with technical teams"],
    cons: ["May focus too much on technical aspects", "Less suited for user-centric feature development"],
    examples: ["Jeff Dean (Google)", "Demis Hassabis (DeepMind)", "Melanie Perkins (Canva)", "Mitchell Hashimoto (HashiCorp)"]
  },
  "Zero-to-One Innovator": {
    description: "Zero-to-One Innovators thrive in ambiguity and are focused on the future. They excel at refining and validating product concepts, and are relentless in their pursuit of new ideas.",
    pros: ["Visionary thinking", "Thrives in ambiguity", "Strong at product-market fit discovery", "Inspirational leadership"],
    cons: ["May struggle with day-to-day execution", "Less suited for scaling and growth work"],
    examples: ["Elon Musk (Tesla, SpaceX)", "Patrick Collison (Stripe)", "Anne Wojcicki (23andMe)", "Tony Fadell (Nest, iPod)"]
  },  
  "New Market-Fit Expander": {
    description: "New Market-Fit Expanders excel at adapting existing products for new markets or use cases. They have a keen understanding of different market needs and can identify opportunities to expand a product's reach.",
    pros: ["Market research skills", "Product localization expertise", "Cultural sensitivity", "Adaptability"],
    cons: ["May struggle with creating entirely new products", "Risk of over-adapting products for specific markets"],
    examples: ["Ajay Banga (Mastercard)", "Dara Khosrowshahi (Uber)", "Satya Nadella (Microsoft)"]
  }

};

const superpowerDescriptions = {
  "Product Crafting": "Ability to transform abstract concepts into tangible, user-friendly features. You excel at understanding user needs and creating innovative solutions.",
  "Growth Expertise": "Skill in identifying and optimizing key metrics to drive rapid user acquisition and engagement. You're adept at data analysis and growth strategies.",
  "Organizational Expertise": "Talent for managing complex projects and aligning diverse teams. You excel at improving efficiency and collaboration across the organization.",
  "Team Expertise": "Strength in building and leading high-performing product teams. You're skilled at mentoring, fostering a positive culture, and bringing out the best in others."
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
"Team Expertise": '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>'
};

let currentQuestionIndex = 0;
let userResponses = [];

const quizContainer = document.getElementById('quiz');
const questionTitle = document.getElementById('question-title');
const resultsContainer = document.getElementById('results');
const profileSummary = document.getElementById('profile-summary');
const progressBar = document.getElementById('progress');
const backArrow = document.getElementById('back-arrow');
let nextButton;
let resultData;

function createNextButton() {
  nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.id = 'next-btn';
  nextButton.classList.add('gradient-button');
  nextButton.style.display = 'none';
  nextButton.style.width = '100%';
  nextButton.style.marginTop = '20px';
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  });
  quizContainer.parentNode.insertBefore(nextButton, quizContainer.nextSibling);
}

function showQuestion(index) {
  if (index >= quizData.length) {
    showResults();
    return;
  }

  resultsContainer.style.display = 'none';
  quizContainer.style.display = 'block';
  questionTitle.style.display = 'block';
  backArrow.style.display = index === 0 ? 'none' : 'block';

  const question = quizData[index];
  questionTitle.textContent = question.question;
  quizContainer.innerHTML = '';

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement('button');
    button.classList.add('option');
    button.innerHTML = `<span>${option.text}</span>`;
    button.addEventListener('click', () => selectOption(optionIndex, question.type));

    if (userResponses[index] && userResponses[index].includes(optionIndex)) {
      button.classList.add('selected');
    }

    quizContainer.appendChild(button);
  });

  updateProgressBar();

  if (!nextButton) createNextButton();
  nextButton.style.display = question.type === 'multi' ? 'block' : 'none';
  nextButton.disabled = question.type === 'multi' && (!userResponses[index] || userResponses[index].length !== 2);
}

function selectOption(optionIndex, questionType) {
  const options = document.querySelectorAll('.option');

  if (questionType === 'single') {
    options.forEach((opt, index) => {
      opt.classList.toggle('selected', index === optionIndex);
    });
    userResponses[currentQuestionIndex] = [optionIndex];
    setTimeout(() => {
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);
    }, 300);
  } else if (questionType === 'multi') {
    const selectedOptions = userResponses[currentQuestionIndex] || [];

    if (selectedOptions.includes(optionIndex)) {
      options[optionIndex].classList.remove('selected');
      selectedOptions.splice(selectedOptions.indexOf(optionIndex), 1);
    } else if (selectedOptions.length < 2) {
      options[optionIndex].classList.add('selected');
      selectedOptions.push(optionIndex);
    }

    userResponses[currentQuestionIndex] = selectedOptions;
    nextButton.disabled = selectedOptions.length !== 2;
  }
}

function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function submitQuizData(data) {
  const formattedResponses = data.responses.map((response, index) => {
    const question = quizData[index];
    const selectedOptions = response.map(optionIndex => question.options[optionIndex].text);
    return `Q${index + 1}: ${selectedOptions.join(', ')}`;
  }).join(' | ');

  const formattedData = {
    primaryArchetype: data.primaryArchetype,
    secondaryArchetype: data.secondaryArchetype,
    primarySuperpower: data.primarySuperpower,
    secondarySuperpower: data.secondarySuperpower || 'None',
    productCulture: data.productCulture,
    pmCulture: data.pmCulture,
    responses: formattedResponses
  };

  console.log('Submitting quiz data:', formattedData);

  fetch('https://hooks.zapier.com/hooks/catch/1229764/24rotzb/', {
    method: 'POST',
    body: JSON.stringify(formattedData),
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
      console.log('Response is not JSON:', text);
      return text;
    }
  })
  .then(data => console.log('Success:', data))
  .catch((error) => {
    console.error('Error submitting quiz data:', error.message);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `There was an error submitting your results: ${error.message}. Your local results are still displayed above.`;
    errorMessage.style.color = 'red';
    resultsContainer.appendChild(errorMessage);
  });
}

function showResults() {
  try {
    console.log('Showing results...');
    quizContainer.style.display = 'none';
    questionTitle.style.display = 'none';
    resultsContainer.style.display = 'block';
    if (nextButton) nextButton.style.display = 'none';
    backArrow.style.display = 'block';

    const scores = calculateScores();
    console.log('Calculated scores:', scores);

    const [primaryArchetype, secondaryArchetype] = getTopTwo(scores.archetypes);
    const [primarySuperpower, secondarySuperpower] = getTopTwo(scores.superpowers);
    const productCulture = getHighestScore(scores.productCultures);
    const pmCulture = getHighestScore(scores.pmCultures);

    const companyRecommendations = {
      "Growth Driver": ["Uber", "Airbnb", "Pinterest"],
      "UX Innovator": ["Apple", "Figma", "Slack"],
      "Internal Scaler": ["Amazon", "Google", "Microsoft"],
      "General Manager": ["Salesforce", "Oracle", "Adobe"],
      "Product Optimizer": ["Booking.com", "Netflix", "Spotify"],
      "Technician": ["Tesla", "SpaceX", "NVIDIA"],
      "Zero-to-One Innovator": ["Stripe", "Palantir", "Snowflake"],
        "New Market-Fit Expander": ["Airbnb", "Netflix", "Uber"]
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

    quizResultData = {
      primaryArchetype,
      secondaryArchetype,
      primarySuperpower,
      secondarySuperpower,
      productCulture,
      pmCulture,
      archetypeDescriptions,
      superpowerDescriptions,
      productCultureDescriptions,
      pmCultureDescriptions,
      archetypeStrengths,
      archetypeAchievements,
      superpowerActions,
      companyRecommendations,
      scores
    };

    let summaryHTML = `
      <div class="result-section">
        <h3>Your Product Leadership Profile</h3>
        <p>Your results indicate that you are primarily a ${icons[primaryArchetype]} <strong>${primaryArchetype}-style</strong> product leader`;

    if (secondaryArchetype) {
      summaryHTML += ` with elements of a ${icons[secondaryArchetype]} <strong>${secondaryArchetype}</strong>`;
    }

    summaryHTML += `. This combination suggests that you excel in ${archetypeDescriptions[primaryArchetype].pros[0]} and ${archetypeDescriptions[primaryArchetype].pros[1]}`;

    if (secondaryArchetype) {
      summaryHTML += `, while also demonstrating strengths in ${archetypeDescriptions[secondaryArchetype].pros[0]}`;
    }

    summaryHTML += `.`;

    if (primarySuperpower) {
      summaryHTML += ` Your key superpower lies in ${icons[primarySuperpower]} <strong>${primarySuperpower}</strong>, which means you excel at ${superpowerDescriptions[primarySuperpower]}`;
    }

    if (secondarySuperpower) {
      summaryHTML += ` This is complemented by your secondary superpower of ${icons[secondarySuperpower]} <strong>${secondarySuperpower}</strong>, allowing you to ${superpowerDescriptions[secondarySuperpower]}`;
    }

    summaryHTML += ` You have thrived in <strong>${productCulture}</strong> organizations with a <strong>${pmCulture}</strong> approach to product management.</p>
      </div>
      <div class="result-section">
        <div class="archetype-header">
          <h4>Primary Archetype: ${primaryArchetype}</h4>
          ${icons[primaryArchetype]}
        </div>
        <p>${archetypeDescriptions[primaryArchetype].description}</p>
        <div class="pros-cons">
          <div class="pros">
            <b>Strengths:</b>
            <ul>
              ${archetypeDescriptions[primaryArchetype].pros.map(pro => `<li>${pro}</li>`).join('')}
            </ul>
          </div>
          <div class="cons">
            <b>Potential Challenges:</b>
            <ul>
              ${archetypeDescriptions[primaryArchetype].cons.map(con => `<li>${con}</li>`).join('')}
            </ul>
          </div>
        </div>
        <p><strong>Examples:</strong> ${archetypeDescriptions[primaryArchetype].examples.join(', ')}</p>
      </div>
      <div id="data-visualization"></div>
    `;

    if (secondaryArchetype) {
      summaryHTML += `
        <div class="result-section">
          <div class="archetype-header">
            <h4>Secondary Archetype: ${secondaryArchetype}</h4>
            ${icons[secondaryArchetype]}
          </div>
          <p>${archetypeDescriptions[secondaryArchetype].description}</p>
          <div class="pros-cons">
            <div class="pros">
              <b>Strengths:</b>
              <ul>
                ${archetypeDescriptions[secondaryArchetype].pros.map(pro => `<li>${pro}</li>`).join('')}
              </ul>
            </div>
            <div class="cons">
              <b>Potential Challenges:</b>
              <ul>
                ${archetypeDescriptions[secondaryArchetype].cons.map(con => `<li>${con}</li>`).join('')}
              </ul>
            </div>
          </div>
          <p><strong>Examples:</strong> ${archetypeDescriptions[secondaryArchetype].examples.join(', ')}</p>
        </div>
      `;
    }

    if (primarySuperpower) {
      summaryHTML += `
        <div class="result-section">
          <h4>Superpowers</h4>
          <div class="superpower-header">
            <h5>Primary Superpower: ${primarySuperpower}</h5>
            ${icons[primarySuperpower]}
          </div>
          <p>${superpowerDescriptions[primarySuperpower]}</p>
          ${secondarySuperpower ? `
            <div class="superpower-header">
              <h5>Secondary Superpower: ${secondarySuperpower}</h5>
              ${icons[secondarySuperpower]}
            </div>
            <p>${superpowerDescriptions[secondarySuperpower]}</p>
          ` : ''}
        </div>
      `;
    }

    summaryHTML += `
      <div class="result-section environment-section">
        <h4>Preferred Environment</h4>
        <p><strong>Product Culture (${productCulture}):</strong> ${productCultureDescriptions[productCulture]}</p>
        <h4>Product Decision-Making</h4>
        <p><strong>${pmCulture}:</strong> ${pmCultureDescriptions[pmCulture]}</p>
      </div>
      <div class="result-section">
        <h4>Career Opportunities</h4>
        <p>Given your ${primaryArchetype} archetype and ${primarySuperpower} superpower, you might excel in roles that focus on ${archetypeStrengths[primaryArchetype]} Consider exploring opportunities in companies that value these skills and align with your preferred work environment.</p>
        <p>Some companies that might be a good fit include:</p>
        <ul>
          ${companyRecommendations[primaryArchetype].map(company => `<li>${company}</li>`).join('')}
        </ul>
        <p>Remember, these are just suggestions. Your unique combination of skills and experiences might make you a great fit for a wide range of roles and companies.</p>
      </div>
      <div class="result-section">
        <h4>How to Present Yourself</h4>
        <p>When introducing yourself or writing your resume, emphasize your unique combination of ${primaryArchetype} strategies${primarySuperpower ? ` and ${primarySuperpower} skills` : ''}. For example:</p>
        <ul>
          <li>"${archetypeStrengths[primaryArchetype]}"</li>
          <li>"${archetypeAchievements[primaryArchetype]}"</li>
          ${primarySuperpower && superpowerActions[primarySuperpower] 
            ? `<li>"${superpowerActions[primarySuperpower]}."</li>`
            : ''}
        </ul>
      </div>
    `;

    profileSummary.innerHTML = summaryHTML;

    // Create data visualization
    createCustomVisualization(scores);

    // Submit quiz results
    submitQuizData({
      primaryArchetype,
      secondaryArchetype,
      primarySuperpower,
      secondarySuperpower,
      productCulture,
      pmCulture,
      responses: userResponses
    });

    // Add retake button
 //   addRetakeButton();



  } catch (error) {
    console.error('Error in showResults:', error);
    resultsContainer.innerHTML = '<p>An error occurred while calculating your results. Please try again.</p>';
  }
}

function calculateScores() {
  const scores = {
    archetypes: {},
    superpowers: {},
    productCultures: {},
    pmCultures: {}
  };

  userResponses.forEach((response, index) => {
    if (!response) return; // Skip if no response for this question

    const question = quizData[index];
    response.forEach(optionIndex => {
      const option = question.options[optionIndex];
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

  console.log('Calculated scores:', scores);
  return scores;
}

function getTopTwo(obj) {
  if (Object.keys(obj).length === 0) {
    console.warn('getTopTwo received an empty object');
    return [null, null];
  }
  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  return [sorted[0][0], sorted[1] ? sorted[1][0] : null];
}

function getHighestScore(obj) {
  if (Object.keys(obj).length === 0) {
    console.warn('getHighestScore received an empty object');
    return 'Not determined';
  }
  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
}

function createCustomVisualization(scores) {
  const container = document.getElementById('data-visualization');
  container.innerHTML = '';
  
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 600 400");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "400");
  
  const archetypes = Object.keys(scores.archetypes);
  const maxScore = Math.max(...Object.values(scores.archetypes));
  const colors = [
    '#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f', '#edc949', '#af7aa1', '#ff9da7'
  ];
  
  const padding = 40;
  const circleRadius = 25;
  const lineLength = 80;
  const textOffset = 10;

  // Background
  const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  background.setAttribute("width", "100%");
  background.setAttribute("height", "100%");
  background.setAttribute("fill", "#f8f9fa");
  svg.appendChild(background);

  // Title
  const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
  title.setAttribute("x", 300);
  title.setAttribute("y", 30);
  title.setAttribute("text-anchor", "middle");
  title.setAttribute("font-size", "20");
  title.setAttribute("font-weight", "bold");
  title.setAttribute("fill", "#333");
  title.textContent = "Product Leadership Archetype Profile";
  svg.appendChild(title);

  archetypes.forEach((archetype, index) => {
    const score = scores.archetypes[archetype];
    const normalizedScore = score / maxScore;
    
    const angle = ((index / archetypes.length) * 2 * Math.PI) - (Math.PI / 2);
    const centerX = 300 + Math.cos(angle) * lineLength;
    const centerY = 220 + Math.sin(angle) * lineLength;
    
    // Line
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 300);
    line.setAttribute("y1", 220);
    line.setAttribute("x2", centerX);
    line.setAttribute("y2", centerY);
    line.setAttribute("stroke", colors[index % colors.length]);
    line.setAttribute("stroke-width", 2);
    svg.appendChild(line);
    
    // Circle
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", centerX);
    circle.setAttribute("cy", centerY);
    circle.setAttribute("r", circleRadius * normalizedScore);
    circle.setAttribute("fill", colors[index % colors.length]);
    circle.setAttribute("opacity", 0.7);
    svg.appendChild(circle);
    
    // Score
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
    
    // Archetype label
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

  container.appendChild(svg);
}
  
function shareResults(platform) {
  const [primaryArchetype] = getTopTwo(calculateScores().archetypes);
  const text = `I just discovered my Product Leadership Archetype: I'm a ${primaryArchetype}. ${archetypeDescriptions[primaryArchetype].description.split('.')[0]}`;
  const url = encodeURIComponent(window.location.href);
  let shareUrl;

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
  }

  window.open(shareUrl, '_blank', 'noopener,noreferrer');
}



showQuestion(currentQuestionIndex);

backArrow.addEventListener('click', () => {
  if (resultsContainer.style.display === 'block') {
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    questionTitle.style.display = 'block';
    if (nextButton) nextButton.style.display = 'none';
    currentQuestionIndex = quizData.length - 1;
    showQuestion(currentQuestionIndex);
  } else if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
});

document.querySelectorAll('.share-button').forEach(button => {
  button.addEventListener('click', function() {
    const platform = this.getAttribute('data-platform');
    shareResults(platform);
  });
});

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuiz);
} else {
  initQuiz();
}
