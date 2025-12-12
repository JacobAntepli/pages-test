//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import ProjectThumbnailTemplate from "./ProjectThumbnail/ProjectThumbnailTemplate.tsx";
import NavBar from "./NavBar/NavBar.tsx";
import MainPage from "./MainPage/MainPage.tsx";
import {
    createBrowserRouter, Outlet, RouterProvider,
} from "react-router-dom";
import RRPage from "./ProjectPages/RRPage.tsx";
import AllProjectsPage from "./AllProjectsPage/AllProjectsPage.tsx";
import AboutMe from "./AboutMePage/AboutMe.tsx";
import DFPage from "./ProjectPages/DFPage.tsx";
import BrighamPage from "./ProjectPages/BrighamPage.tsx";
import RubbishRumble from "./ProjectPages/RubbishRumble.tsx";

function App() {

    const router = createBrowserRouter([
        {
            children: [
                {
                    path: "/pages-test/",
                    element: (
                        <>

                            <MainPage/>
                            <Layout/>

                        </>
                    ),
                },

                {
                    path: "/pages-test/AllProjects",
                    element: (
                        <>

                            <AllProjectsPage/>
                            <Layout/>
                        </>
                    ),
                },
                {
                    path: "/pages-test/AboutMe",
                    element: (
                        <>

                            <AboutMe/>
                            <Layout/>
                        </>
                    ),
                },
                {
                    path: "/pages-test/RockOnRacoon",
                    element: (
                        <>

                            <RRPage/>
                            <Layout/>
                        </>
                    ),
                },
                {
                    path: "/pages-test/DragonFly",
                    element: (
                        <>

                            <DFPage/>
                            <Layout/>
                        </>
                    ),
                },
                {
                    path: "/pages-test/Brigham",
                    element: (
                        <>
                            <BrighamPage/>
                            <Layout/>
                        </>
                    ),
                },
                {
                    path: "/pages-test/Rubbish Rumble",
                    element: (
                        <>
                            <RubbishRumble/>
                            <Layout/>
                        </>
                    ),
                },
            ],
        },
    ]);
    return(
        <RouterProvider router={router}/>
    )
}

function Layout() {
    return(
      <>
          <NavBar/>
          <Outlet/>
      </>
    );

}
export default App
