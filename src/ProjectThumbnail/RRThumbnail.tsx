import ProjectThumbnailTemplate from "./ProjectThumbnailTemplate.tsx";


export default function RRThumbnail(){

    return(
        <ProjectThumbnailTemplate
            title = {"Rock on Racoon"}
            summary = {"An animal themed rhythm game made as part of Mass Digi’s Digistudio alongside students from various other universities. "}
            tools = {"C#, Unity"}
            role = {"Programmer"}
            imageURL = {"src/assets/ProjectsAssets/RR/RRThumbNail.PNG"}
            id = {"RockOnRacoon"}
            date={"January - May 2024"}
        />
    );

}