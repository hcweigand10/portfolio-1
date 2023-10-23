import bpstartscreen from "../assets/images/details/browser-party/bp-startscreen.png";
import bpmemory from "../assets/images/details/browser-party/bp-memory.png";
import bpscoreboard from "../assets/images/details/browser-party/bp-scoreboard.png";
import bptrivia from "../assets/images/details/browser-party/bp-trivia.png";
import bpwhack from "../assets/images/details/browser-party/bp-whack.png";
import bppregame from "../assets/images/details/browser-party/bp-pregame.png";
import doschhome from "../assets/images/details/dosch-realty/dosch-home.png";
import doschblog from "../assets/images/details/dosch-realty/BlogBrad.png";
import doschblogpost from "../assets/images/details/dosch-realty/dosch-blogpost.png";
import doschreviews from "../assets/images/details/dosch-realty/ReviewsBrad.png";
import doschadmin from "../assets/images/details/dosch-realty/AdminDashboardBrad.png";
import peterhome from "../assets/images/details/strasser-music/peter-home.png";
import peterabout from "../assets/images/details/strasser-music/peter-about.png";
import peterportal from "../assets/images/details/strasser-music/peter-studentportal.png";
import peteradmin from "../assets/images/details/strasser-music/peter-admin.png";
import geoguess from "../assets/images/details/geoquizzer/geoquizzer-guess-here.png";
import geoscore from "../assets/images/details/geoquizzer/geoquizzer-score.png";
import geostats from "../assets/images/details/geoquizzer/geoquizzer-stats.png";
import quizhome from "../assets/images/details/quiz-quo-pro/quizhome.png"
import quiztest from "../assets/images/details/quiz-quo-pro/quiztest.png"
import quizview from "../assets/images/details/quiz-quo-pro/quizview.png"
import appleservice from "../assets/images/details/apple-a-day/appleservice.png"
import appleshift from "../assets/images/details/apple-a-day/appleshift.png"
import applecustomer from "../assets/images/details/apple-a-day/applecustomer.png"

