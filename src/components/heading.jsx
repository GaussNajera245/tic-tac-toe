import React from 'react'
// import './index.css';
// import '../index.css';


function Heading(){
    
    const today = new Date(2020,8,12,8).getHours();
    let g, col;
    
        if(today >= 0 && today < 12){
            g="Good Morning"
            col={color:"red"}
        }
        else if(today >= 12 && today < 18){
            g="Good Afternoon"
            col={color:"green"}
        }
        else if(today >= 18){
            g="Good Evening";
            col = {color:"blue"};
        }
    return (
        <div className="heading" >
            <h1 style={col} > {g}</h1>
        </div>
    )
}

export default Heading;

