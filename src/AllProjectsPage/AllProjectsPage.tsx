import RRThumbnail from "../ProjectThumbnail/RRThumbnail.tsx";
import "../MainPage/MainPage.css";
import DFThumbnail from "../ProjectThumbnail/DFThumbnail.tsx";
import BrighamThumbnail from "../ProjectThumbnail/BrighamThumbnail.tsx";
import RubbishRumbleThumbnail from "../ProjectThumbnail/RubbishRumbleThumbnail.tsx";

export default function AllProjectsPage(){
    return (
        <div className={'backgroundMain'}>
            <p className={"header"}>
                All Projects
            </p>
            <div  className={"works2"}>
            <div className={"works"}>
                <RRThumbnail/>

                <DFThumbnail/>

                <RubbishRumbleThumbnail/>


            </div>
            <div className={"works"}>
                <BrighamThumbnail/>

            </div>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    );


}