const projects = [
  {
    title: "Quiz Quo Pro",
    hook: "A quizlet-inspired flashcards app to improve or test your knowledge",
    description:
      "Create your own sets or try your hand at others'. Once you think you have the terms down, take on 'test' mode and see where you end up on the leaderboard! <br> <br> The site is easy and fun to navigate, as well as allowing for your own custom animal avatar",
    awards: [],
    liveUrl: "https://flashcards-pro.netlify.app/",
    feGithub: "https://github.com/hcweigand10/quizlet-free",
    beGithub: "https://github.com/hcweigand10/quizlet-back",
    socketGithub: "https://github.com/hcweigand10/Browser-Party-Socket-io",
    pics: [
      {
        src: quizhome,
        heading: "Home Screen",
        caption: "Welcome to Quiz Quo Pro",
      },
      {
        src: quizview,
        heading: "Deck View",
        caption:
          "View cards and highscores or choose to begin learning or testing",
      },
      {
        src: quiztest,
        heading: "Test",
        caption: "Race to answer all prompts as fast as possible to earn a spot on the leaderboard",
      },
    ],
    thumbnail: quizhome,
    tech: ["React", "Javascript", "Node", "Exress", "MongoDB", "GraphQL"],
  },
  {
    title: "Apple A Day Cafe",
    hook: "Complete POS for Seattle-based food bank",
    description:
      "Alongside their traditional pantry, University District food bank is opening a cafe to serve hot meals to those in need. <br> <br> This app will enable them to track customer orders and shift data, empowering them to make more informed decisions on what food items their patrons prefer.",
    awards: [],
    liveUrl: "https://apple-a-day-cafe.netlify.app/",
    feGithub: "https://github.com/Rufasa85/apple-a-day-pos",
    beGithub: "https://github.com/Rufasa85/apple-a-day-pos-back",
    socketGithub: null,
    pics: [
      {
        src: appleservice,
        heading: "Service Screen",
        caption: "Add items to today's shift, find a customer, or take a new order",
      },
      {
        src: appleshift,
        heading: "Shift Report",
        caption:
          "View specific orders and an item breakdown from previous shifts",
      },
      {
        src: applecustomer,
        heading: "Customer Report",
        caption: "While orders don't need to have a customer to be submitted, you can track those that do",
      },
    ],
    thumbnail: appleservice,
    tech: ["React", "Javascript", "Node", "Exress", "MySQL", "REST API"],
  },
  {
    title: "Geoquizzer",
    hook: "A population guessing daily challenge for friends and family to flex their global knowledge!",
    description:
      "GeoQuizzer fulfilled my goal of creating a game that challenged users on their knowledge of geography and world populations. It's simple, but was a really fun project to flex my react and typescript skills, as well as play around with some new npm packages. <br> <br> To play, simply visit the site and take a guess at today's country! After having played a few days, you can compare your stats with friends or just learn what countries you need to read about a little bit more.",
    awards: [],
    liveUrl: "https://geoquizzer.netlify.app/",
    feGithub: "https://github.com/hcweigand10/population-guesser",
    beGithub: null,
    socketGithub: null,
    pics: [
      {
        src: geoguess,
        heading: "Home Page",
        caption: "Take a stab at the population of Argentina!",
      },
      {
        src: geoscore,
        heading: "Results",
        caption: "After guessing, recieve your score out of 100",
      },
      {
        src: geostats,
        heading: "Stats",
        caption:
          "View your stats and compare with friends to see who's better at GeoQuizer",
      },
    ],
    thumbnail: geoguess,
    tech: [
      "React",
      "React Query",
      "UseContext",
      "Typescript",
      "Globe.gl",
      "Tailwind",
    ],
  },
  {
    title: "Browser Party",
    hook: "A browser-based multiplayer party game that lets friends play against each in real time!",
    description:
      "I've always loved video games, and have aspired on and off to create a game ever since my first CS class in undergrad. The absurd popularity of simple games like Among Us or even Wordle has proven that the actual gameplay isn't always what draws us in to a game, but rather, it's the ability to connect with friends while playing. With this in mind, I set out to make a mobile-friendly party game that prioritzed player connection. <br> <br> Browser Party ultilizes socket.io to connect your group to a specific 'room', from which our socket.io server manages the game progression. So while each round's minigame is ran client side, each player's websocket is listening for events from the server that control the rounds and the data displayed on the scoreboard. <br> <br> Our end result is something I'm extremely proud of; a simple, easy to use party game that literally anyone can play in a matter of seconds.",
    awards: ["Best Functionality"],
    liveUrl: "https://browserparty.netlify.app/",
    feGithub: "https://github.com/hcweigand10/Browser-Party-Frontend",
    beGithub: "https://github.com/hcweigand10/Browser-Party-Backend",
    socketGithub: null,
    pics: [
      {
        src: bpstartscreen,
        heading: "Start Screen",
        caption: "Players can either host a new lobby or join existing",
      },
      {
        src: bppregame,
        heading: "Pregame Lobby",
        caption:
          "Players can chat with others while the host configures the game settings",
      },
      {
        src: bptrivia,
        heading: "Round 1: Trivia",
        caption: "Questions pulled from trivia API",
      },
      {
        src: bpwhack,
        heading: "Round 2: Whack-a-Mole",
        caption: "Whack the moles!",
      },
      {
        src: bpmemory,
        heading: "Round 3: Memory",
        caption: "Find as many pairs as possible before the time runs out",
      },
      {
        src: bpscoreboard,
        heading: "Scoreboard",
        caption:
          "Scores are updated and displayed after each round and at the end of the game",
      },
    ],
    thumbnail: bpstartscreen,
    tech: ["Socket.io", "React", "Javascript", "Node", "Exress", "MongoDB"],
  },
  {
    title: "Bradley Dosch Realty",
    hook: "A personal website for Seattle-based real estate agent, Bradley Dosch, featuring a blog and dynamic Zillow reviews",
    description:
      "Post-bootcamp, this was my first solo project and opportunity to build something practical outside the scope of a virtual classroom. Bradley asked me to make him a multi-use website that he could use to promote both his brand and his real estate career, which aligned perfectly with skills I wanted to work more on. <br> <br> To start off, I went for a simple design concept and separate pages for each of his goals. Additionally, I created a landing page that quickly displayed who he was and then directed visitors to other content on the site. The blog page was mostly straightforward while the reviews page had to pull data from a Zillow API. Because reviews can easily be faked online, I made sure to replicate Zillow's styling to look authentic and also provide a link Bradley's actual Zillow profile. <br> <br> Finally, I created a secure admin dashboard for Bradley to add new blog posts and select which one should be 'featured' on the main site. While storing long strings of text in a SQL database is less than ideal, I was able to create a painless experience for the admin to create new posts with custom thumbnails, subtitles, and embedded images.",
    awards: [],
    liveUrl: "https://bradleydosch.com/",
    feGithub: "https://github.com/hcweigand10/brad-realty",
    beGithub: "https://github.com/hcweigand10/brad-realty-backend",
    socketGithub: null,
    pics: [
      {
        src: doschblog,
        heading: "Blog Page",
        caption: "Displays a featured blog up top with older blogs below",
      },
      {
        src: doschblogpost,
        heading: "Blog Post",
        caption: "Blogs can have embedded pictures within each artice",
      },
      {
        src: doschreviews,
        heading: "Reviews Page",
        caption: "Data pulled from Zillow API",
      },
      {
        src: doschadmin,
        heading: "Admin Dashboard",
        caption:
          "One-stop-shop for Bradley to update, create, and edit his blogs",
      },
    ],
    thumbnail: doschhome,
    tech: ["React", "Javascript", "MySQL", "Node", "Express"],
  },
  {
    title: "Peter Strasser Music",
    hook: "A web-app built for a Seattle-based music instructor that moves the payment and scheduling experiences for both students and the instructor online",
    description:
      "This project has been perhaps the most exciting for me to work on. Peter Strasser, a local music instructor, asked me to create a web application from which he could manage his student roster and students could log in to pay their balance and/or schedule their next lesson. This meant I would have to integrate both a secure database to store real student information and a Stripe checkout component. <br> <br> During development, I opted for MongoDB, which is a NoSQL database program, for data storage and react-bootstrap for the admin dashboard tools. Stripe's documentation made implementing a secure payment option fairly straightforward, and react-bootstrap also aided in ensuring that every part of the site is mobile friendly. <br> <br> Overall, this project was focused on delivering a complete solution to my client's needs, and in doing so I gained a wealth of experience in working with react-based full stack applications",
    awards: [],
    liveUrl: "https://peter-strasser.netlify.app/",
    feGithub: "https://github.com/hcweigand10/peter-music",
    beGithub: "https://github.com/hcweigand10/peter-music-backend",
    socketGithub: null,
    pics: [
      {
        src: peterhome,
        heading: "Landing Page",
        caption: "Making a positive first impression is important!",
      },
      {
        src: peterabout,
        heading: "About Section",
        caption:
          "Info on Peter's background displayed immediately below the landing",
      },
      {
        src: peterportal,
        heading: "Student Portal",
        caption:
          "Once logged in, students can pay off their balance and schedule their next appointment",
      },
      {
        src: peteradmin,
        heading: "Admin Dashboard",
        caption:
          "On Peter's side of things, he can update and edit his student roster",
      },
    ],
    thumbnail: peterhome,
    tech: [
      "React",
      "React Query",
      "Javascript",
      "MongoDB",
      "MaterialUI",
      "Node",
      "Express",
    ],
  },
  
];

export default projects;
