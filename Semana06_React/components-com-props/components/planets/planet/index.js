import React from "react";
import DescriptionWithLink from "../../DescriptionWithLink";
import GrayImg from "../../shared/gray-img";
import './style.css'

//função anonima
const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <DescriptionWithLink texto={props.texto} link={props.link}/>
            <GrayImg img_url={props.img_url} />
        </div>
    )
}

export default Planet