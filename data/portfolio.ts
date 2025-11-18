const about = {
  name: 'Yaasiin',
  fullName: 'Yaasiin AYEVA',
  role: 'Software Developer and DevOps Engineer',
  company: '',
  description: [
    `A Software Developer & DevOps Engineer committed to building secure, scalable applications.
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
    thumbnail: '/images/eagri-conseil.png',
    name: 'Eagri Conseil',
    description: [
      `Agricultural advisory app for ICAT Togo. It provides a platform for farmers to access expert advice and resources to improve their agricultural practices.`,
    ],
    stack: ['Flutter', 'Dart', 'Google Cloud', 'Firebase Cloud Messaging'],
    livePreview: 'https://play.google.com/store/apps/details?id=com.paneotech.eagriconseil&pcampaignid=web_share',
    sourceCode: 'https://github.com/yaasiin-ayeva/e-agriconseil-plus',
  },
  {
    thumbnail: '/images/yieldllc.png',
    name: 'Yield LLC',
    description: [
      `An Agency Website for Yield LLC, a company specializing in IT solutions, AI services, Software Development, SEO and Digital Marketing.`,
    ],
    stack: ['TypeScript', 'ReactJS', 'Tailwind', 'Vercel', 'ESLint', 'Prettier'],
    livePreview: 'https://yieldgrowth.org/',
  },
  {
    thumbnail: '/images/iroko.png',
    name: 'Iroko Holding',
    description: [
      `An Agency Website for IROKO HOLDING, a West African investment and development company with a strong focus on sustainability, green energy, and long - term growth`,
    ],
    stack: ['TypeScript', 'ReactJS', 'Tailwind', 'Vercel', 'ESLint', 'Prettier'],
    livePreview: 'https://iroko-group.com/',
  },
  {
    thumbnail: '/images/imbuto.png',
    name: 'Imbuto',
    description: [
      `A web platform connecting seed producers, farmers, certifiers, and buyers — enabling online seed sales, inventory management, and sales tracking. Currently used in Burundi.`,
    ],
    stack: ['TypeScript', 'Express', 'React Toolkit', 'React', 'MongoDB'],
    livePreview: 'https://pngs.bi',
    figma: 'https://www.figma.com/proto/7gXgKAFmcyO94VqPBS9qNq/IMBUTO?node-id=45-64343&p=f&t=GEN6AZKxJ1jdwfhK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=45%3A64343'
  },
  {
    thumbnail: '/images/orbisFlow.png',
    name: 'OrbisFlow',
    description: [
      `Multi-Domain Management SaaS (Restaurant, Supermarket, Gas Station, Bar Management) with POS, Inventory Management, Sales Tracking, and accounting module`,
    ],
    stack: ['TypeScript', 'Express', 'React Toolkit', 'React', 'PostgreSQL'],
    livePreview: 'http://16.171.67.4:5025/',
  },
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
    thumbnail: '/images/Triskeloum.JPG',
    name: 'Triskeloum',
    description: [
      `E-learning Platforme with its back-office, published on GitHub under an open-source license to promote collaboration and accessibility.`,
    ],
    stack: ['React', 'TypeScript', 'Postman', 'PostgreSQL'],
    sourceCode: 'https://github.com/yaasiin-ayeva/triskeloum-api',
    livePreview: 'https://triskeloum.vercel.app/',
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
    thumbnail: '/images/AT-Logo.webp',
    name: 'ussd-africas-talking-app',
    description: [
      `Example of a mobile money USSD service using Africa's Talking, developed with Node.js, Express, and TypeScript. This service allows users to interact with a menu-driven interface via USSD codes.`,
    ],
    stack: ['Africas Talking', 'TypeScript', 'Express'],
    sourceCode:
      'https://github.com/yaasiin-ayeva/ussd-africas-talking-app',
  },
  {
    thumbnail: '/images/whatsbot2.png',
    // thumbnail: '/images/default.jpeg',
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
    thumbnail: '/images/64Bot.png',
    name: '64Bot',
    description: [
      `Automation bot that collects chess content from Telegram, Twitter (X), and Instagram, and posts it to a WhatsApp channel on a set schedule.`,
    ],
    stack: ['TypeScript', 'Puppeteer', 'Telegram Bot API', 'Twitter API', 'Instagram API'],
    sourceCode: 'https://github.com/yaasiin-ayeva/64Bot',
    //dockerHub: 'https://hub.docker.com/r/yaasiinayeva/whatsbot',
    //livePreview: 'https://api.whatsapp.com/send/?phone=233531799313',
  },
  {
    thumbnail: '/images/Yield.png',
    name: 'Yield',
    description: [
      'System for sending massive and personalized SMS. Allows creating a personalized list of messages from a single message template.',
    ],
    stack: [
      'Python',
      'Django',
      'n8n',
      'PostgreSQL',
      'Twilio API',
      'Android',
      'Java',
    ],
    sourceCode: 'https://github.com/yaasiin-ayeva/Yield-Web',
    sourceCode1: 'https://github.com/yaasiin-ayeva/Yield-Mobile',
  },
  {
    thumbnail: '/images/polyglot.png',
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
  'Flutter',
  'Dart',
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
  // {
  //   name: 'Upwork',
  //   link: 'https://www.upwork.com/freelancers/~01a9b6b0b0c0c7f0b8',
  //   icon: 'fab fa-upwork',
  // },
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