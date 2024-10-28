import ProjectThumbnailTemplate from "./ProjectThumbnailTemplate.tsx";


export default function DFThumbnail(){



    return(
        <ProjectThumbnailTemplate
            title = {"Dragon Fly"}
            summary = {"A custom ascii based game engine built from the ground up using C++. The engine was then used to create a complete game."}
            tools = {"C++"}
            role = {"Programmer"}
            imageURL = {"../assets/Thumbnails/DFThumbnail2.png"}
            id = {"DragonFly"}
            date={"January-Febuary 2024"}
        />
    );

}