const about = {
  name: 'Yaasiin',
  role: 'Software Developer and DevOps Engineer',
  company: '',
  description: [
    `A Software Developer & DevOps enthusiast committed to building secure, scalable applications.
     With a passion for technological innovation and a strong focus on delivering impactful solutions, 
     I specialize in full-stack development and cloud-based deployments.
     My goal is to create solutions that are reliable, secure, and easy to manage.
    `,
  ],
  resume: '/documents/CV.pdf',
  social: {
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
    stack: ['TypeScript', 'Express', 'React', 'PostgreSQL'],
  },
  {
    thumbnail: '/images/payrolll.jpg',
    name: 'Payroll Management System',
    description: [
      'A comprehensive payroll management system to streamline salary, benefits, and more',
    ],
    stack: ['TypeScript', 'MongoDB', 'Express', 'BootStrap', 'JQuery',],
  },
  {
    thumbnail: '/images/recsoft.jpg',
    name: 'Rec-Software',
    description: [
      `A bank statements reconciliation that can handle large amount of transactions and reconcile them correctly in the needed way.`,
    ],
    stack: ['TypeScript', 'MongoDB', 'Express', 'BootStrap', 'JQuery'],
  },
  {
    thumbnail: '/images/labomaster.png',
    name: 'Labomaster',
    description: [
      `Laboratory reagents and consumables management system`,
    ],
    stack: ['Java EE (Edition Enterprise)', 'PostgreSQL'],
  },
  {
    thumbnail: '/images/yaasiin-dev.png',
    name: 'Yaasiin.dev',
    description: [
      `Simple and minimalistic portfolio template for developers built with Next.js and TypeScript inspired by leanfolio`,
    ],
    stack: [
      'Next.js',
      'TypeScript',
    ],
    sourceCode: 'https://github.com/yaasiin-ayeva/yaasiin.dev',
    livePreview: 'https://yaasiin-dev.vercel.app',
  },
  {
    thumbnail: '/images/default.jpeg',
    name: 'WhatsBot',
    description: [
      `Simple AI powered WhatsApp bot that can let you interact with it using voice messages. Also Helps to download videos from numerous social media without watermark.`,
    ],
    stack: ['TypeScript', 'Puppeteer', 'Docker'],
    sourceCode: 'https://github.com/yaasiin-ayeva/WhatsBot',
    dockerHub: 'https://hub.docker.com/r/yaasiinayeva/whatsbot',
    livePreview: 'https://api.whatsapp.com/send/?phone=233531799313',
  },
  {
    thumbnail: '/images/default.jpeg',
    name: 'Polyglot',
    description: [
      `Simple discord bot that provide word translation to many differents languages.`,
    ],
    stack: ['JavaScript', 'ExpressJS', 'Discord.js'],
    sourceCode: 'https://github.com/yaasiin-ayeva/Polyglot',
    livePreview: 'https://discord.gg/TFT2m2Thuu',
  },
  {
    thumbnail: '/images/default.jpeg',
    name: 'd4d-express-mongo-boilerplate',
    description: [
      `Dev4Diversity Express API Boilerplate is aserver side element to handle apis. Runs with MongoDB database, Use Mongoose, Passport authentication & Custom seeders.`,
    ],
    stack: ['MongoDB', 'TypeScript', 'Express'],
    sourceCode:
      'https://github.com/yaasiin-ayeva/d4d-express-mongo-boilerplate',
  },
  {
    thumbnail: '/images/default.jpeg',
    name: 'd4d-express-sql-boilerplate',
    description: [
      `Dev4Diversity Express API Boilerplate is aserver side element to handle apis. Runs with SQL databases, Use TypeORM, JWT authentication & Custom seeders.`,
    ],
    stack: ['SQL', 'TypeScript', 'JWT', 'TypeORM', 'Express'],
    sourceCode:
      'https://github.com/yaasiin-ayeva/d4d-express-sql-boilerplate',
  },
]

const skills = [
  'TypeScript',
  'Express JS',
  'Node JS',
  'UML',
  'Git',
  'CI/CD',
  'Docker',
  'Kubernetes',
  'CircleCI',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Android Native',
  'IONIC',
  'BootStrap',
  'JQuery',
  'Bitbucket',
  'Postman',
  'Linux',
  'Bash',
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
    name: 'WhatsApp',
    link: 'https://wa.me/22893921257',
    icon: 'fab fa-whatsapp',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/hey_yaasiin',
    icon: 'fab fa-telegram',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/yaasiin-ayeva',
    icon: 'fab fa-github',
  },
  {
    name: 'Upwork',
    link: 'https://www.upwork.com/freelancers/~01a9b6b0b0c0c7f0b8',
    icon: 'fab fa-upwork',
  },
  {
    name: 'X',
    link: 'https://x.com/hey_yaasiin',
    icon: 'fab fa-twitter',
  },
  {
    name: 'Discord',
    link: 'https://discordapp.com/users/yaasiin#4671',
    icon: 'fab fa-discord',
  }
]

export { about, projects, skills, contact, contacts }