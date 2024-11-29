import { Route, Routes, BrowserRouter, Link } from "react-router";
import React from "react";
import StartUp from "./StartUp";
const App = () => {
    return(
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <h1>test</h1>
                        <Route path="/" element={<StartUp/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App