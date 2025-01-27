export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'John Smith',
    position: 'Next',
    img: 'assets/next.png',
    review:
      `Rahul is an exceptional full-stack developer who brings a perfect blend of technical expertise and creativity to every project. He has an excellent grasp of both front-end and back-end technologies and consistently delivers high-quality code.`,
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'Shadcn UI',
    img: 'assets/shadcn.png',
    review:
      'Working with Rahul has been a fantastic experience. He has a deep understanding of modern frameworks and tools, and his proactive communication ensures that all requirements are understood and implemented flawlessly.',
  },
  {
    id: 3,
    name: 'Sam',
    position: 'React',
    img: 'assets/react.svg',
    review:
      `Rahul is a highly skilled full-stack developer who consistently exceeds expectations. He consistently delivers innovative solutions and is always eager to learn new technologies to enhance his skills. If you're looking for someone reliable and talented, Rahul is your guy.`,
  },
  {
    id: 4,
    name: 'Phil Smith',
    position: 'Node',
    img: 'assets/node.png',
    review:
      `He is detail-oriented, efficient, and always open to feedback. Whether it's building a new application or optimizing existing systems, Rahul's contributions are invaluable. I’d gladly work with him again on future projects!`,
  },
];

export const myProjects = [
  {
    title: 'Simple PPP SaaS App',
    desc: 'Welcome to the Simple PPP! This project is a robust solution for managing and ensuring pricing consistency across multiple channels, platforms, and marketplaces.',
    subdesc:
      'Designed as a streamlined and developer-friendly management system, this app allows businesses to monitor, analyze, and enforce price parity with ease.',
    href: 'https://simpleppp.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.png',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Shadcn',
        path: 'assets/shadcn.png',
      },
      {
        id: 4,
        name: 'Tailwind',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 5,
        name: 'PostgreSql',
        path: '/assets/postgres.png',
      },
      {
        id: 6,
        name: 'Clerk',
        path: '/assets/clerk.png',
      },
      {
        id: 7,
        name: 'Stripe',
        path: '/assets/stripe.png',
      },
    ],
  },
  {
    title: 'Library Management System',
    desc: 'Built with Next.js, TypeScript, and Postgres, the Library Management System is a production-grade platform featuring a public-facing app and an admin interface. ',
    subdesc:
      'It offers advanced functionalities like seamless book borrowing, robust user management, file upload using ImageKit IO and an optimized tech stack.',
    href: 'https://lib-app-mu.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/lib.svg',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.png',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Shadcn',
        path: 'assets/shadcn.png',
      },
      {
        id: 4,
        name: 'Tailwind',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 5,
        name: 'PostgreSql',
        path: '/assets/postgres.png',
      },
      {
        id: 6,
        name: 'Next Auth',
        path: '/assets/auth.png',
      },
      {
        id: 7,
        name: 'Imagekit',
        path: '/assets/ikio.jpg',
      },
    ],
  },
  {
    title: 'Video Conferencing App',
    desc: 'Built with tech stack like Next.js, TypeScript and GetStream IO, this project aims to relpicate video conferencing apps.',
    subdesc:
      'It helps users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, etc. Stay connected with colleagues, friends, and family across the globe with our intuitive.',
    href: 'https://vc-app-rouge.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/boom.svg',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.png',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Shadcn',
        path: 'assets/shadcn.png',
      },
      {
        id: 4,
        name: 'Tailwind',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 5,
        name: 'Clerk',
        path: '/assets/clerk.png',
      },
      {
        id: 6,
        name: 'GetStream',
        path: '/assets/gs.png',
      },
    ],
  },
  {
    title: 'Multi Category Ecommerce Website',
    desc: 'Built with tech stack like Next.js, TypeScript and more, this project aims to relpicate a multi category and multi user role based ecommerce website.',
    subdesc:
      'Developed a full-featured e-commerce site with features like user authentication, payment gateways, and an admin panel for managing inventory.',
    href: 'https://wdtex.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/boom.svg',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.png',
      },
      {
        id: 2,
        name: 'MUI',
        path: 'assets/mui.png',
      },
      {
        id: 3,
        name: 'Framer',
        path: 'assets/framer.png',
      },
      {
        id: 4,
        name: 'Auth',
        path: '/assets/auth.png',
      },
      {
        id: 5,
        name: 'Stripe',
        path: '/assets/stripe.png',
      },
      {
        id: 6,
        name: 'Dummy',
        path: '/assets/dujs.png',
      },
      {
        id: 6,
        name: 'Mongo',
        path: '/assets/mongo.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'URPopular',
    pos: 'Full Stack Developer',
    duration: '2023 - Present',
    title: "Developed a fully responsive website 'BRIEFSEA' from scratch and implemented user authentication system, service listing and search functionality, and integration with payment gateways and APIs for enhanced usability",
    icon: '/assets/urp.svg',
    animation: 'victory',
    workdone: {
      hiring: [
        {
          id: 11,
          point: 'Implemented a hiring network using MERN Stack and Chakra UI.'
        },
        {
          id: 12,
          point: `Implemented Google, LinkedIn using authentication system using JWT Auth and OAuth2.`
        },
        {
          id: 13,
          point: 'Implemented form validation system using Formik and Yup for profile completion, new briefs and comments with replies on it.'
        },
        {
          id: 14,
          point: 'Worked on chatting, file upload, automated email sending, automated presentation creation and config driven form features using Socket IO and AWS S3 bucket.'
        },
        {
          id: 15,
          point: 'Implemented a dedicated admin panel to view all users, verify profiles and send custom push notifications.'
        }
      ],
      ins: [
        {
          id: 21,
          point: 'Implemented Google, Meta, and GitHub sign-in using Passport.JS'
        },
        {
          id: 22,
          point: `Worked with YouTube V3 API and Instagram Graph API to verify details of the user on YouTube and Instagram username input.`
        },
        {
          id: 23,
          point: 'Implemented payment calculation system on basis of followers, posts and likes & payment system using Instamojo Payment Gateway.'
        }
      ],
    }
  },
];