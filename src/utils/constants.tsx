import { EmailIcon, GithubIcon, TwitterIcon } from 'ui/icons'
import { LinkedInIcon } from 'ui/icons/LinkedIn'

export const SITE_URL = 'https://www.wnassour.com/'
export const SITE_NAME = 'Wassim Blog'
export const TWITTER_USERNAME = '@wassimnassour'
export const PHONE_NUMBER = '+212641327128'
export const EMAIL = 'nassourwassim@gmail.com'
export const TWITTER_URL = 'https:www.twitter.com/wassimnassour'
export const LINKED_IN_URL =
  'https://www.linkedin.com/in/wassim-nassour-a21b53138/'
export const ABOUT =
  ' Hi ,Im wassim self-taught developer ,I work now as React Native engineer at @Obyets , I’ve been passionate about technology since I was a kid. im  someone friendly and ambition to learn and grow and gain more experience and knowledge . at daily basis try to be good engineer by writing clean and readable also high-quality code using current best practices in web development ,by using many technologies such us ,React , React Native ,NextJs ,Gatsby .... ,In my downtime, I enjoy reading about tech, or watching some tutorials addition i write articles in my Blog . if you are looking for help or consulting you can Reach out to me , I will be very happy '

export const NAV_LINKS = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/#contactMe',
    name: 'Contact me ',
  },
  {
    url: '/blog',
    name: 'Blog',
  },
  {
    url: '/about',
    name: 'About',
  },
]

export const socialLinks = [
  { url: TWITTER_URL, icon: <TwitterIcon /> },
  {
    url: LINKED_IN_URL,
    icon: <LinkedInIcon />,
  },
  { url: 'https://github.com/wassimnassour', icon: <GithubIcon /> },
  { url: `mailto:${EMAIL}`, icon: <EmailIcon /> },
]

export const jobs = [
  {
    name: 'Obytes',
    role: 'Front-end Engineer',
    description:
      "I'm working at Obytes as Front end developer, I use many amazing technologies, on a daily basis such as React, React Native, Next js, Styled-components, react-query ...., I Contributed to some existing projects, by adding new features and fixing some issues, also I had the chance to start working on new apps, on my own, where I faced many problems and learn a lot by solving themes.",
    date: '2022 – Present / Casablanca ',
    projects: [
      {
        name: ' Vieva Care',
        description:
          'Vieva Care is an intelligent digital solution that helps takes the pulse of teams in real time and quickly implement the most relevant corrective and preventive actions to improve the work climate, commitment and performance',
      },
      {
        name: 'Give',
        description:
          "it's a mobile app for donating to poor people around the world, I do some refactoring on this app and I added some new functionality ",
      },
      {
        name: 'Newsbyte',
        description:
          "it's a mobile app, a news app for sharing and following the latest articles from all top journalist websites on the internet, I used react native and amazing technologies in these projects",
      },
      {
        name: '1Fort',
        description:
          "    it's a cyber security app, I was the lead on this project I was having the right to decide about used technologies, I used electron + React for the desktop app, and react for the web Version, and also an onBoard new intern with me, helped him with code review and add enhancement to his code",
      },
    ],
    technologies: ['Tailwind CSS', 'React', 'TypeScript', 'React Native'],
    url: 'http://www.obytes.com',
  },
  {
    name: 'Awto.ma',
    role: 'Co-Founder',
    date: '1 Year / Remote',
    description:
      'Auto is selling used  cars company based in Morocco I built two apps here one is an Admin dashboard and one is a website where people can buy and sell used cars, it’s well-experienced I had the  experience to learn and practice  a lot of things, and I learned  a lot like',
    tasks: [
      'some research about the market along the UX in the app to align with the Moroccan community ',
      'Generate pdf based on data',
      'built with Nextjs, Typescript, react-query, react-pdf, Tailwindcss, and more ',
      'make some different building modes like ISG, SSG SSR based on the requirement of each page',
      'made the app responsive',
      'Ran some user interviews to seek constructive feedback to improve the UX',
      'Setup the Frontend codebase, configured unit, integration and Unit Integration Test, linting, formatting, pre-commit, CI/CD with Digital Ocean and GitHub action',
      'code review to the backend with Golang ',
    ],
    technologies: ['Tailwind CSS', 'React', 'TypeScript', 'React Native'],
    url: 'http://www.obytes.com',
  },
  {
    name: 'Rantt',
    role: 'Co-Founder',
    date: '2021 - 2022 / New York / Remote',
    description:
      'Rantt is social media app, with the approach of communities, I worked as a full stack developer at Rantt i build two  apps one is a web portal for a mobile app and the other one is to create the same functionality in the  mobile the app',
    tasks: [
      'Build a backend with Express.js, connecting that service to another grpc server',
      'Create a subscription in Stripe',
      'Build an endpoint to subscribe to the subscription',
      'Update user credit card',
      'Cancel a subscription at period end',
      'Cancel the subscription immediately',
      'Update subscription price',
      'Build social media app, and web portal using React ',
    ],
    technologies: [
      'Tailwind CSS',
      'React',
      'TypeScript',
      'Stripe',
      'Nodejs',
      'Grpc',
    ],
    url: 'http://www.obytes.com',
  },
]
