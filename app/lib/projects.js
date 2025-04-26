export const projects = [
  {
    title: "Podcraft",
    description:
      "An AI-powered podcast platform with seamless playback and playlist management.",
    repoUrl: "https://github.com/zeynabmvs/podcraft",
    imageUrl: "/projects/podcraft.png",
    projectLangs: [0],
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "OpenAI API",
      "AI",
      "Podcast",
      "Web Application",
      "Typescript",
      "gitflow",
      "vercel",
    ],
    liveSite: "https://podcraft-roan.vercel.app/",
    priority: 1,
    techStack: [5, 3, 17, 18, 9, 21, 22, 19],
    // Additional data for project detail page
    tagline: "Building the future of AI-powered podcast experience",
    purpose: {
      problem:
        "Users need a more engaging and personalized way to discover and consume podcast content while managing their playlists effectively.",
      solution:
        "Created an AI-powered platform that enhances podcast discovery and management through intuitive interfaces and smart features.",
      impact:
        "Helping podcast enthusiasts save time in finding relevant content and managing their listening experience more efficiently.",
    },
    goals: [
      {
        title: "AI Integration",
        description:
          "Implement AI-powered features for content discovery and personalization",
      },
      {
        title: "User Experience",
        description:
          "Create an intuitive and seamless interface for podcast management",
      },
      {
        title: "Performance",
        description: "Ensure fast loading and smooth playback across devices",
      },
      {
        title: "Scalability",
        description:
          "Build a foundation that can handle growing content and user base",
      },
    ],
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Implemented the frontend interface using Next.js and TypeScript",
        "Integrated AI features using OpenAI API",
        "Set up authentication and database with Clerk and Convex",
        "Created responsive layouts and animations",
        "Followed git workflow best practices",
      ],
    },
    challenges: [
      {
        challenge: "Complex state management for audio playback",
        solution:
          "Implemented custom hooks and context for managing player state",
      },
      {
        challenge: "AI integration complexity",
        solution:
          "Created modular API endpoints and error handling for OpenAI integration",
      },
    ],
    learnings: [
      "Gained experience with AI API integration",
      "Improved TypeScript and Next.js skills",
      "Learned about audio handling in web applications",
      "Enhanced understanding of authentication flows",
      "Practiced modern git workflows",
    ],
    nextSteps: [
      "Add more AI-powered features",
      "Implement social sharing capabilities",
      "Enhance recommendation system",
      "Add offline support",
    ],
  },
  {
    title: "Recipedia",
    description: "A recipe app for discovering and browsing food recipes.",
    repoUrl: "https://github.com/zeynabmvs/recipedia",
    imageUrl: "/projects/recipedia.png",
    projectLangs: [1],
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TheMealDB API",
      "Food Recipes",
      "Web Application",
    ],
    liveSite: "https://food-recipe-react-dun.vercel.app/",
    priority: 2,
    techStack: [4, 26, 9, 15],
    // Additional data for project detail page
    tagline: "Discover delicious recipes with a modern cooking companion",
    purpose: {
      problem:
        "Home cooks need an easy way to find and explore new recipes with detailed instructions and ingredients.",
      solution:
        "Built a user-friendly recipe discovery platform with a modern interface and smooth animations.",
      impact:
        "Making cooking more accessible and enjoyable for users by simplifying recipe discovery and presentation.",
    },
    goals: [
      {
        title: "User Interface",
        description:
          "Design an attractive and intuitive recipe browsing experience",
      },
      {
        title: "Search & Filter",
        description:
          "Implement effective recipe search and filtering capabilities",
      },
      {
        title: "Animation",
        description:
          "Add smooth transitions and animations for better engagement",
      },
    ],
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Developed the frontend using React and Tailwind CSS",
        "Integrated TheMealDB API for recipe data",
        "Implemented animations using Framer Motion",
        "Created responsive layouts for all devices",
      ],
    },
    challenges: [
      {
        challenge: "Complex filtering system",
        solution: "Implemented efficient state management for filters",
      },
      {
        challenge: "Performance with animations",
        solution: "Optimized animations for smooth performance",
      },
    ],
    learnings: [
      "Deepened understanding of React hooks",
      "Learned animation implementation with Framer Motion",
      "Improved API integration skills",
      "Enhanced UI/UX design knowledge",
    ],
    nextSteps: [
      "Add user authentication",
      "Implement favorite recipes feature",
      "Add recipe sharing capability",
      "Enhance search functionality",
    ],
  },
  {
    title: "Kanba",
    description: "A Kanban-style task management app for organizing workflows.",
    repoUrl: "https://github.com/zeynabmvs/kanba",
    imageUrl: "/projects/kanba.png",
    projectLangs: [1],
    tags: ["Kanban", "Task Management", "Web Application", "React", "MUI"],
    liveSite: "https://kanba-hazel.vercel.app/",
    priority: 1,
    techStack: [4, 7, 10, 19],
    // Additional data for project detail page
    tagline: "Streamline your workflow with intuitive task management",
    purpose: {
      problem:
        "Teams need a visual and intuitive way to manage tasks and track project progress.",
      solution:
        "Created a Kanban board application with drag-and-drop functionality and clean interface.",
      impact:
        "Helping teams visualize their workflow and manage tasks more efficiently.",
    },
    goals: [
      {
        title: "Usability",
        description: "Create an intuitive drag-and-drop interface",
      },
      {
        title: "Functionality",
        description: "Implement core Kanban features effectively",
      },
      {
        title: "Design",
        description: "Maintain clean and professional appearance",
      },
    ],
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Built the frontend using React and Material-UI",
        "Implemented drag-and-drop functionality",
        "Created responsive board layouts",
        "Managed application state effectively",
      ],
    },
    challenges: [
      {
        challenge: "Complex drag-and-drop interactions",
        solution: "Utilized React DnD library with optimized performance",
      },
      {
        challenge: "State management across boards",
        solution: "Implemented efficient state management pattern",
      },
    ],
    learnings: [
      "Mastered drag-and-drop implementation",
      "Improved Material-UI proficiency",
      "Enhanced state management skills",
      "Learned about Kanban methodology",
    ],
    nextSteps: [
      "Add data persistence",
      "Implement user authentication",
      "Add collaboration features",
      "Enhance mobile experience",
    ],
  },
  {
    title: "World Ranks",
    description:
      "A data visualization tool for exploring global country rankings.",
    repoUrl: "https://github.com/zeynabmvs/world-ranks",
    imageUrl: "/projects/world-ranks.png",
    projectLangs: [1],
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Country Rankings",
      "Data Visualization",
      "Web Application",
      "API",
      "React query",
      "Rest countries api",
    ],
    liveSite: "https://zeynabmvs.github.io/world-ranks/",
    priority: 2,
    techStack: [4, 9, 8, 15, 26],
    // Additional data for project detail page
    tagline: "Explore and compare countries through interactive rankings",
    purpose: {
      problem:
        "Users need an easy way to explore and compare country statistics and rankings.",
      solution:
        "Built an interactive platform for visualizing and comparing country data.",
      impact:
        "Providing users with insights about countries through intuitive data visualization.",
    },
    goals: [
      {
        title: "Data Visualization",
        description: "Present country data in an engaging and clear way",
      },
      {
        title: "Performance",
        description: "Ensure smooth handling of large datasets",
      },
      {
        title: "User Experience",
        description: "Create intuitive sorting and filtering options",
      },
    ],
    role: {
      title: "Frontend Developer",
      responsibilities: [
        "Developed frontend using React and Vite",
        "Implemented data visualization components",
        "Integrated REST Countries API",
        "Created responsive and interactive UI",
      ],
    },
    challenges: [
      {
        challenge: "Handling large datasets efficiently",
        solution: "Implemented virtualization and optimized filtering",
      },
      {
        challenge: "Complex sorting mechanisms",
        solution: "Created flexible and reusable sorting utilities",
      },
    ],
    learnings: [
      "Improved data handling techniques",
      "Enhanced React Query implementation",
      "Learned about data visualization best practices",
      "Gained experience with Vite build tool",
    ],
    nextSteps: [
      "Add more visualization types",
      "Implement data comparison features",
      "Add data export functionality",
      "Enhance search capabilities",
    ],
  },
];
