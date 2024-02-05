import github from "./../../assets/github.svg";
import envelope from "./../../assets/envelope.svg";
import linkedin from "./../../assets/linkedin.svg";
import react from "./../../assets/react.svg";
import redux from "./../../assets/redux.svg";
import nodeJs from "./../../assets/nodeJs.svg";
import formik from "./../../assets/formik.svg";
import express from "./../../assets/express.svg";
import wordpress from "./../../assets/wordpress.svg";
import wpEngine from "./../../assets/wpEngine.svg";
import bootstrap from "./../../assets/bootstrap.svg";
import php from "./../../assets/php.svg";
import mySql from "./../../assets/mySql.svg";
import javascript from "./../../assets/js.svg";
import webDevImage from "./../../assets/webDevThumb.png";
import designImage from "./../../assets/designThumb.png";
import wildfireIcsBanner from "./../../assets/wildfireIcs.png";
import wildfireIcsMaps from "./../../assets/wildfireICSmaps.png";
import wildfireIcsIncidents from "./../../assets/wildfireICSincidents.png";
import wildfireIcsCases from "./../../assets/wildfireICScases.png";
import weatherAppBanner from "./../../assets/weatherApp.png";
import weatherAppResults from "./../../assets/weatherAppResults.png";
import weatherAppInitial from "./../../assets/weatherAppInitial.png";
import weatherAppSearch from "./../../assets/weatherAppSearch.png";
import worksOnPaperBanner from "./../../assets/worksOnPaper.jpg";
import worksOnPaperArtist from "./../../assets/worksOnPaperArtist.jpg";
import worksOnPaperCategory from "./../../assets/worksOnPaperCategory.jpg";
import binesPortfolioBanner from "./../../assets/binesHome.jpg";
import binesWork from "./../../assets/binesartwork.jpg";
import binesWorkPage from "./../../assets/binesartworkpage.jpg";
import herbiePortfolioBanner from "./../../assets/herbieSpotify.png";
import airBnbBanner from "./../../assets/airBnbBanner.png";
import citySpotify from "./../../assets/citySpotify.png";
import railPixBanner from "./../../assets/railpix.jpg";
import railPixCategories from "./../../assets/railpixCategories.jpg";
import railPixDetails from "./../../assets/railpixDetails.jpg";
import artboardBanner from "./../../assets/artboard.jpg";
import artboardMapping from "./../../assets/artboardMapping.png";
import artboardPersonas from "./../../assets/artboardPersonas.jpg";
import artboardPrototyping from "./../../assets/artboardPrototyping.jpg";
import artboardUiElements from "./../../assets/artboardUiElements.png";
import septaBanner from "./../../assets/septaLogos.png";
import septa1 from "./../../assets/septa1.png";
import septa2 from "./../../assets/septa2.png";
import septa3 from "./../../assets/septa3.png";
import septa4 from "./../../assets/septa4.png";
import septa5 from "./../../assets/septa5.png";
import septa6 from "./../../assets/septa6.png";
import fitcBanner from "./../../assets/fitcBanner.png";
import fitc1 from "./../../assets/fitc1.png";
import fitc2 from "./../../assets/fitc2.png";
import fitc3 from "./../../assets/fitc3.png";
import illustrationImage from "./../../assets/illustrationThumb.png";
import dice from "./../../assets/dice.jpg";
import desk from "./../../assets/desk.png";
import life from "./../../assets/lifePoster.png";

