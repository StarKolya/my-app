import React from "react";
import './Person.css'
function Randomizer(max) {
    return Math.floor(Math.random()*(max+1))
}
let names = ["Kolya", "Masha", "Anna", "Tim", "Elena"]
function Person(props) {
    return (
        <div className="Person">
            <div className="Header">Hi, I'm {names[Randomizer(4)]}</div>
            <div className="Description">I'm {props.age} years old</div>
            <input type="text" onChange={props.change} className="Input"/>
        </div>
    )
}

export default Person