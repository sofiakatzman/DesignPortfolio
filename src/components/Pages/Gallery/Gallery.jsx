import React from "react";
import './Gallery.css'
import { useNavigate } from "react-router-dom";


function Gallery(){
    const navigate = useNavigate()

    const onClickUI = () => navigate('/design/ui')
    const onClickClientProjects = () => navigate('/design/clientprojects')
    const onClickDigital = () => navigate('/design/digital')


    return(
        <div className="design-categories">
            <button className="design-category" onClick={onClickUI}>USER INTERFACE</button> <br/>
            <button className="design-category" onClick={onClickDigital}>DIGITAL</button> <br/>
            {/* <button className="design-category">PRINT</button> <br/> */}
            <button className="design-category" onClick={onClickClientProjects}>CLIENT PROJECTS</button> <br/>
            {/* <button className="design-category">ILLUSTRATIONS</button> <br/> */}
            {/* <Technologies /> */}
        </div>
    )
}

export default Gallery