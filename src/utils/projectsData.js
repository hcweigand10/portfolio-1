import BrowserPic from "../assets/images/details/browser-party/bp-startscreen.png"
import DoschRealty from "../assets/images/details/dosch-realty/dosch-home.png";
import SkyfallPic from "../assets/images/details/skyfall-travel/skyfall-home.png";

const projects = {
    browserParty: {
        title: "Browser Party",
        description:
            "Browser Party is fully browser-based multiplayer party game that allows users to compete and chat with each other in real time using socket.io and React. This project was a blast to make!",
        awards: "Best Functionality",
        liveUrl: "https://browser-party.herokuapp.com/",
        github: "https://github.com/kingnolds/Browser-Party",
        pic: BrowserPic, 
    },
    doschRealty: {
        title: "Dosch Realty",
        description:
            "React Website I built for Bradley Dosch, a Seattle-based realtor. Featues easy navigation, a built-in content manager to easily add and update blog posts, and connected sql database for  blogs and testimonials written by former clients.",
        awards: "",
        liveUrl: "https://profound-lollipop-4eb9d0.netlify.app/",
        github: "https://github.com/hcweigand10/fake-youtube",
        pic: DoschRealty,
    },
    skyfallTravel: {
        title: "Skyfall Travel",
        description:
            "Skyfall Travel was my first full-stack application. It utilizes a MYSQL database to enable users to plan, and save future trips to their account, including things like stops, dates, and budget breakdowns.",
        awards: "Best Overall and Best Functionality",
        liveUrl: "https://skyfall-travel.herokuapp.com/",
        github: "https://github.com/hcweigand10/SkyFall-Travel",
        pic: SkyfallPic,
    },
};

export default projects;
