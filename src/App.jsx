import './App.css'

import * as React from "react";
import {Router} from "./router.jsx";
import {RouterProvider} from "react-router-dom";

function App() {
    return (
        <RouterProvider router={Router}/>
    )
}

export default App
