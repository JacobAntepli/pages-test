//imports
import "./ProjectPage.css";
import "../NavBar/NavBar.css"
import Carousel from 'react-material-ui-carousel'
import {createTheme, ThemeProvider} from '@mui/material'
import {CarouselItem} from "./CarouselItem.ts";
import {LinkItem} from "./LinkItem.ts";
import Button from "@mui/material/Button";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


//import {useNavigate} from "react-router-dom";


interface ContributionProps {
    item: string;
}

interface LinkItemProps {
    item: LinkItem;
}

interface CarouselItemProps {
    item: CarouselItem;
}


export default function ProjectPageTemplate(props:{
    title:string,
    role:string,
    tools:string,
    teamSize:string,
    timeframe:string,
    description:string,
    funFact:string,
    linkItems:LinkItem[],
    hue:string,
    carouselItems:CarouselItem[],
    contributions:string[],
    date:string,
    id:string
}){


    return(
        <div className={"container"} id={props.id}>
            <img src={"./assets/GeneralAssets/Background.png"} alt={"Background"} className={"backgroundProj"} style={{filter: props.hue}}/>
            <div className={"project"}>

                <div className={"ribbon"}>
                    <p className={"ribbonTextHeader"}>Role:
                        <p className={"ribbonText"}>{props.role}</p>
                    </p>


                    <p className={"ribbonTextHeader"}>Tools:
                        <p className={"ribbonText"}>{props.tools}</p>
                    </p>


                    <p className={"ribbonTextHeader"}>Team Size:
                        <p className={"ribbonText"}>{props.teamSize}</p>
                    </p>


                    <p className={"ribbonTextHeader"}>Time Frame:
                        <p className={"ribbonText"}>{props.timeframe}</p>
                    </p>

                    <p className={"ribbonTextHeader"}>Dates:
                        <p className={"ribbonText"}>{props.date}</p>
                    </p>

                </div>
                <div className={"titleAndDes"}>
                    <p className={"pTitle"}>{props.title}
                        <p className={"pDescription"}>{props.description}</p>
                    </p>


                    <p className={"contributionsHeader"}>Contributions/Accomplishments:</p>

                    <List className={"contributionText"}>
                        {
                            props.contributions.map((item, i) => <Contributions key={i} item={item}/>)
                        }
                    </List>

                </div>



                <div className={"thirdColumn"}>
                    <div className={"carousel"}>
                        <Carousel autoPlay={true} animation={"fade"} navButtonsAlwaysVisible={true}>
                            {
                                props.carouselItems.map((item, i) => <Item key={i} item={item}/>)
                            }
                        </Carousel>
                    </div>


                    <div className={"funFactSection"}>
                        <p className={"funFactHeader"}>Fun Fact:</p>
                        <p className={"funFact"}>{props.funFact}</p>
                    </div>

                    <div className={"linkBar"}>
                        {
                            props.linkItems.map((item, i) => <LinkItemButton key={i} item={item}/>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

function Contributions(props: ContributionProps) {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Garamond',
                'sans-serif',
            ].join(','),
            fontSize: 20
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <ListItem dense={true}>
                <ListItemText primary={"- " + props.item}/>
            </ListItem>
        </ThemeProvider>
    );
}

function LinkItemButton(props: LinkItemProps) {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Garamond',
                'sans-serif',
            ].join(','),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Button startIcon={props.item.icon}
                    className={"linkButton"}
                    variant="contained"
                    onClick={() => window.open(props.item.linkUrl, "_blank")}>
                {props.item.text}
            </Button>
        </ThemeProvider>
    );
}

function Item(props: CarouselItemProps) {
    return (
        <img  src={props.item.imgUrl} className={"images"}  alt={"Image"} />
    );
}


