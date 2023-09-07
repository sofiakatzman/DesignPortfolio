import React from "react";
import './Design.css'
import Technologies from '../Technologies/Technologies'


function Design(){
    return(
        <div className="design-categories">
            <button className="design-category">USER INTERFACE</button> <br/>
            <button className="design-category">DIGITAL</button> <br/>
            <button className="design-category">PRINT</button> <br/>
            <button className="design-category">PROJECTS</button> <br/>
            <button className="design-category">ILLUSTRATIONS</button> <br/>
            {/* <Technologies /> */}
        </div>
    )
}

export default Design