//Imports
import "./MainPage.css"
import "../ProjectThumbnail/ProjectThumbnailTemplate.tsx"
import RRThumbnail from "../ProjectThumbnail/RRThumbnail.tsx";
import DFThumbnail from "../ProjectThumbnail/DFThumbnail.tsx";
import BrighamThumbnail from "../ProjectThumbnail/BrighamThumbnail.tsx";




export default function MainPage(){
    return(

        <div className={"backgroundMain"}>

            <p className={"header"}>Featured Work</p>
            <div className={"works"}>

                <RRThumbnail/>

                <DFThumbnail/>

                <BrighamThumbnail/>

            </div>
        </div>
    );
}