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
    // Rest of quiz data remains the same
  ];

  const archetypeDescriptions = {
    "Growth Driver": {
      description: "Growth Drivers excel at driving user acquisition and retention through data-driven strategies, rapid experimentation, and growth hacking techniques.",
      pros: ["Data-driven decision making", "User acquisition strategies", "Retention optimization", "Rapid experimentation"],
      cons: ["May prioritize short-term gains over long-term strategy", "Can overlook product quality in favor of speed"],
      examples: [
        "Casey Winters (CPO, Eventbrite)",
        "Elena Verna (Interim Head of Growth, Amplitude)",
        "Brian Balfour (CEO, Reforge)"
      ]
    },
    "UX Innovator": {
      description: "UX Innovators focus on creating intuitive and engaging user experiences, ensuring products are user-friendly and meet user needs.",
      pros: ["User-centric design", "Holistic thinking", "Strong user empathy", "Excellent problem-solving skills"],
      cons: ["May overemphasize design at the expense of business goals", "Could struggle with scalability"],
      examples: [
        "Alex Hood (CPO, Asana)",
        "Rahul Vohra (Founder and CEO, Superhuman)",
        "Aarron Walter (Former VP of Product, InVision)"
      ]
    },
    "Internal Scaler": {
      description: "Internal Scalers focus on optimizing internal processes, improving cross-functional collaboration, and scaling operations to support product development.",
      pros: ["Process optimization", "Cross-functional collaboration", "Scalability", "Team productivity"],
      cons: ["May focus too much on internal efficiency over external customer needs", "Can be resistant to change"],
      examples: [
        "Gibson Biddle (Former VP of Product Management, Netflix)",
        "Jackie Bavaro (Former Head of Product Management, Asana)",
        "Shiva Rajaraman (VP of Product, WeWork)"
      ]
    },
    "General Manager": {
      description: "General Managers oversee the entire product strategy, balancing business goals with product development, and often have P&L responsibility.",
      pros: ["Strategic thinking", "Leadership", "P&L management", "Cross-functional alignment"],
      cons: ["May lack deep expertise in specific areas", "Can be too removed from day-to-day product development"],
      examples: [
        "Ravi Mehta (Former CPO, Tinder)",
        "Lenny Rachitsky (Former Product Lead, Airbnb)",
        "Alex Hood (CPO, Asana)"
      ]
    },
    "Product Optimizer": {
      description: "Product Optimizers focus on refining and improving existing products through iterative development, user feedback, and data-driven enhancements.",
      pros: ["Iterative development", "User feedback integration", "Incremental improvements", "Data-driven decisions"],
      cons: ["May struggle with big-picture thinking", "Can be overly focused on existing products"],
      examples: [
        "Ken Norton (Former Partner, Google Ventures)",
        "Teresa Torres (Product Discovery Coach, Product Talk)",
        "Gokul Rajaram (Head of Product, DoorDash)"
      ]
    },
    "Technician": {
      description: "Technicians are deeply technical leaders who focus on complex product architectures, scalability, and integration of new technologies.",
      pros: ["Technical expertise", "Scalability", "System architecture", "Integration"],
      cons: ["May focus too much on technology over user experience", "Can struggle with non-technical stakeholders"],
      examples: [
        "Adam Nash (Former VP of Product Management, LinkedIn)",
        "Jeff Dean (Senior Fellow and SVP of Google Research, Google)",
        "Edith Harbaugh (CEO and Co-Founder, LaunchDarkly)"
      ]
    },
    "Zero-to-One Innovator": {
      description: "Zero-to-One Innovators excel at creating entirely new products or entering new markets, often working in high ambiguity and with a visionary approach.",
      pros: ["Visionary thinking", "Market creation", "Innovation", "High tolerance for risk"],
      cons: ["May struggle with execution", "Can overlook operational challenges"],
      examples: [
        "David Cancel (CEO and Founder, Drift)",
        "Gagan Biyani (CEO and Co-Founder, Maven)",
        "Patrick Collison (CEO and Co-Founder, Stripe)"
      ]
    },
    "New Market-Fit Expander": {
      description: "New Market-Fit Expanders excel at adapting existing products for new markets, whether geographical or different market segments.",
      pros: ["Market research", "Adaptability", "Cultural sensitivity", "Localization"],
      cons: ["May struggle with creating new products", "Can over-adapt and dilute core product"],
      examples: [
        "Neil Hunt (Former CPO, Netflix)",
        "April Underwood (Former CPO, Slack)",
        "Chris O'Neill (Former CEO, Evernote)"
      ]
    }
  };

  const superpowerDescriptions = {
    "Product Crafting": "have the ability to transform abstract concepts into tangible, user-friendly features. You excel at understanding user needs and creating innovative solutions.",
    "Growth Expertise": "have the skill to identify and optimize key metrics to drive rapid user acquisition and engagement. You're adept at data analysis and growth strategies.",
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

  // FIX 1: Make sure we create the next button only once
  function ensureNextButtonExists() {
    if (!nextButton) {
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
      
      // FIX 2: Make sure parent exists before appending
      if (quizContainer && quizContainer.parentNode) {
        quizContainer.parentNode.insertBefore(nextButton, quizContainer.nextSibling);
      }
    }
    return nextButton;
  }

  function showQuestion(index) {
    if (index >= quizData.length) {
      showResults();
      return;
    }

    // FIX 3: Check if elements exist before manipulating them
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'block';
    if (questionTitle) questionTitle.style.display = 'block';
    if (backArrow) backArrow.style.display = index === 0 ? 'none' : 'block';

    if (!quizContainer) {
      console.error('Quiz container not found');
      return;
    }

    const question = quizData[index];
    if (questionTitle) questionTitle.textContent = question.question;
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

    const btn = ensureNextButtonExists();
    btn.style.display = question.type === 'multi' ? 'block' : 'none';
    btn.disabled = question.type === 'multi' && (!userResponses[index] || userResponses[index].length !== 2);
  }

  function selectOption(optionIndex, questionType) {
    const options = document.querySelectorAll('.option');
    if (!options || !options.length) return;

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
      // FIX 4: Ensure we have a proper array for multi-select
      const selectedOptions = userResponses[currentQuestionIndex] || [];

      if (selectedOptions.includes(optionIndex)) {
        options[optionIndex].classList.remove('selected');
        selectedOptions.splice(selectedOptions.indexOf(optionIndex), 1);
      } else if (selectedOptions.length < 2) {
        options[optionIndex].classList.add('selected');
        selectedOptions.push(optionIndex);
      }

      userResponses[currentQuestionIndex] = selectedOptions;
      const btn = ensureNextButtonExists();
      if (btn) btn.disabled = selectedOptions.length !== 2;
    }
  }

  function updateProgressBar() {
    if (!progressBar) return;
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
  }

  function submitQuizData(data) {
    // FIX 5: Add error checking for quiz data
    if (!data || !data.responses) {
      console.error('Invalid quiz data for submission');
      return;
    }

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

    const formattedData = {
      primaryArchetype: data.primaryArchetype || 'Unknown',
      secondaryArchetype: data.secondaryArchetype || 'None',
      primarySuperpower: data.primarySuperpower || 'Unknown',
      secondarySuperpower: data.secondarySuperpower || 'None',
      productCulture: data.productCulture || 'Unknown',
      pmCulture: data.pmCulture || 'Unknown',
      responses: formattedResponses
    };

    console.log('Submitting quiz data:', formattedData);

    // Attempt to submit to Zapier webhook
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
      if (resultsContainer) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `There was an error submitting your results: ${error.message}. Your local results are still displayed above.`;
        errorMessage.style.color = 'red';
        resultsContainer.appendChild(errorMessage);
      }
    });
  }

  function showResults() {
    try {
      console.log('Showing results...');
      if (!quizContainer || !questionTitle || !resultsContainer || !profileSummary) {
        console.error('Required DOM elements missing for results display');
        return;
      }

      quizContainer.style.display = 'none';
      questionTitle.style.display = 'none';
      resultsContainer.style.display = 'block';
      if (nextButton) nextButton.style.display = 'none';
      if (backArrow) backArrow.style.display = 'block';

      // FIX 6: Add better error handling for score calculation
      let scores;
      try {
        scores = calculateScores();
        console.log('Calculated scores:', scores);
      } catch (err) {
        console.error('Error calculating scores:', err);
        resultsContainer.innerHTML = '<p>An error occurred while calculating your results. Please try again.</p>';
        return;
      }

      if (!scores || !scores.archetypes || Object.keys(scores.archetypes).length === 0) {
        console.error('Invalid scores calculated');
        resultsContainer.innerHTML = '<p>An error occurred while calculating your results. Please try again.</p>';
        return;
      }

      // FIX 7: Handle edge cases in getTopTwo
      const [primaryArchetype, secondaryArchetype] = getTopTwo(scores.archetypes);
      const [primarySuperpower, secondarySuperpower] = getTopTwo(scores.superpowers);
      const productCulture = getHighestScore(scores.productCultures);
      const pmCulture = getHighestScore(scores.pmCultures);

      if (!primaryArchetype) {
        console.error('Could not determine primary archetype');
        resultsContainer.innerHTML = '<p>An error occurred while analyzing your results. Please try again.</p>';
        return;
      }

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

      // FIX 8: Add checks for archetypeDescriptions
      if (!archetypeDescriptions[primaryArchetype]) {
        console.error(`Missing description for ${primaryArchetype}`);
        resultsContainer.innerHTML = '<p>An error occurred with the archetype descriptions. Please try again.</p>';
        return;
      }

      // FIX 9: Safely access description properties
      const getProsString = (archetype) => {
        if (!archetypeDescriptions[archetype] || !archetypeDescriptions[archetype].pros) {
          return 'various strengths';
        }
        return archetypeDescriptions[archetype].pros.length > 0 ? 
          archetypeDescriptions[archetype].pros[0].toLowerCase() : 'various strengths';
      };

      let summaryHTML = `
        <div class="result-section">
          <h3>Your Product Leadership Profile</h3>
          <p>Your results indicate that you are primarily a ${icons[primaryArchetype] || ''} <strong>${primaryArchetype}-style</strong> product leader`;
      
      if (secondaryArchetype) {
        summaryHTML += ` with elements of a ${icons[secondaryArchetype] || ''} <strong>${secondaryArchetype}</strong>`;
      }
      
      summaryHTML += `. This combination suggests that you excel in ${getProsString(primaryArchetype)}`;
      
      if (archetypeDescriptions[primaryArchetype] && archetypeDescriptions[primaryArchetype].pros && archetypeDescriptions[primaryArchetype].pros.length > 1) {
        summaryHTML += ` and ${archetypeDescriptions[primaryArchetype].pros[1].toLowerCase()}`;
      }
      
      if (secondaryArchetype && archetypeDescriptions[secondaryArchetype]) {
        summaryHTML += `, while also demonstrating strengths in ${getProsString(secondaryArchetype)}`;
        
        if (archetypeDescriptions[secondaryArchetype].pros && archetypeDescriptions[secondaryArchetype].pros.length > 1) {
          summaryHTML += ` and ${archetypeDescriptions[secondaryArchetype].pros[1].toLowerCase()}`;
        }
      }
      
      summaryHTML += `. Your key superpower lies in ${icons[primarySuperpower] || ''} <strong>${primarySuperpower}</strong>`;
      
      if (superpowerDescriptions[primarySuperpower]) {
        summaryHTML += `, which means you ${superpowerDescriptions[primarySuperpower]}`;
      }
      
      summaryHTML += ` You have thrived in <strong>${productCulture}</strong> organizations with a <strong>${pmCulture}</strong> approach to product management.</p>
        </div>
        <div class="result-section">
          <div class="archetype-header">
            <h4>Primary Archetype: ${primaryArchetype}</h4>
            ${icons[primaryArchetype] || ''}
          </div>`;
      
      if (archetypeDescriptions[primaryArchetype]) {
        summaryHTML += `<p>${archetypeDescriptions[primaryArchetype].description || 'No description available.'}</p>
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
          <p><strong>Examples:</strong> ${(archetypeDescriptions[primaryArchetype].examples || []).join(', ') || 'No examples available'}</p>`;
      } else {
        summaryHTML += `<p>Detailed information for ${primaryArchetype} is not available.</p>`;
      }
      
      summaryHTML += `</div>
        <div id="data-visualization"></div>`;

      if (secondaryArchetype && archetypeDescriptions[secondaryArchetype]) {
        summaryHTML += `
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
            <p><strong>Examples:</strong> ${(archetypeDescriptions[secondaryArchetype].examples || []).join(', ') || 'No examples available'}</p>
          </div>
        `;
      }

      if (primarySuperpower && superpowerDescriptions[primarySuperpower]) {
        summaryHTML += `
          <div class="result-section">
            <h4>Superpowers</h4>
            <div class="superpower-header">
              <h5>Primary Superpower: ${primarySuperpower}</h5>
              ${icons[primarySuperpower] || ''}
            </div>
            <p>${superpowerDescriptions[primarySuperpower] || 'No description available.'}</p>`;
        
        if (secondarySuperpower && superpowerDescriptions[secondarySuperpower]) {
          summaryHTML += `
            <div class="superpower-header">
              <h5>Secondary Superpower: ${secondarySuperpower}</h5>
              ${icons[secondarySuperpower] || ''}
            </div>
            <p>${superpowerDescriptions[secondarySuperpower] || 'No description available.'}</p>`;
        }
        
        summaryHTML += `</div>`;
      }

      summaryHTML += `
        <div class="result-section environment-section">
          <h4>Preferred Environment</h4>
          <p><strong>Product Culture (${productCulture}):</strong> ${productCultureDescriptions[productCulture] || 'No description available.'}</p>
          <h4>Product Decision-Making</h4>
          <p><strong>${pmCulture}:</strong> ${pmCultureDescriptions[pmCulture] || 'No description available.'}</p>
        </div>
        <div class="result-section">
          <h4>Career Opportunities</h4>
          <p>Given your ${primaryArchetype} archetype and ${primarySuperpower} superpower, you might excel in roles such as Senior Product Manager, Director of Product, or VP of Product in companies that value ${productCulture.toLowerCase()} and ${pmCulture.toLowerCase()} approaches. These roles would allow you to leverage your ${getProsString(primaryArchetype)} and ability to ${superpowerDescriptions[primarySuperpower] ? superpowerDescriptions[primarySuperpower].toLowerCase() : 'apply your unique skills'}</p>
          <p>Some companies that might be a good fit include:</p>
          <ul>
            ${(companyRecommendations[primaryArchetype] || ['No specific recommendations available']).map(company => `<li>${company}</li>`).join('')}
          </ul>
          <p>Remember, these are just suggestions. Your unique combination of skills and experiences might make you a great fit for a wide range of roles and companies.</p>
        </div>
        <div class="result-section">
          <h4>How to Present Yourself</h4>
          <p>When introducing yourself or writing your resume, emphasize your unique combination of ${primaryArchetype} strategies and ${primarySuperpower} skills. For example:</p>
          <ul>
            <li>${archetypeStrengths[primaryArchetype] || 'Use your product leadership experience to highlight your expertise'}</li>
            <li>${archetypeAchievements[primaryArchetype] || 'Showcase specific achievements that demonstrate your impact'}</li>
            <li>${superpowerActions[primarySuperpower] || 'Leverage your special abilities in your next role'}</li>
          </ul>
        </div>
      `;

      profileSummary.innerHTML = summaryHTML;

      // FIX 10: Add try/catch around visualization
      try {
        createCustomVisualization(scores);
      } catch (err) {
        console.error('Error creating visualization:', err);
        const vizContainer = document.getElementById('data-visualization');
        if (vizContainer) {
          vizContainer.innerHTML = '<p>Unable to generate the visualization. Please try again.</p>';
        }
      }

      submitQuizData({
        primaryArchetype,
        secondaryArchetype,
        primarySuperpower,
        secondarySuperpower,
        productCulture,
        pmCulture,
        responses: userResponses
      });

    } catch (error) {
      console.error('Error in showResults:', error);
      if (resultsContainer) {
        resultsContainer.innerHTML = '<p>An error occurred while calculating your results. Please try again.</p>';
      }
    }
  }

  function calculateScores() {
    const scores = {
      archetypes: {},
      superpowers: {},
      productCultures: {},
      pmCultures: {}
    };

    // FIX 11: Add validation for userResponses
    if (!userResponses || !Array.isArray(userResponses)) {
      console.error('Invalid user responses:', userResponses);
      return scores;
    }

    userResponses.forEach((response, index) => {
      if (!response || !Array.isArray(response) || response.length === 0) return;

      const question = quizData[index];
      if (!question) return;

      response.forEach(optionIndex => {
        if (optionIndex < 0 || optionIndex >= question.options.length) return;
        
        const option = question.options[optionIndex];
        if (!option || !option.scores) return;
        
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
    // FIX 12: Improve error handling
    if (!obj || typeof obj !== 'object' || Object.keys(obj).length === 0) {
      console.warn('getTopTwo received an invalid object:', obj);
      return [null, null];
    }
    
    // Sort in descending order by score
    const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    return [
      sorted[0] ? sorted[0][0] : null, 
      sorted.length > 1 ? sorted[1][0] : null
    ];
  }

  function getHighestScore(obj) {
    // FIX 13: Improve error handling
    if (!obj || typeof obj !== 'object' || Object.keys(obj).length === 0) {
      console.warn('getHighestScore received an invalid object:', obj);
      return 'Not determined';
    }
    
    // Sort in descending order by score
    const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    return sorted[0] ? sorted[0][0] : 'Not determined';
  }

  function createCustomVisualization(scores) {
    try {
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
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 600 400");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "400");
    
    const sortedArchetypes = Object.entries(scores.archetypes)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);

    // FIX 14: Handle empty or invalid scores
    if (sortedArchetypes.length === 0) {
      container.innerHTML = '<p>Insufficient data for visualization</p>';
      return;
    }

    const maxScore = Math.max(...Object.values(scores.archetypes)) || 1; // Avoid division by zero
    const colors = [
      '#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f', '#edc949', '#af7aa1', '#ff9da7', '#9c755f'
    ];
    
    const padding = 40;
    const circleRadius = 25;
    const lineLength = 80;
    const textOffset = 10;

    const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    background.setAttribute("width", "100%");
    background.setAttribute("height", "100%");
    background.setAttribute("fill", "#f8f9fa");
    svg.appendChild(background);

    const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
    title.setAttribute("x", 300);
    title.setAttribute("y", 30);
    title.setAttribute("text-anchor", "middle");
    title.setAttribute("font-size", "20");
    title.setAttribute("font-weight", "bold");
    title.setAttribute("fill", "#333");
    title.textContent = "Product Leadership Archetype Profile";
    svg.appendChild(title);

    sortedArchetypes.forEach((archetype, index) => {
      const score = scores.archetypes[archetype] || 0;
      const normalizedScore = score / maxScore;
      
      const angle = ((index / sortedArchetypes.length) * 2 * Math.PI) - (Math.PI / 2);
      const centerX = 300 + Math.cos(angle) * lineLength;
      const centerY = 220 + Math.sin(angle) * lineLength;
      
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", 300);
      line.setAttribute("y1", 220);
      line.setAttribute("x2", centerX);
      line.setAttribute("y2", centerY);
      line.setAttribute("stroke", colors[index % colors.length]);
      line.setAttribute("stroke-width", 2);
      svg.appendChild(line);
      
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", centerX);
      circle.setAttribute("cy", centerY);
      circle.setAttribute("r", Math.max(circleRadius * normalizedScore, 5)); // Minimum radius of 5
      circle.setAttribute("fill", colors[index % colors.length]);
      circle.setAttribute("opacity", 0.7);
      svg.appendChild(circle);
      
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

    const watermark = document.createElementNS("http://www.w3.org/2000/svg", "text");
    watermark.setAttribute("x", 585);
    watermark.setAttribute("y", 390);
    watermark.setAttribute("text-anchor", "end");
    watermark.setAttribute("font-size", "12");
    watermark.setAttribute("fill", "#999");
    watermark.textContent = "toptechnewsletter.com";
    svg.appendChild(watermark);

    container.appendChild(svg);
    } catch (error) {
      console.error('Error creating visualization:', error);
      const container = document.getElementById('data-visualization');
      if (container) {
        container.innerHTML = '<p>Unable to generate the visualization. Please try again later.</p>';
      }
    }
  }

  function shareResults(platform) {
    // FIX 15: Add error handling for sharing
    try {
      let scores;
      try {
        scores = calculateScores();
      } catch (err) {
        console.error('Error calculating scores for sharing:', err);
        return;
      }

      if (!scores || !scores.archetypes || Object.keys(scores.archetypes).length === 0) {
        console.error('Invalid scores for sharing');
        return;
      }

      const [primaryArchetype] = getTopTwo(scores.archetypes);
      if (!primaryArchetype) {
        console.error('Could not determine primary archetype for sharing');
        return;
      }

      let text = `I just discovered my Product Leadership Archetype: I'm a ${primaryArchetype}.`;
      
      if (archetypeDescriptions[primaryArchetype] && archetypeDescriptions[primaryArchetype].description) {
        const firstSentence = archetypeDescriptions[primaryArchetype].description.split('.')[0];
        if (firstSentence) {
          text += ` ${firstSentence}`;
        }
      }
      
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
        default:
          console.error('Unknown sharing platform:', platform);
          return;
      }

      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error('Error sharing results:', err);
    }
  }

  // Start the quiz
  try {
    showQuestion(currentQuestionIndex);
  } catch (err) {
    console.error('Error starting quiz:', err);
  }

  // Event listeners
  if (backArrow) {
    backArrow.addEventListener('click', () => {
      try {
        if (resultsContainer && resultsContainer.style.display === 'block') {
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
      } catch (err) {
        console.error('Error in back arrow handler:', err);
      }
    });
  }

  // Set up share buttons
  document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', function() {
      try {
        const platform = this.getAttribute('data-platform');
        if (platform) {
          shareResults(platform);
        }
      } catch (err) {
        console.error('Error in share button handler:', err);
      }
    });
  });
}

// FIX 16: Add more resilient initialization
function safeInitQuiz() {
  try {
    initQuiz();
  } catch (err) {
    console.error('Error initializing quiz:', err);
    // Display a user-friendly error message
    const containers = document.querySelectorAll('.container');
    if (containers.length > 0) {
      containers[0].innerHTML = `
        <h2>We're sorry!</h2>
        <p>There was an error loading the quiz. Please refresh the page to try again.</p>
        <button onclick="location.reload()" class="gradient-button">Refresh Page</button>
      `;
    }
  }
}

// Initialize the quiz when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', safeInitQuiz);
} else {
  safeInitQuiz();
}

// Add a global error handler
window.addEventListener('error', function(event) {
  console.error('Global error caught:', event.error);
  // We could add additional error reporting here
});
