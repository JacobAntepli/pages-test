import "./ProjectThumbnailTemplate.css"
import { Link } from "react-router-dom";


export default function ProjectThumbnailTemplate(props:{
    title: string,
    summary:string,
    tools:string,
    role:string,
    imageURL: string,
    id:string,
    date: string}){

    return(
        <Link to={"/pages-test/"+props.id}>

            <div className={"book"}>
                <img src={"./assets/ProjectsAssets/gl2.png"} className={"bookGold"} alt={"bookgold"}/>
                <img src={"./assets/ProjectsAssets/bl4.png"} className={"bookCover"}  id={props.id} alt={"bookCover"}/>
                <div className={"topSection"}>
                    <p className={"titleText"}>{props.title}</p>
                    <img className={"thumbnail"} src={props.imageURL} alt={"Title"}/>
                    <p className={"toolsText"}>{props.tools}</p>
                </div>
                <div className={"bottomSection"}>
                    <p className={"summaryHeader"}>Summary:</p>
                    <p className={"summaryText"}>{props.summary}</p>

                    <p className={"dateHeader"}>Date:</p>
                    <p className={"dateText"}>{props.date}</p>

                    <p className={"roleHeader"}>Role:</p>
                    <p className={"roleText"}>{props.role}</p>
                </div>
            </div>
        </Link>


    );
}


