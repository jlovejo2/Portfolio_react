const portfolioObject = [
  {
    imgLink: "assets/images/House_Share.png",
    appLink: "https://consilience-jlovejo2.herokuapp.com",
    title: "Home Share App",
    functionalPreview: "",
    description: "",
    tech: [
      "graphql",
      "typescript",
      "apollo-graphql",
      "react",
      "stripe",
      "google-api",
      "mongodb",
      "heroku",
      "ant-design",
      "cloudinary",
      "nodejs",
      "cookie-parser",
    ],
  },
  {
    imgLink: "assets/images/Consilience.png",
    appLink: "https://consilience-jlovejo2.herokuapp.com",
    title: "Consilience",
    functionalPreview: "",
    description:
      'Consilience is the principle that evidence from independent, unrelated sources can "converge" on strong conclusions. This platform exists to allow user to registered as "Teachers" or "Students." Both can search the classes listed and request to join them. Each class a user joins will be generated on their dashboard and one can "enter the classroom." The teacher has a gradebook option which allows them to create assignments and provide each student a grade for them. This app also has pretty extension security that is detailed towards the bottom of the README. Essentially we used JSON Web Tokens (JWTs) to create authorization keys that are set to expire in 24 hours. Upon logging out the user is provide with a new JWT with a lifetime of 1 milisecond',
    tech: [
      "React",
      "Javascript",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "Material-UI",
      "Axios",
      "User-Authentication",
      "JSON Web Tokens",
      "Cookie-Parser",
    ],
  },
  {
    imgLink: "./assets/images/nutridish.png",
    appLink: "https://nutridish.herokuapp.com",
    title: "Nutridish",
    functionalPreview: "./assets/gifs/nutridish.gif",
    description:
      "The purpose of this app is for the user to either login or create an account.  Once that has been done they can search for recipes based on nutrient and diet selection.  These recipes can be saved in their account and referenced for later use.",
    tech: [
      "React",
      "JavaScript",
      "SQL",
      "sequelize",
      "Node.js",
      "Handlebars",
      "user-authentication",
      "Bootstrap",
      "Edamam API",
    ],
  },
  {
    imgLink: "assets/images/TeamHtml.png",
    appLink: "https://github.com/jlovejo2/Team-Generator",
    title: "Team Generator",
    functionalPreview: "assets/gifs/team-generator.gif",
    description:
      "The purpose of this app is for the user to create a quick an easy html to easiliy reference the team members contact info.",
    tech: ["JavaScript", "Node.js", "Inquirer", "Jest", "Bootstrap"],
  },
  {
    imgLink: "assets/images/searchApp.jpeg",
    appLink: "https://jlovejo2.github.io/Multi-Media-Search-App/",
    title: "Multi Media Search App",
    functionalPreview: "assets/gifs/multi-media-search.gif",
    description:
      "The purpose of this app is to search for books, games, and movies based on the same keyword or title.",
    tech: [
      "JavaScript",
      "jQuery",
      "Materialize",
      "OMDB API",
      "Google Books API",
      "RAWG API",
    ],
  },
  {
    imgLink: "assets/images/trivia_quiz.jpg",
    appLink: "https://jlovejo2.github.io/Trivia_quiz/",
    title: "Trivia Quiz",
    functionalPreview: "assets/gifs/trivia-quiz.gif",
    description:
      "This app is a coding trivia quiz.  It generates the questions one at a time with a score being based on a timer that begins to run as soon as the quiz is started. Seconds are added for a correct answer and subtracted for an incorrect answer.",
    tech: ["JavaScript", "jQuery", "Bootstrap"],
  },
  {
    imgLink: "assets/images/weather_image.png",
    appLink: "https://jlovejo2.github.io/Weather_Dashboard/",
    title: "Weather Dashboard",
    functionalPreview: "",
    description:
      "This is a weather dashboard app that will display the current weather as well as a five day forecast based on a location search.  Past searches are stored in the browser for ease of reference.",
    tech: ["Javascript", "jQuery", "Bootstrap"],
  },
  {
    imgLink: "assets/images/calendar.jpg",
    appLink: "https://jlovejo2.github.io/Word-Day-Calendar/",
    title: "Work Day Calendar",
    functionalPreview: "assets/gifs/work-day-calendar.gif",
    description:
      "This is a calendar to keep track of events and tasks during the work day.  The calendar is dynamic and shows the current hour block in green, with past hour blocks in grey.",
    tech: ["JavaScript", "jQuery", "moment.js", "Bootstrap"],
  },
  {
    imgLink: "assets/images/password.jpg",
    appLink: "https://jlovejo2.github.io/Password_Generator/",
    title: "Password Generator",
    functionalPreview: "",
    description:
      "This is website that will generate a password based on the desired criteria by user.  User specifies the length and whether they want numbers, uppercase and lowercase letters, and special characters in their password.",
    tech: ["Javascript", "jQuery", "Bootstrap"],
  },
];

export default portfolioObject;
