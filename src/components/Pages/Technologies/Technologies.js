import React from "react"
import './Technologies.css'
import technologies from "./TechnologiesData"

function Technologies(){

    return (
        <div className="technologies">
            <h2 className="title">TECHNOLOGIES</h2>
            <div className="technologies-container">
                {technologies.map((tech, index) => (
                    <div key={index} className="technology">
                        <a href={tech.link}>
                            <img src={tech.logo} alt={tech.alt} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Technologies