import Profile from './assets/images/profile.jpg';
import Movie from './assets/images/movie-app.png';
import Gallery from "./assets/images/image-gallery.png";
import JobAsync from "./assets/images/jobasync.png";
import MealMagic from "./assets/images/mealmagic.png";
const logotext = "A. A. A";
const meta = {
    title: "Aghedo Allison Aghedo",
    description: "I'm Aghedo Allison Aisosa, a Frontend web developer",
};

const introdata = {
  title: "Hi, I'm Aghedo Allison Aisosa,",
  animated: {
    first: " a Frontend web developer",

    // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
  },
  description:
    "Dedicated to crafting user-friendly and responsive interfaces, adept at tackling technical challenges to optimize performance and ensure cross-browser compatibility",
  your_img_url: Profile,
};

const dataabout = {
  title: "What I do?",
  aboutme: `
								Hello, I am Aisosa, A frontend web developer.
                I am Skilled in developing responsive, visually appealing, and intuitive interfaces, I seamlessly enhance user experiences across diverse devices and browsers. I collaborate closely with designers to transform visual concepts into interactive web pages. Proficient in identifying and efficiently resolving technical challenges associated with user interfaces, I excel in tasks such as debugging code, optimizing performance, ensuring cross-browser compatibility, and implementing responsive design
                                `,
};

const dataportfolio = [
  {
    img: Movie,
    description:
      "This is a React-based web application that allows users to explore and discover top-rated movies. It collects data from the tmdb api",
    link: "https://movie-edb94uoxi-aisosaaghedo.vercel.app/",
    demo: "https://github.com/AisosaAghedo/hngx-stagetwo",
  },
  {
    img: Gallery,
    description:
      "A simple React-based image gallery project that allows users to view and interact with a collection of images,allows users to drag and drop images and search for images using the different tags",
    link: "https://image-gallery-nine-azure.vercel.app/gallery",
    demo: "https://github.com/AisosaAghedo/hngx-stage3",
  },
  {
    img: JobAsync,
    description:
      "Collaborated on this project, which is a job portal for tech jobseekers to find job and employers to post job openings",
    link: "https://jobasync.web.app",
    demo: "https://github.com/Edo-Innovates/Job-Portal-Frontend-Cohort-2023",
  },
  {
    img: MealMagic,
    description:
      "Collaborated with backend devs to create this project.MealMagic is A website that recommends recipes based on different information from the user using a content based filtering recommendation system",
    link: "#",
    demo: "https://github.com/AisosaAghedo/MealMagic-recipe-recommendation-website",
  },
  
];

const contactConfig = {
    YOUR_EMAIL: "allysonaghedo@gmail.com",
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
  github: "https://github.com/AisosaAghedo",
  linkedin: "https://linkedin.com/Aisosa Aghedo",
};
export {
    meta,
    dataabout,
    dataportfolio,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};