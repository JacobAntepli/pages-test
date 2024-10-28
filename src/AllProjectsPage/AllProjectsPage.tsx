import RRThumbnail from "../ProjectThumbnail/RRThumbnail.tsx";
import "../MainPage/MainPage.css";
import DFThumbnail from "../ProjectThumbnail/DFThumbnail.tsx";
import BrighamThumbnail from "../ProjectThumbnail/BrighamThumbnail.tsx";

export default function AllProjectsPage(){
    return (
        <div className={'background'}>
            <p className={"header"}>
                All Projects
            </p>
            <div className={"works"}>
                <RRThumbnail/>

                <DFThumbnail/>

                <BrighamThumbnail/>

            </div>
        </div>
    );


}