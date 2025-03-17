// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: " #1ad7c0 ,rgb(255, 230, 40) ,rgb(252, 161, 161), #ecf0f1",
  firstName: "Afif",
  middleName: "",
  lastName: "Nahas",
  message: " Plumber of data scientists. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/plum-b",
    },
    // {
    //   image: "fa-facebook", 
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/afif-nahas-741a9921b/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/afif.jpg"),
  imageSize: 375,
  message:
    "My name is Afif. I am a Data Engineer and Dashboard Developer based in Lebanon. I work on cloud solutions such as GCP and AWS, developing robust data pipelines and transforming raw data into actionable insights. I also create compelling visuals with Power BI to help stakeholders drive informed decisions. As a data enthusiast, I continuously explore emerging trends and innovative techniques to enhance my expertise.",
  resume: "https://drive.google.com/file/d/1pFaR947ylxiOadbmFow8jcfROOe8UsCZ/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "plum-b", // Make sure this matches your GitHub username exactly
  reposLength: 0,  // Set to 0 to only show specific repos
  specificRepos: ["dbt-for-data-engineers-main", "apis-with-fastapi"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  images: [
    { 
      img: require("../editable-stuff/afif.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/afif.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

<<<<<<< HEAD
// SKILLS SECTION
const skills = {
  show: true,
  heading: "Tech Stack",
=======
// Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* <h2 className="text-4xl font-bold text-center text-white mb-8">Skills</h2> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img src="https://img.icons8.com/color/100/000000/sql.png" alt="SQL" className="mx-auto img-logo" />
            <p className="mt-4 text-xl">SQL</p>
          </div>
          <div className="text-center">
            <img src="https://img.icons8.com/color/100/000000/python.png" alt="Python" className="mx-auto img-logo" />
            <p className="mt-4 text-xl">Python</p>
          </div>
          <div className="text-center">
            <img src="https://img.icons8.com/color/100/000000/data-configuration.png" alt="ETL" className="mx-auto img-logo" />
            <p className="mt-4 text-xl">ETL Tools</p>
          </div>
          <div className="text-center">
            <img src="https://img.icons8.com/color/100/000000/cloud.png" alt="Cloud" className="mx-auto img-logo" />
            <p className="mt-4 text-xl">Cloud Platforms</p>
          </div>
        </div>
      </div>
    </section>
  );
>>>>>>> fc46d8157058a823fe3dc924d17133406bdc2ff7
};

export default Skills;


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

<<<<<<< HEAD
export { navBar, mainBody, about, repos, skills, getInTouch, experiences, leadership };
=======
export { navBar, mainBody, about, repos, leadership, getInTouch, experiences };
>>>>>>> fc46d8157058a823fe3dc924d17133406bdc2ff7
