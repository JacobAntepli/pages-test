import ProjectPageTemplate from "./ProjectPageTemplate.tsx";
import {LinkItem} from "./LinkItem.ts";
import {CarouselItem} from "./CarouselItem.ts";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function BrighamPage(){

    const links:LinkItem[] = [
        {
            linkUrl: "https://github.com/hanzalah416/Team-S-Production",
            icon:<GitHubIcon/>,
            text:"Github"
        },
    ];

    const items:CarouselItem[] = [
        {
            imgUrl: "B1",

        },
        {
            imgUrl: "B2",

        },
        {
            imgUrl: "B3",

        },
        {
            imgUrl: "B4",

        },
    ];

    const contributions:string[] =[
        "Led a team of 11 students in creating a massive project which required several sub teams with consistent communication",
        "Built a working A* pathfinding system for the hospital map which took into account stairs and elevators",
        "Created a system to display the path between two locations as text directions with an eta, total distance, and took into account where the person is facing",
        "Created a speech to text system which would read out the directions for the map. This system had settings to adjust accent, speed, and volume of the speech",
        "Created a system which allowed users to navigate the website only using their voice",
        "Created a system which allowed users to use the map with only their voice",
        "Created a system which allowed users to find the closest type of location, e.g bathroom or parking, using a legend on the map",
        "Created the frontend and backend for the sanitation services page",];

    return(

        <ProjectPageTemplate title={"Brigham Hospital"}
                             role={"Fullstack, Project Manager"}
                             tools={"Typescript, Agile, AWS"}
                             teamSize={"11 People"}
                             timeframe={"7 Weeks"}
                             description={"This website was made as part of my CS 3733 class and involved making a website for the Brigham and " +
                                 "Women's hospital in Massachusetts. The website contained: a map which utilized different path finding algorhithims to find your " +
                                 "way around, several services whose data was organized into a backend database, and a fully working account system using Auth0. " +
                                 "This project was meant to emulate a real life work environment and so we were " +
                                 "put into teams of 11 students meeting every weekday for stand ups and work time. I worked as both a fullstack engineer, mainly " +
                                 "focused on path finding algorithms for the websites map and as the project manager, organizing the ten other members. The website " +
                                 "was hosted on AWS for the duration of the course, however due to the limitations of the class it is no longer up."}
                             funFact={"Every team in the class was assigned a letter and had to make a team name which combined a color " +
                                 "and mythical creature whose names started with that letter. We were team S and called ourselves Serpentine Serpentine as it is both a color and a mythical creature."}
                             linkItems={links}
                             hue={"hue-rotate(71deg)"}
                             carouselItems={items}
                             contributions={contributions}
                             date={"March-May 2024"}
                             id={"BH"}
        />
    );
}