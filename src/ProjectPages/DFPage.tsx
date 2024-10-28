import ProjectPageTemplate from "./ProjectPageTemplate.tsx";
import {LinkItem} from "./LinkItem.ts";
import {CarouselItem} from "./CarouselItem.ts";
import GitHubIcon from '@mui/icons-material/GitHub';


export default function DFPage(){

    const links:LinkItem[] = [
        {
            linkUrl: "https://github.com/JacobAntepli/DragonFlyDev",
            icon:<GitHubIcon/>,
            text:"Github"
        },
    ];

    const items:CarouselItem[] = [
        {
            imgUrl: "DFThumbnail",
        },
        {
            imgUrl: "DF1",
        },
        {
            imgUrl: "DF2",
        },
        {
            imgUrl: "DF3",
        },


    ];

    const contributions:string[] =["Created a fully functioning game engine in C++",
        "Added additional features such as a console logging system to accurately describe errors",
        "Built a complete game using the engine I had made",
        "Converted the engine into a library to be able to create and export games",
        "Programmed the movement and level system for Alphabet Soup"];


    return (
        <ProjectPageTemplate
            title={"Dragon Fly"}
            role= {"Programmer"}
            tools = {"C++"}
            teamSize = {"2 People"}
            timeframe = {"7 Weeks"}
            description = {"Dragonfly is an ascii based game engine built as part of my IMGD 3000 class. While we were given a guide on what was required for the engine " +
                "the actual implementation was left to the students. This meant building the game engine from almost entirely scratch using C++. This meant understanding " +
                "how the computer handles inputs and frames, correctly using memory to make the engine efficient and even how to create a system to catch and log errors. " +
                "At the end of the project we were tasked with building a game using the engine we made in groups of two. The game my team went with was called Alphabet Soup, " +
                "a game where you start as the letter A and try to catch letters thrown at you from different sides of the map. The game is arcade style and once you complete the " +
                "alphabet the letters begin to get faster. Collecting them in the wrong order causes you to lose a life. We then had to turn the engine into a library so that the game " +
                "can be played as an application."}
            funFact= {"The original concept for the game were going to make was a font based fighting game in which different fonts had different abilities."}
            carouselItems = {items}
            hue = {"hue-rotate(180deg)"}
            linkItems={links}
            contributions={contributions}
            date={"January-May 2025"}
            id={"DF"}

        />
    );
}