// NAME : Mohammed Qaasim Desai
// Student No. 0776412

import React, {useState} from "react";

export default function MyCompenent(){
    
    const [temp, setCount]  = useState(0);
    const [conTemp, setValue]  = useState(0);
    const [tempVal, setVal] = useState("Fahrenheit");
    const [atmos, setAtmos] = useState("Auto Mode");


    function convertTemp(){
        if (tempVal === "Fahrenheit"){
            setValue(temp*1.8+32)
        }

        if (tempVal === "Celsius"){
            setValue((temp-32)*0.5556)
        }
    }

    return(
        <div>
            <h1><center>Mohammed Qaasim Desai - ( Assignment 1 )</center></h1>
            <hr></hr>

            <h2><center>Temprature Calculator</center></h2>
            <h3><center>{temp}</center></h3>
            <h3><center>The Temprature is: {conTemp} {tempVal}</center></h3>
            <center>
            <button onClick={()=>{setCount(temp+5)}}>+</button>&nbsp;
            <button onClick={()=>{setCount(temp-5)}}>-</button>
            </center><br/>
            <center>
                <button onClick={()=>{(setVal("Fahrenheit"))}}>Fahrenheit</button>
                <button onClick={()=>{(setVal("Celsius"))}}>Celsius</button>
                <p>Convert to <strong>{tempVal}</strong> <button onClick={()=>{convertTemp()}}>Convert</button></p>
            </center><br/>
            <hr></hr>

            <center>
     &nbsp; <button onClick={()=>{setAtmos("Cold")}}>Set To COLD</button> &nbsp;
            <button onClick={()=>{setAtmos("Heat")}}>Set To HEAT</button> &nbsp;
            <button onClick={()=>{setAtmos("Auto Mode")}}>Set To AUTO MODE</button>
            <h3>&nbsp;<i>Temprature is Set to: </i> <strong>{atmos}</strong></h3>
            </center>
        </div>
    )
}