import "./AboutMe.css";
import {createTheme, ThemeProvider} from "@mui/material";
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




export default function AboutMe() {

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Garamond',
                'sans-serif',
            ].join(','),
        },
    });

    return (
        <div className={'backgroundAbout'}>
            <img src={"./assets/GeneralAssets/Background.png"} alt={"Background"} className={"backgroundProj"}/>
            <div className={'aboutMeContainer'}>
                <div className={"headerAbout"}>
                    <p>About Me</p>
                </div>
                <div className={"headShotContainer"}>
                    <img src={"./assets/AboutMe/Head.png"} className={"headShot"} alt={"Head"}/>
                </div>
                <div className={"aDescription"}>
                <p className={"aDescriptionText"}>Hey there! I’m Jacob, a programmer with passion for games from North Carolina.
                    Currently I'm a student at Worcester Polytechnic Institute with a double major in CS and Interactive Media and Game Design.
                    In my free time you can usually find me reading or cooking up a storm.
                    I learned to cook from my Turkish mother when I was kid and my goal is to one day even be half as good as she is.</p>
                </div>


                <p className={"headerSmall"}>Contact Me</p>
                <div className={"iconBarAboutMe"}>

                    <ThemeProvider theme={theme}>
                        <Button startIcon={<EmailIcon/>}

                                variant="contained"
                                onClick={() => {
                                    navigator.clipboard.writeText("Anteplijacob@gmail.com")
                                        .then(() => {
                                            alert("Email copied to clipboard!");
                                        })
                                        .catch(err => {
                                            console.error("Failed to copy: ", err);
                                        });
                                }}>
                            Anteplijacob@gmail.com
                        </Button>

                        <Button startIcon={<LinkedInIcon/>}
                                variant="contained"
                                onClick={() => window.open("https://www.linkedin.com/in/jacob-antepli-582845264?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B61LiyYrWQ3mtRdZvbIZDog%3D%3D", "_blank")}>
                            My LinkedIn

                        </Button>


                    </ThemeProvider>
                </div>

            </div>
        </div>
    );

}