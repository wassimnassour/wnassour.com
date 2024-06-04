import { EmailIcon, GithubIcon, TwitterIcon } from 'ui/icons'
import { LinkedInIcon } from 'ui/icons/LinkedIn'
export const RESUME_URL =
  'https://docs.google.com/document/d/1yPVQfaxMkXqPNVjwvSNAPk3mVgfZ0vvFr2d_qZoyS9c/edit'
export const SITE_URL = 'https://www.wnassour.com/'
export const SITE_NAME = 'Wassim Blog'
export const TWITTER_USERNAME = '@wassimnassour'
export const PHONE_NUMBER = '+212641327128'
export const EMAIL = 'nassourwassim@gmail.com'
export const TWITTER_URL = 'https://www.twitter.com/wassimnassour'
export const LINKED_IN_URL = 'https://www.linkedin.com/in/wassim-nassour-a21b53138/'
export const ABOUT =
  ' Hi ,Im wassim self-taught developer ,I work now as React Native engineer at @Obyets , I’ve been passionate about technology since I was a kid. im  someone friendly and ambition to learn and grow and gain more experience and knowledge . at daily basis try to be good engineer by writing clean and readable also high-quality code using current best practices in web development ,by using many technologies such us ,React , React Native ,NextJs ,Gatsby .... ,In my downtime, I enjoy reading about tech, or watching some tutorials addition i write articles in my Blog . if you are looking for help or consulting you can Reach out to me , I will be very happy '

export const NoteColors = {
  purple: '#B692FE',
  orange: '#FF9B73',
  blue: '#01D4FF',
  yellow: '#FFC972'
}

export const NAV_LINKS = [
  {
    url: '/',
    name: 'Home'
  },

  {
    url: '/notes',
    name: 'Notes'
  },
  {
    url: '/blog',
    name: 'Blog'
  },

  {
    url: '/about',
    name: 'About'
  },
  {
    url: '/#contactMe',
    name: 'Contact me '
  }
]

export const socialLinks = [
  { url: TWITTER_URL, icon: <TwitterIcon /> },
  {
    url: LINKED_IN_URL,
    icon: <LinkedInIcon />
  },
  { url: 'https://github.com/wassimnassour', icon: <GithubIcon /> },
  { url: `mailto:${EMAIL}`, icon: <EmailIcon /> }
]

export const jobs = [
  {
    name: 'Maltem Africa',
    role: 'Front-end Engineer',
    description:
      "I'm working at Obytes as Front end developer, I use many amazing technologies, on a daily basis such as React, React Native, Next js, Styled-components, react-query ...., I Contributed to some existing projects, by adding new features and fixing some issues, also I had the chance to start working on new apps, on my own, where I faced many problems and learn a lot by solving themes.",
    date: '01-2024 -present / Casablanca ',
    projects: [
      {
        name: 'Inwi',
        description:
          'working on b2b e-shop application in inwi.ma, also built dashboard application add products and manage sells',
        tasks: [
          'Building b2b app with Next. js(14), TypeScript, React Query, material UI, Tailwind CSS, and more in inwi.ma',
          'Built dashboards to manage products and sells',
          'Enhance  Docker image ',
          'Setting up the frontend codebase for dashboard application, configuring unit, integration, and unit integration tests, linting, formatting, pre-commit'
        ]
      }
    ],
    technologies: ['Tailwind CSS', 'Nextjs', 'TypeScript'],
    url: 'https://maltem.com/en/'
  },
  {
    name: 'Obytes',
    role: 'Front-end Engineer',
    description:
      "I'm working at Obytes as Front end developer, I use many amazing technologies, on a daily basis such as React, React Native, Next js, Styled-components, react-query ...., I Contributed to some existing projects, by adding new features and fixing some issues, also I had the chance to start working on new apps, on my own, where I faced many problems and learn a lot by solving themes.",
    date: '2021 – 2023 / Casablanca ',
    projects: [
      {
        name: ' Vieva Care',
        description:
          'Vieva Care is an intelligent digital solution that helps takes the pulse of teams in real time and quickly implement the most relevant corrective and preventive actions to improve the work climate, commitment and performance'
      },
      {
        name: 'Give',
        description:
          "it's a mobile app for donating to poor people around the world, I do some refactoring on this app and I added some new functionality "
      },
      {
        name: 'Newsbyte',
        description:
          "it's a mobile app, a news app for sharing and following the latest articles from all top journalist websites on the internet, I used react native and amazing technologies in these projects"
      },
      {
        name: '1Fort',
        description:
          "it's a cyber security app, I was the lead on this project I was having the right to decide about used technologies, I used electron + React for the desktop app, and react for the web Version, and also an onBoard new intern with me, helped him with code review and add enhancement to his code"
      }
    ],
    technologies: ['Tailwind CSS', 'React', 'TypeScript', 'React Native'],
    url: 'http://www.obytes.com'
  },
  {
    name: 'Awto.ma',
    role: 'Co-Founder',
    date: '1 Year / Remote',
    description:
      'Owto is a used car selling company based in Morocco. I built two apps: an admin dashboard and a website where people can buy and sell used cars. During this experience, I gained a lot of knowledge such as:',
    tasks: [
      'Conducting market research and aligning the UX of the app with the Moroccan community',
      'Generating PDFs based on data',
      'Building with Next.js, TypeScript, React Query, React PDF, Tailwind CSS, and more',
      'Creating different building modes like ISG, SSG, and SSR based on the requirements of each page',
      'Making the app responsive',
      'Ran some user interviews to seek constructive feedback to improve the UX',
      'Setting up the frontend codebase, configuring unit, integration and unit integration tests, linting, formatting, pre-commit, and CI/CD with Digital Ocean and GitHub actions',
      'Reviewing the backend codebase with Golang.'
    ],
    technologies: ['Tailwind CSS', 'React', 'TypeScript', 'Nextjs', 'Jest', 'React-pdf'],
    url: 'http://www.awto.com'
  },
  {
    name: 'Rantt',
    role: 'Full-stack',
    date: '2020 - 2021 / New York / Remote',
    description:
      'Rantt is social media app, with the approach of communities, I worked as a full stack developer at Rantt i build two  apps one is a web portal for a mobile app and the other one is to create the same functionality in the  mobile the app',
    tasks: [
      'Build a backend using Express.js and connect it to another gRPC server.',
      'Create a subscription in Stripe',
      'Develop an endpoint for subscribing to the created subscription.',
      'Enable updating of user credit card information.',
      'Allow cancellation of a subscription at the end of the billing period.',
      'Enable immediate cancellation of a subscription.',
      'Allow updating of subscription price.',
      'Develop a social media app and web portal using React.'
    ],
    technologies: ['Tailwind CSS', 'React', 'TypeScript', 'Stripe', 'Nodejs', 'Grpc'],
    url: 'http://www.Rantt.com'
  }
]
