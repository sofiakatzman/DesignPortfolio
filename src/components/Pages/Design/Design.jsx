import React from "react";
import './Design.css'
import Technologies from '../Technologies/Technologies'
import { useNavigate } from "react-router-dom";


function Design(){
    const navigate = useNavigate()

    const onClickUI = () => navigate('/design/ui')



    return(
        <div className="design-categories">
            <button className="design-category" onClick={onClickUI}>USER INTERFACE</button> <br/>
            <button className="design-category">DIGITAL</button> <br/>
            <button className="design-category">PRINT</button> <br/>
            <button className="design-category">PROJECTS</button> <br/>
            <button className="design-category">ILLUSTRATIONS</button> <br/>
            {/* <Technologies /> */}
        </div>
    )
}

export default Design