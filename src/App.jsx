import React from "react";
import Primeiro from "./components/Primeiro.jsx";
import ComParametro from "./components/ComParametro.jsx";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/Layout/Card.jsx";
import App from "./app.css";

export default (props) => (

    <div className="App"> 
        <Card titulo = "Primeiro componente">
             <Primeiro />
        </Card>        

        <Card titulo = "exercicio">
            Conteudo
        </Card>
        
        <Card titulo = "Componentes com filhos"> 
         <ComFilhos>
            <ul>
                <li>Pedro  </li>
                <li>Sousa</li>
                <li>Coelho</li>
                <li>Pedrao</li>
                <li>pega na minha mao</li>
            </ul>        
        </ComFilhos>  
        </Card>

       <Primeiro/>

       <Card titulo = "componente com parametro">
        <ComParametro titulo="esse cara e foda" subtitulo="esse cara e mais foda ainda"/>
        </Card>

    </div>
)