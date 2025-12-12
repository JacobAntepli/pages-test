import ProjectPageTemplate from "./ProjectPageTemplate.tsx";
import {LinkItem} from "./LinkItem.ts";
import {CarouselItem} from "./CarouselItem.ts";
//import LinkIcon from "@mui/icons-material/Link";


export default function RubbishRumble(){

    const links:LinkItem[] = [

    ];

    const items:CarouselItem[] = [
        {
            imgUrl: "./assets/ProjectsAssets/RubbishRumble/T_SplashStart_01.PNG",
        },
    ];

    const contributions:string[] =[
        "Was team lead of a group of 7 other students to create a game in Unreal Engine in 7 weeks",
        "Created a base projectile system allowing for easy creation of new items in the game",
        "Created an animation blue print for the main character allowing for animation blending",
        "Implemented all animations for the player and projectiles",
        "Implemented a majority of the items in the game itself",
        "Was the go to helper for tech issues for the rest of my team, ",
        "Was in charge of creating a pipeline for builds and ensured ensured builds were smooth for Alpha and Beta presentations",
        "Created all particle effects in the game using Unreals Niagra system "];

    return(

        <ProjectPageTemplate title={"Rubbish Rumble"}
                             role={"Team Lead, Programmer,VFX"}
                             tools={"Unreal,Blueprints,  Animations,Particle Effects"}
                             teamSize={"8 People"}
                             timeframe={"7 Weeks"}
                             description={"A party game for up to 4 people in which players are raccoons fighting over the title of Junk Tsar." +
                                 "This was everyone on the teams first time using Unreal which presented a series of challenges especially" +
                                 " when it came to version control. Because of Unreals blueprint system no file could be modified at the same time" +
                                 ", to ensure that a merge conflict never happened not only did my team use excellent communication but also kept and up" +
                                 "to date spreadsheet with which files were being used by who. This made it so that we had zero major merge conflict issues throughout the entire project." +
                                 " Overall we were able to create a really fun party game in just 7 weeks filled with tons of items, effects, and polish all while learning to use a new engine."}
                             funFact={"In early concept art we wanted the winner of the game to rewarded with a burger king crown but that was cut due to time."}
                             linkItems={links}
                             hue={"hue-rotate(71deg)"}
                             carouselItems={items}
                             contributions={contributions}
                             date={"October-December 2025"}
                             id={"RB"}
        />
    );
}