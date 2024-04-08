import React from 'react';
import './MandoStyle.css';

const Mando = (props) => {
    const { letraa,fileBase64,letrab,letrac,letrad,letrae,letraf,letrag,letrah,letrai,colorf,colorb,cajar,border,colorboton,colorletra,tamano } = props; 
    console.log(fileBase64);
     
    return(
    <div>
        <div id="appBg" style={{borderColor: colorb}}>
            <form value={props.Files} id="calculatorId" name="calculator" style={{ backgroundColor: colorf, backgroundImage: 'url("data:image/png;base64,'+ fileBase64 +'")', backgroundSize : "100% 100%" }}>
                <input type="textfield" name="input" autocomplete="off" readonly  style={{backgroundColor: cajar, borderColor: border}}/>
                
                    <div id="fila1">
                    <input id="button" value={letraa} style={{backgroundColor: colorboton, color: colorletra, fontSize: tamano}} contenteditable="true"/>
                    <input id="button" value={letrab} style={{backgroundColor: colorboton, color: colorletra, fontSize: tamano}}/>
                    <input id="button" value={letrac} style={{backgroundColor: colorboton, color: colorletra, fontSize: tamano}}/>
                    </div> 
                    <div id="fila2">
                    <input id="button" value={letrad} style={{backgroundColor: colorboton, color: colorletra, fontSize: tamano}}/>
                    <input id="button" value={letrae} style={{backgroundColor: colorboton, color: colorletra, fontSize: tamano}}/>
                    <input id="button" value={letraf} style={{backgroundColor: colorboton, color: colorletra, fontSize: tamano}}/>
                    </div>
                    <div id="fila3">
                    <input id="button" value={letrag} style={{backgroundColor: colorboton, color: colorletra, fontSize: tamano}}/>
                    <input id="button" value={letrah} style={{backgroundColor: colorboton, color: colorletra, fontSize: tamano}}/>
                    <input id="button" value={letrai} style={{backgroundColor: colorboton, color: colorletra, fontSize: tamano}}/>
                    </div>

            </form>
        </div>
    </div>
    );
}

export default Mando;