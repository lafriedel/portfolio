import compound from "./assets/Compound.png";
import tippr from "./assets/tippr.png";
import stylogue from "./assets/Stylogue.png";
import trainingBot from "./assets/TrainingBot.png";

const projects = [
  {
    id: 0,
    title: "Training Bot",
    role: "Full-Stack Developer",
    technologies: "React, React Router, Redux, Node, Express",
    description:
      "Training Bot is an app that allows training managers to send employees automated messages on scheduled intervals.",
    marketingImage: trainingBot,
    projectURL: "https://www.trainingbot.co",
    githubRepo: "https://github.com/training-bot"
  },
  {
    id: 1,
    title: "tippr",
    role: "Front-End React Architect",
    technologies: "React, React Router, Redux, Styled Components",
    description:
      "tippr is a digital tipping app designed to deliver tips directly from guest to worker.",
    marketingImage: tippr,
    projectURL: "https://justin-tippr.netlify.com/",
    githubRepo: "https://github.com/tippr-application/tippr-frontend-leigh-ann"
  },
  {
    id: 2,
    title: "Compound",
    role: "UI Developer",
    technologies: "CSS, Styled Components",
    description:
      "Compound is a simple web application to help Lambda School students visualize their expected income growth over time, compared to their income before attending Lambda.",
    marketingImage: compound,
    projectURL: "https://compound.careers/",
    githubRepo:
      "https://github.com/LambdaWinter19Hackathon-Calculator/Hackathon_Income_Calculator"
  },
  {
    id: 3,
    title: "Stylogue",
    role: "UI Developer",
    technologies: "HTML5, CSS3, Javascript",
    description:
      "Stylogue is an online portfolio application for cosplay stylists and cosplayers to connect and collaborate. Stylists can display their work, and cosplayers can like and comment on stylists' photos.",
    marketingImage: stylogue,
    projectURL: "http://carlosv.me/hair-care-landing-page/index.html",
    githubRepo: "https://github.com/cornielleandres/hair-care-landing-page"
  }
];

export default projects;
