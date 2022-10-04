import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Primeiro from "./components/Primeiro.jsx";
import ComParametro from "./components/ComParametro.jsx";

ReactDOM.render(
    <div> 
        <Primeiro titulo1="teste" subtitulo1="teste2"/>
        <ComParametro titulo="esse cara e foda" subtitulo="esse cara e mais foda ainda"/>
    </div>,
    document.getElementById('root')
)