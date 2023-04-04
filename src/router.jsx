import { createBrowserRouter} from "react-router-dom";

import { Home } from "./pages/Home";
import { WhyUs } from "./pages/WhyUs";
import { OurServices } from "./pages/OurServices";
import { ContactUs } from "./pages/ContactUs";
import * as React from "react";
import {Header} from "./components/Header.jsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/why-us",
                element: <WhyUs />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/our-services",
                element: <OurServices />
            },
        ]
    }
]);