export const smoothScrollHandler = (event, id) => {
  const selectedId = document.querySelector(id || "#");
  event.preventDefault(); // Stop Page Reloading
  selectedId &&
    selectedId.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const navigationMenuLinks = [
  {
    id: 0,
    label: "About",
    isExternal: false,
    href: "#About",
  },
  {
    id: 1,
    label: "Works",
    isExternal: false,
    href: "#Works",
  },
  {
    id: 2,
    label: "Resume",
    isExternal: true,
    href: "./../src/resume.html",
  },
];

export const socialMenuLinks = [
  {
    id: 0,
    label: "Github",
    icon: github,
    href: "https://github.com/Jonbodoe",
  },
  {
    id: 1,
    label: "LinkedIn",
    icon: linkedin,
    href: "https://www.linkedin.com/in/jonathan-le-7336b71a0/",
  },
  {
    id: 2,
    label: "Email",
    icon: envelope,
    href: "mailto:jonledev@gmail.com",
  },
];

export const workCategories = [
  {
    id: 0,
    label: "Web Development",
    src: webDevImage,
  },
  {
    id: 1,
    label: "UX / Graphic Design",
    src: designImage,
  },
  {
    id: 2,
    label: "Illustrations",
    src: illustrationImage,
  },
];

// TODO: ensure informational links are present in tech / design
export const portfolioWorks = [
  {
    id: 0,
    title: "Wildfire ICS",
    workCategoryId: 0,
    bannerImageSrc: wildfireIcsBanner,
    isBannerImageDark: false,
    subTitle: "React CRUD web-app",
    description:
      "Capstone project for simplifying ICS (incident command systems) duties during wildfire natural disasters. This Web-App focuses coordinating teams and resources during natural disasters to help simplify the process for Incident Commanders",
    isDetailed: true,
    informationalLinks: [
      {
        label: "Github",
        link: "https://github.com/Jonbodoe/Wildfire",
        isPublic: true,
      },
      {
        label: "XD Design",
        link: "https://xd.adobe.com/view/b4fd67d0-17f9-471c-97be-df73c7c7385b-e1ae/",
        isPublic: true,
      },
    ],
    technologyStack: [
      {
        id: 0,
        label: "React",
        src: react,
      },
      {
        id: 1,
        label: "Redux",
        src: redux,
      },
      {
        id: 2,
        label: "Node",
        src: nodeJs,
      },
      {
        id: 3,
        label: "Formik",
        src: formik,
      },
      {
        id: 4,
        label: "Express",
        src: express,
      },
    ],
    additionalDetails: [
      {
        id: 0,
        title: "Background",
        image: wildfireIcsMaps,
        description:
          "To create a fullstack web-application that utilizes Javascript Libraries and Frameworks for my final capstone project. I wanted to create a JavaScript Web Application for Wildfire Chiefs to manage and locate wildfires based on the ICS systems utilizing 'crowdsourced' information.",
      },
      {
        id: 1,
        title: "Ideating",
        image: wildfireIcsIncidents,
        description:
          "Before building the application, I had to conduct additional research on how wildfires are handled based on the ICS systems and other protocols that are involved when handling and reporting wildfires. I had to conduct interviews with people who had experience working with either structural and wildland wildfires to gain further insight and to further improve on the product. Additionally, I also researched more into the feasibility of crowdsourcing information to detect occurrences based on location from social media.",
      },
      {
        id: 2,
        title: "Design",
        image: wildfireIcsCases,
        description:
          "The design process of the application was dependent on how Material UI design system’s stylized its components. I wanted to have this application to have a very simple style with enough information for the Wildfire Chief (also known as the Incident Commander), to evaluate the incidents. As a result, I ensured that the design of the application had simple design layouts, minimal color palette with a few highlighting colors, and providing short-copy for further explanation of the UI component.",
      },
      {
        id: 3,
        title: "Development",
        image: wildfireIcsBanner,
        description:
          "The development process of the application used Redux for state management, Material UI for design systems, and Node.js with Express.js for API management. Utilizing Redux Toolkit for the first time was quite an interesting process, since I'm more familiar with standard Redux. After understanding how Redux Toolkit works, it became easier to read and update state through the React UI components and Formik’s forms (a React-based library for form management). The most difficult part of the project was to ensure that DRY principles were implemented whenever possible and understanding how to efficiently use Redux Toolkit throughout the application.",
      },
    ],
  },
  {
    id: 1,
    title: "Weather App",
    workCategoryId: 0,
    bannerImageSrc: weatherAppBanner,
    isBannerImageDark: true,
    subTitle: "Personal Project",
    description:
      "A project to explore the use of communicating with APIs to using node js and express within a react application.",
    isDetailed: true,
    informationalLinks: [
      {
        id: 0,
        label: "Github",
        link: "https://github.com/Jonbodoe/WeatherApp",
      },
    ],
    technologyStack: [
      {
        id: 0,
        label: "React",
        src: react,
      },
      {
        id: 2,
        label: "Node",
        src: nodeJs,
      },
      {
        id: 4,
        label: "Express",
        src: express,
      },
    ],
    additionalDetails: [
      {
        id: 0,
        title: "Background",
        image: weatherAppInitial,
        description:
          "To create a weather app that utilizes API information through React.js and Node.js. I wanted to gain practice utilzing a node server to fetch data and create endpoints for the FE to communicate with node js.",
      },
      {
        id: 1,
        title: "Ideating",
        image: weatherAppSearch,
        description:
          "Understanding how to communicate from React’s client-side to Node’s server-side was relatively easy after understanding how fetch API works. I made sure when developing the app, I handle the API request and CORS within the server-side of the application.",
      },
      {
        id: 2,
        title: "Design",
        image: weatherAppResults,
        description:
          "The design of the project was to use a simple yet interesting color palette that I typically don’t use often. The web-app’s design layout and color palette was quite experimental compared to my usual color palettes of always utilizing standard color such as having a white background with a blue accent color.",
      },
      {
        id: 3,
        title: "Development",
        image: weatherAppBanner,
        description:
          "The development of the project utilized create-react-app with a node.js and express.js backend server. The most tricky part developing the application was to have a user’s input value to be sent back to the server-side to get the user’s desired API output. After understanding how the client-side interacts with the server-side and vice versa, it became clear that I have to store the values within the server-side’s API query string.",
      },
    ],
  },
  {
    id: 2,
    title: "Railpix Website",
    workCategoryId: 0,
    bannerImageSrc: railPixBanner,
    isBannerImageDark: false,
    subTitle: "PHP CRUD App",
    description:
      "A php website utilizing mySQL databases to perform CRUD functionalities. Railpix is a railroad benching website for users to post their rail fan pictures for the world to see.",
    isDetailed: true,
    informationalLinks: [
      {
        id: 0,
        label: "Github",
        link: "https://github.com/Jonbodoe/RailPix",
      },
    ],
    technologyStack: [
      {
        id: 0,
        label: "Wordpress",
        src: wordpress,
      },
      {
        id: 1,
        label: "PHP",
        src: php,
      },
      {
        id: 2,
        label: "Javascript",
        src: javascript,
      },
      {
        id: 3,
        label: "Bootstrap",
        src: bootstrap,
      },
      {
        id: 4,
        label: "MySql",
        src: mySql,
      },
    ],
    additionalDetails: [
      {
        id: 0,
        title: "Background",
        image: railPixCategories,
        description:
          "I wanted to create a freight train tracking website that uses Google APIs to 'track' where people take photos of freights. In my spare time I like to document trains at various locations, the different types of freights, and locomotives, I wanted to create a forum / website to document people's findings.",
      },
      {
        id: 1,
        title: "Development",
        image: railPixDetails,
        description:
          "The requirements were that it had to be written in PHP with MySQL as a backend database. It involved utilizing techniques by importing and exporting components, as well as being able to use CRUD functionalities through a front-end interface that connects to the MySQL database. It also required to use dynamic data by using 'super-global' to determine the output on specific pages. The database itself had to be created specifically to be relational to other databases, as well as being separated based on its use-case.",
      },
    ],
  },
  {
    id: 3,
    title: "Works on Paper Gallery",
    workCategoryId: 0,
    bannerImageSrc: worksOnPaperBanner,
    isBannerImageDark: true,
    subTitle: "Client Project",
    description:
      "A wordpress CMS website for a client who specializes in contemporary local art from the 21st century. Works on Paper is a prolific art gallery within the Philadelphia area that features both local and global renouned artists.",
    isDetailed: true,
    informationalLinks: [
      {
        id: 0,
        label: "Adobe XD",
        link: "https://xd.adobe.com/view/dd9e264c-a56e-47b0-a699-542a340b406d-88cd/",
      },
    ],
    technologyStack: [
      {
        id: 0,
        label: "Wordpress",
        src: wordpress,
      },
      {
        id: 1,
        label: "PHP",
        src: php,
      },
      {
        id: 2,
        label: "Javascript",
        src: javascript,
      },
      {
        id: 3,
        label: "Bootstrap",
        src: bootstrap,
      },
      {
        id: 4,
        label: "WP Engine",
        src: wpEngine,
      },
    ],
    additionalDetails: [
      {
        id: 0,
        title: "Background",
        image: worksOnPaperArtist,
        description:
          "Works on Paper is an art gallery within the Philadelphia area. Their current site utilizes a very outdated CMS and needed more flexibility with their site’s content creation and a new design look. As a result, I proposed to Works on Paper to utilize Wordpress to develop and utilize their company on the digital space.",
      },
      {
        id: 1,
        title: "Design",
        image: worksOnPaperCategory,
        description:
          "The design process behind the website is to use very neutral colors with highlights of navy. I wanted to have the neutral colors focus more on the artworks themselves than using very contrasting colors. I used Adobe XD to design the proposed website design, since I used a very modular theme style, I used bootstrap design patterns to base my design on.",
      },
      {
        id: 2,
        title: "Development",
        image: worksOnPaperBanner,
        description:
          "The development of the site utilized ACF (advanced custom fields) and custom post types to utilize the user’s input to use dynamic information to be placed within the pages. I also utilized a bootstrap Wordpress Theme base to match the approved design.",
      },
    ],
  },
  {
    id: 4,
    title: "Bines Portfolio",
    workCategoryId: 0,
    bannerImageSrc: binesPortfolioBanner,
    isBannerImageDark: false,
    subTitle: "Client Project",
    description:
      "A wordpress CMS portfolio website for an artist named 'Bines (Catenary)'.  Bines is a prolific artist within the tri-state that specializes in mural arts.",
    isDetailed: true,
    informationalLinks: [],
    technologyStack: [
      {
        id: 0,
        label: "Wordpress",
        src: wordpress,
      },
      {
        id: 1,
        label: "PHP",
        src: php,
      },
      {
        id: 3,
        label: "Bootstrap",
        src: bootstrap,
      },
      {
        id: 4,
        label: "WP Engine",
        src: wpEngine,
      },
    ],
    additionalDetails: [
      {
        id: 0,
        title: "Background",
        image: binesWorkPage,
        description:
          "Bines is a good friend of mine who needed a website so that he can showcase his artworks and be able to take full control of what content he wants to display. As a result I created his website using Wordpress.",
      },
      {
        id: 1,
        title: "Design",
        image: binesWork,
        description:
          "For the design, I wanted to create a large focus on the artwork he does by having a very simple, monotone website that constrasts against the artwork's colors.",
      },
    ],
  },
  {
    id: 5,
    title: "ArtBoard Mobile App",
    workCategoryId: 1,
    bannerImageSrc: artboardBanner,
    isBannerImageDark: true,
    subTitle: "UX Project",
    description:
      "A UX mobile app project exercising the processes behind creating a user based product. Artboard is a mobile app that brings together art enthusiasts and artists together on the same platform to purchase and sell artworks.",
    isDetailed: true,
    informationalLinks: [
      {
        id: 0,
        label: "Adobe XD",
        link: "https://xd.adobe.com/view/f929b99a-84fd-479f-b6c0-46e0714c236c-ac7a/",
      },
    ],
    technologyStack: [],
    additionalDetails: [
      {
        id: 0,
        title: "Site Mapping",
        image: artboardMapping,
        description:
          "The concept of this project was to create a mobile platform to purchase and sell artworks. For the first steps designing the product I wanted to create a mapping of the user flow of the application.",
      },
      {
        id: 1,
        title: "Personas",
        image: artboardPersonas,
        description:
          "After deciding on the moodboard to determine the overall feeling of the application, I wanted to create personas to further understand what the needs, wants, and concerns users may have using the applciation. I created 6 different personas varying from art enthusiast to regular people to gather ideas for designing the mobile application.",
      },
      {
        id: 2,
        title: "Wireframing",
        image: artboardPrototyping,
        description:
          "After determining who my audience will be as well as their general wants and concerns, I created wireframes to further illustrate how users interact with a rough design before building proper wireframes. I wanted to understand their habits and unconscious decisions for navigation the application to complete specific tasks.",
      },
      {
        id: 3,
        title: "UI Elements",
        image: artboardUiElements,
        description:
          "After understanding how the users interacted with my wireframes, I created UI elements to help guide the overall design of the project by understanding and different state colors and interactivities of how things will look.",
      },
      {
        id: 4,
        title: "Product",
        image: artboardBanner,
        description:
          "To interact and see how the application works, please click on the link below to view the finish product!",
      },
    ],
  },
  {
    id: 6,
    title: "Landing Page Designs",
    workCategoryId: 1,
    bannerImageSrc: herbiePortfolioBanner,
    isBannerImageDark: false,
    subTitle: "Personal Project",
    description:
      "Designing landing pages utilizing different colors, styles, and graphics to convey a certain emotion/feeling from the graphics",
    isDetailed: true,
    informationalLinks: [],
    technologyStack: [],
    additionalDetails: [
      {
        id: 0,
        image: herbiePortfolioBanner,
      },
      {
        id: 1,
        image: citySpotify,
      },
      {
        id: 2,
        image: airBnbBanner,
      },
    ],
  },
  {
    id: 7,
    title: "Rebranding Septa Guidelines",
    workCategoryId: 1,
    bannerImageSrc: septaBanner,
    isBannerImageDark: false,
    subTitle: "Branding Design Project",
    description:
      "Redesigning Septa's branding guidelines for a school project. Septa is a notorious brand within the philadelphia area that citizens including myself take to school on a daily basis. I wanted to give Septa a more modern twist in their branding presentation.",
    isDetailed: true,
    informationalLinks: [],
    technologyStack: [],
    additionalDetails: [
      {
        id: 1,
        image: septa1,
      },
      {
        id: 2,
        image: septa2,
      },
      {
        id: 3,
        image: septa3,
      },
      {
        id: 4,
        image: septa4,
      },
      {
        id: 5,
        image: septa5,
      },
      {
        id: 6,
        image: septa6,
      },
    ],
  },
  {
    id: 8,
    title: "FITC Poster Branding",
    workCategoryId: 1,
    bannerImageSrc: fitcBanner,
    isBannerImageDark: true,
    subTitle: "Design Project",
    description:
      "A school project dedicated to designing posters for conferences that match their asethetics. This project shows 3 different variation of posters that represents the conference.",
    isDetailed: true,
    informationalLinks: [],
    technologyStack: [],
    additionalDetails: [
      {
        id: 0,
        image: fitc1,
      },
      {
        id: 1,
        image: fitc2,
      },
      {
        id: 2,
        image: fitc3,
      },
    ],
  },
  {
    id: 9,
    title: "Rolling Dice",
    workCategoryId: 2,
    bannerImageSrc: dice,
    isBannerImageDark: true,
    subTitle: "",
    description: "",
    isDetailed: false,
    informationalLinks: [],
    technologyStack: [],
    additionalDetails: [],
  },
  {
    id: 10,
    title: "Working Desk",
    workCategoryId: 2,
    bannerImageSrc: desk,
    isBannerImageDark: true,
    subTitle: "",
    description: "",
    isDetailed: false,
    informationalLinks: [],
    technologyStack: [],
    additionalDetails: [],
  },
  {
    id: 11,
    title: "Life Poster",
    workCategoryId: 2,
    bannerImageSrc: life,
    isBannerImageDark: true,
    subTitle: "",
    description: "",
    isDetailed: false,
    informationalLinks: [],
    technologyStack: [],
    additionalDetails: [],
  },
];
