import { useState } from "react";
import './App.css';
import React, {Component, createElement} from "react";
//import Person from './Person/Person';
import SwitchHandlerTest from "./SwitchHandlerTest/SwitchHandlerTest";
import {EXAMPLES} from "./data";
function App() {
    let [NewTopic, setNewTopic] = useState('choose the button');

    let inputData = (<div>Press the button</div>)
    if (NewTopic !== 'choose the button') {
        inputData =  (
            <div>
                <h3>{EXAMPLES[NewTopic].title}</h3>
                <p>{EXAMPLES[NewTopic].description}</p>
                <code>
                    {EXAMPLES[NewTopic].code}
                </code>
            </div>
        )
    }

    return (
        <div>
            <SwitchHandlerTest
                isSelected={(NewTopic === "components")}
                onSelected={() => {setNewTopic("components")}}
            >
                components
            </SwitchHandlerTest>
            <SwitchHandlerTest
                isSelected={(NewTopic === "jsx")}
                onSelected={() => {setNewTopic("jsx")}}
            >
                jsx
            </SwitchHandlerTest>
            <SwitchHandlerTest
                isSelected={(NewTopic === "props")}
                onSelected={() => {setNewTopic("props")}}
            >
                props
            </SwitchHandlerTest>
            {inputData}
        </div>
    )

}

export default App;
