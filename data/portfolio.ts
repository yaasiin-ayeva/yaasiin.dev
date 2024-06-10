const about = {
  name: 'Yaasiin AYEVA',
  role: 'Software Developer',
  company: 'JS Morlu Ghana',
  description: [
    `Software developer for nearly ${new Date().getFullYear() - 2020} years, I’am a stickler for API security, 
    a lover of clean code and remain passionate about my job and new technologies in general. Always on a quest 
    prowess that the development of 5G may enable on the ground, in line with the explosion of AI technologies.
    `,
  ],
  resume: '/documents/Yaasiin_AYEVA_CV.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/yaasiin-ayeva/',
    github: 'https://github.com/yaasiin-ayeva',
    stackoverflow: 'https://stackoverflow.com/users/20541346/yaasiin-ayeva',
  },
  greetingEmoji: '👋',
}

const projects = [
  {
    thumbnail: '/images/bog.jpg',
    name: 'Ghana Financial & Cargo Analytics',
    description: [
      `Web application that helps to monitor the compliance of companies with anti-money laundering 
       policies and regulations according to customs data and Bank of Ghana Swift data.
      `,
    ],
    stack: ['Tailwind CSS', 'TypeScript', 'React', 'SQL', 'Express'],
  },
  {
    thumbnail: '/images/yvans.jpg',
    name: 'YVANS : E-Commerce Website',
    description: [
      `Yvan's is a simple digital portfolio for a small online business which helps people to personalize their assets. 
       It's a simple website used to showcase yvans products and services.
      `,
    ],
    stack: ['BootStrap', 'JavaScript', 'HTML/CSS'],
    livePreview: 'https://www.yvansgroup.com/',
  },
  {
    thumbnail: '/images/payrolll.jpg',
    name: 'Payroll Management System',
    description: [
      'A comprehensive and efficient payroll management system to streamline salary, benefits, and more',
    ],
    stack: ['BootStrap', 'JQuery', 'TypeScript', 'MongoDB', 'Express'],
  },
  {
    thumbnail: '/images/recsoft.jpg',
    name: 'Rec-Software',
    description: [
      `An efficient bank statements reconciliation with a powerful algorithm that can run reconciliation process in less than 10 seconds. 
      It helps to generate reports based on some reconciliation criteria such as date, amount, and more. It can manage huge amount of 
      transactions and reconcile them correctly in the needed way.
      `,
    ],
    stack: ['JQuery', 'TypeScript', 'MongoDB', 'Express', 'BootStrap'],
  },
  {
    thumbnail: '/images/polyglot.png',
    name: 'Polyglot',
    description: [
      `Simple discord bot that provide word translation to more than 100 languages. 
      It's very easy to use. To translate a sentence into another language, you just need to type a simple a 
      short prompt and provide the language you want to translate into and the sentence.
      `,
    ],
    stack: ['JavaScript', 'ExpressJS', 'Discord.js'],
    sourceCode: 'https://github.com/yaasiin-ayeva/Polyglot',
    livePreview: 'https://discord.gg/TFT2m2Thuu',
  },
  {
    thumbnail: '/images/whatsbot.png',
    name: 'WhatsBot',
    description: [
      `Simple WhatsApp bot from unofficial Whatsapp API, built in NodeJS & TypeScript, uses Gemini & ChatGPT APIs for Completion.
      Provide prompts for Jokes, Memes, and Translation to any language. Uses Puppeteer and WhatsappWebJS (Unofficial Whatsapp API).
      `,
    ],
    stack: ['TypeScript', 'WhatsappWeb.js', 'Puppeteer', 'AI', 'GPT-3.5', 'OpenAI API', 'Gemini API'],
    sourceCode: 'https://github.com/yaasiin-ayeva/WhatsBot',
    livePreview: 'https://chat.whatsapp.com/LafMN793Hj9BBn3rOAe5CI',
  },
  {
    thumbnail: '/images/labomaster.png',
    name: 'Labomaster',
    description: [
      `This system helps to manage laboratory reagents and consumables in a simple and efficient way. 
      It gives overview and detailed reports on the usage of the reagents and consumables in the lab. 
      It simplifies the process of lab management by giving some indications based on some analytics and facts.
      `,
    ],
    stack: ['Java EE (Edition Enterprise)', 'PostgreSQL', 'Python', 'HTML/CSS'],
  },
  {
    thumbnail: '/images/rose.jpg',
    name: 'Rose 3D Printer / Laser Engraver',
    description: [
      `We designed and built, for an academic project, a 3D printer that operated on the Fused 
      Deposition Modeling (FDM) process. This technology enabled the creation of objects by extruding 
      and depositing melted plastic filament based on a 3D computer-aided design (CAD) sketch.
      `,
    ],
    stack: [
      'Arduino',
      'Marlin Firmware',
      'G-Code',
      'CAO',
      'SolidWorks',
      'FreeCad',
    ],
    sourceCode:
      'https://github.com/yaasiin-ayeva/rose-3d-printer-marlin-firmware',
    externalVideoSource:
      'https://youtu.be/oDosebpBEf8?si=fVS1XUaodooYHPyO&t=179',
  },
  {
    thumbnail: '/images/yaasiin-dev.jpeg',
    name: 'Yaasiin.dev',
    description: [
      `Simple and minimalistic portfolio template for developers built with Next.js and TypeScript inspired by leanfolio`,
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Brevo Conversations',
    ],
    sourceCode:
      'https://github.com/yaasiin-ayeva/yaasiin.dev',
    livePreview: 'https://yaasiin-dev.vercel.app',
  },
  {
    thumbnail: '/images/default.jpeg',
    name: 'd4d-express-mongo-boilerplate',
    description: [
      `Dev4Diversity Express API Boilerplate is aserver side element to handle apis. Runs with MongoDB database, Use Mongoose, Passport authentication & Custom seeders.`,
    ],
    stack: ['MongoDB', 'TypeScript', 'Passport', 'Mongoose', 'Express', 'Clean Architecture'],
    sourceCode:
      'https://github.com/yaasiin-ayeva/d4d-express-mongo-boilerplate',
  },
  {
    thumbnail: '/images/default.jpeg',
    name: 'd4d-express-sql-boilerplate',
    description: [
      `Dev4Diversity Express API Boilerplate is aserver side element to handle apis. Runs with SQL databases, Use TypeORM, JWT authentication & Custom seeders.`,
    ],
    stack: ['SQL', 'TypeScript', 'JWT', 'TypeORM', 'Express', 'Clean Architecture'],
    sourceCode:
      'https://github.com/yaasiin-ayeva/d4d-express-sql-boilerplate',
  },
]

const skills = [
  'TypeScript',
  'Express JS',
  'Node JS',
  'HTML/CSS/JS',
  'UML',
  'Git',
  'CI/CD',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Material UI',
  'Java',
  'J2EE/SpringBoot',
  'Android Native',
  'IONIC',
  'Tailwind',
  'BootStrap',
  'JQuery',
  'Next.js',
  'Planner',
  'Jira',
  'Bitbucket',
  'Postman',
  'Linux',
  'System Administration',
  'Bash',
  'Arduino',
  'Marlin Firmware',
  'SolidWorks',
]

const contact = {
  email: 'ayevayaasiin@gmail.com',
}

const contacts = [
  {
    name: 'Email',
    link: 'mailto:ayevayaasiin@gmail.com',
    icon: 'fas fa-envelope',
  },
  {
    name: 'Whatsapp',
    link: 'https://wa.me/22893921257',
    icon: 'fab fa-whatsapp',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/the___bishop',
    icon: 'fab fa-twitter',
  },
]

export { about, projects, skills, contact, contacts }
