import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import noteContent from "../notes.js";

function App() {
    return (
        <div>
            <div><Header title="Notes"/></div>
            <div>{noteContent.map( content => (<Note {...content} />))}</div>
            <div><Footer/></div>
        </div>
    )
}

export default App;