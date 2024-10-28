import ProjectThumbnailTemplate from "./ProjectThumbnailTemplate.tsx";


export default function BrighamThumbnail(){


    return(
        <ProjectThumbnailTemplate title={"Brigham Hospital"}
                                  summary={"A hospital website for Brigham and Women's Hospital with a fully functioning backend and hosted by AWS."}
                                  tools={"Typescript, Databases, Agile, AWS"}
                                  role={"Fullstack, Project Manager"}
                                  imageURL={"./assets/Thumbnails/BrighamThumbnail2.png"}
                                  id={"Brigham"}
                                  date={"March-May 2024"}/>
    );
}