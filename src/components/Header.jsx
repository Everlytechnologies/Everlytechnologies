import {Navbar} from "./Navbar.jsx";
import {Outlet} from "react-router-dom";
import * as React from "react";

export const Header = () =>{
    return (
    <>
        <Navbar/>
        <Outlet/>
    </>
    )
}