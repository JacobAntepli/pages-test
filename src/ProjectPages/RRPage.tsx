//Imports
import ProjectPageTemplate from "./ProjectPageTemplate.tsx";
import "./ProjectPage.css";
import {CarouselItem} from "./CarouselItem.ts";
import LinkIcon from '@mui/icons-material/Link';
import {LinkItem} from "./LinkItem.ts";
import YouTubeIcon from '@mui/icons-material/YouTube';




export default function RRPage() {

    const links:LinkItem[] = [
        {
            linkUrl: "https://www.youtube.com/watch?v=ssWZExkMvnk",
            icon: <YouTubeIcon/>,
            text:"Trailer"
        },
        {
            linkUrl: "https://linkdaether.itch.io/rock-on-raccoon",
            icon: <LinkIcon/>,
            text:"Itch Page"
        },
    ];

    const items:CarouselItem[] = [
        {
            imgUrl: "../assets/ProjectsAssets/RR/RRTitlePage.jpg",

        },
        {
            imgUrl: "../assets/ProjectsAssets/RR/R1.png",

        },
        {
            imgUrl: "../assets/ProjectsAssets/RR/R2.png",

        },
        {
            imgUrl: "../assets/ProjectsAssets/RR/R3.png",

        },
    ];

    const contributions:string[] =["Reworked the entire level system to be modular as to be able to add new features.",
        "Built a custom battle system in which players could face off against any of the enemy bands they’ve beaten with any song from the stages they have beaten.",
        "Built a system to be able to equip various skins unlocked via getting a high enough rank on certain stages."];


    return (
        <ProjectPageTemplate
            title={"Rock on Racoon"}
            role= {"Programmer"}
            tools = {"C#, Unity"}
            teamSize = {"7 People"}
            timeframe = {"14 Weeks"}
            description = {"Rock on Racoon is a level based rhythm game where you play as a band of Racoons and try to take back your jam space from an enemy band. I worked on this as part of Mass Digi’s Digistudio, a program in which students from various universities work on mobile games developed from Mass Digi’s Summer Internship Program.  My team had 7 people in which I was one of three programmers. We would meet every week to discuss our progress " +
                "and any new ideas we wanted to implement into the game. Through this alongside consistent communication " +
                "and effort we managed to add the most new features and refinements to our game compared to the other Digistudio teams, " +
                "one of which included porting the game to work on PC and can be played through itch.io."}
            funFact= {"Orignally the main character, the lead singer of the racoon band, was just named Rocky. " +
                "When we made the full descriptors however I suggested he be named Rocky Road as a pun on ice cream. " +
                "This led to every single character in the game being named after some sort of food pun with all the racoons being based on ice cream."}
            carouselItems = {items}
            hue = {"hue-rotate(310deg)"}
            linkItems={links}
            contributions={contributions}
            date={"January-May 2025"}
            id={"RRP"}

            />
    );
 }