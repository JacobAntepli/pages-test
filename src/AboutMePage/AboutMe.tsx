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
        <div className={'background'}>
            <div className={'aboutMeContainer'}>
                <div className={"header"}>
                    <p >About Me</p>
                </div>

                <img src={"./public/AboutMe/Head.png"} alt={"1"}/>

                <p className={"meText"}></p>


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