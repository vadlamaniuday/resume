
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vadlamani Uday Kumar",
  initials: "VU",
  location: "Visakhapatnam, Andhra Pradesh, India",
  personalWebsiteUrl: "",
  locationLink: "https://maps.app.goo.gl/G3hmuXxrdWuAmBRdA",
  about:
    "2023 Bachelor of Computer Applications (BCA) Graduate with interest in programming and software design. I am hardworking, reliable and can pick up new techniques and technologies very quickly.",
  summary:
    "I am Vadlamani Uday Kumar . I'm a recent graduate from India. I have strong fundamentals in Java, Spring, JavaScript, Python, Django and SQL, along with internship experience in Django REST Framework(Backend) and React JS (front-end). I am known to be a quick learner who picks up new tech at a fast rate. Worked as a Software Development Intern at Adyant Softtech Pvt Ltd from Feb 2023 to May 2023",
  avatarUrl: "https://avatars.githubusercontent.com/u/106002431?s=400&u=933ba17a948a8c6b1471e294289d9e754127e377&v=4",

  contact: {
    email: "vadlamaniuday04@gmail.com",
    tel: "+91-7415366909",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vadlamaniuday",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vadlamani-uday-095755208/",
        icon: LinkedInIcon,
      },
      
    ],
  },
  education: [
    {
      school: "MATS University",
      degree: "Bachelor's Degree in Computer Applications",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Adyant Softtech Pvt Ltd",
      link: "https://adyant.co.in/",
      badges: [],
      title: "Software Developer - Intern",
      logo: "https://img1.wsimg.com/isteam/ip/ecb1e63d-34f4-4136-b075-6fe0fcf84535/ADYANT%20CLOCK%20DESIGN.jpg/:/rs=w:276,h:212,cg:true,m/cr=w:276,h:212/qt=q:100/ll",
      start: "Feb 2023",
      end: "May 2023",
      description:
        "Implemented new features, developed backend APIs and frontend SPAs and more. Technologies: React, Django REST Framework, PostgreSQL",
    },
    
  ],
  skills: [
    "JavaScript",
    "React",
    "Python",
    "Django and Django REST Framework",
    "FastAPI",
    "Java",
    "Spring",
    "SQL",
  ],
  projects: [
    {
      title: "Department Management System",
      techStack: [
        "Side Project",
        "Spring",
        "MySQL",
        "Hibernate",
        "PostMan",
      ],
      description: "Designed and implemented a Spring Boot application for department management to improve my understanding in Spring Boot",

      link: {
        label: "consultly.com",
        href: "https://github.com/vadlamaniuday/springBoot",
      },
    },
    {
      title: "Sorting Visualizer",
      techStack: ["Side Project", "Javascript", "Bootstrap", "Chart.js", "HTML", "CSS"],
      description: [
        "Developed a sorting visualizer using Chart.js",
        "Implemented various sorting algorithms for visualization",
        "Designed a user-friendly interface with Bootstrap",
      ],

      link: {
        label: "sorting-algo-visualizer",
        href: "https://sorting-algo-visualizer-uday.netlify.app",
      },
    },
    {
      title: "Weather App",
      techStack: ["Side Project", "HTML", "Bootstrap", "JavaScript"],
      description:
      [
        "Integrated OpenWeatherMap APIs for accurate weather data",
        "Designed a user-friendly interface using Bootstrap",
      ],
      // logo: JarockiMeLogo,
      link: {
        label: "weather-app",
        href: "https://weather-app-uday.netlify.app",
      },
    },
    {
      title: "FavTunes",
      techStack: ["Side Project", "Python", "Django", "BootStrap", "PostgreSQL"],
      description:
      [
        "Implemented a Django based web application which allows users to add their favorite songs and artists",
        "Utilized Bootstrap for designing the UI",
        "Utilized PostgreSQL for storing the data",
      ],
        
      // logo: JarockiMeLogo,
      link: {
        label: "fav-tunes",
        href: "https://fav-tunes.vercel.app/",
      },
    },
   
  ],
} as const;
