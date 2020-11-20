import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nicolas Robinson', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  life: 'profile.jpg',
  karate: 'karate.png',
  foot: 'foot.jpg',
  jiu: 'jiu.jpg',

  paragraphOne: 'Hello there',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};



// VIDEOS DATA
export const videosData = [
  {
    id: nanoid(),
    img: 'video.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'video.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'video.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];


// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/nicolas.robinson.9/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/nicolas_robinson118/?hl=en',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nicolas-robinson-55765b171/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/peakneek',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCxARTOgXzA1oxHvGDe19J8Q',
    },
   
    
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
