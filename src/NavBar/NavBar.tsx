

import "./NavBar.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import SummarizeIcon from '@mui/icons-material/Summarize';
import HouseIcon from '@mui/icons-material/House';
import {useNavigate} from "react-router-dom";
import {MouseEvent} from "react";

//import NavBarBackdrop from "../../src/assets/NavBarAssets/NavBarBackdrop.png";
//import NavBarBackdrop from "../../src/assets/NavBarAssets/NavBarBackdrop.svg";
export default function NavBar(){

    const navigate = useNavigate();

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        const id = e.currentTarget.id;
        navigate(id);
    }



    return(
        <div className={"navBarBand"}>
            <div className={"navbarBackDrop"}>
                <div>
                    <p className={"name"}> Jacob Antepli
                        <p className={"title"}>Programmer & Fullstack Engineer</p>
                    </p>
                </div>

                <div>
                    <Stack spacing={1} direction={"row"} className={"iconBar"}>
                        <Button className={"alignIcons"} onClick={handleClick} id={"/pages-test/"} >
                            <HouseIcon className={"icons"}/>
                            <p className={"buttonText"}>
                                Home
                            </p>
                        </Button>
                        <Button className={"alignIcons"} onClick={handleClick} id={"/pages-test/AboutMe"}>
                            <PersonIcon className={"icons"}/>
                            <p className={"buttonText"} >
                                About Me
                            </p>
                        </Button>
                        <Button className={"alignIcons"} onClick={handleClick} id={"/pages-test/AllProjects"}>
                            <SummarizeIcon className={"icons"}/>
                            <p className={"buttonText"} >
                                Projects
                            </p>
                        </Button>
                    </Stack>

                </div>




            </div>
        </div>
    );

}
