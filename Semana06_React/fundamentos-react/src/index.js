import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './components/Primeiro.jsx'
//import ComParametro from './components/ComParametro.jsx'

import ComFilhos from './components/ComFilhos.jsx'
import Card from './components/layout/Card.jsx'
import Primeiro from './components/Primeiro'

ReactDOM.render(
    <div>
        <Card titulo="Primeiro Componente">
            <Primeiro/>
        </Card>
        <Card titulo="Exercicio X">
            Conteudo
        </Card>
        
        {/**
         * <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
         */}
    {
        /*
        <Primeiro/>
        <ComParametro titulo="Esse é o título" subtitulo="esse é o subtitulo"/>
        <ComParametro titulo="Esse é o título 2" subtitulo="esse é o subtitulo 2"/>
        */
        }
    </div>,
    document.getElementById('root')
)