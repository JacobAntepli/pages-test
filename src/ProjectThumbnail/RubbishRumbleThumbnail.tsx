import ProjectThumbnailTemplate from "./ProjectThumbnailTemplate.tsx";


export default function RubbishRumbleThumbnail(){

    return(
        <ProjectThumbnailTemplate
            title = {"Rubbish Rumble"}
            summary = {"A party game where raccoons fight over the title of Junk Tsar made as part of my IMGD 4000 class"}
            tools = {"Unreal, Blueprints, VFX"}
            role = {"Team lead, programmer"}
            imageURL = {"./assets/ProjectsAssets/RubbishRumble/T_SplashStart_01.PNG"}
            id = {"Rubbish Rumble"}
            date={"October - December 2025"}
        />
    );

}