import React from "react";

const DescriptionWithLink = (props) => {
    return (
        <div>
            <p>{props.texto}</p>
            <br />
            <a href={props.link}>{props.link}</a>
        </div>
    )
}

export default DescriptionWithLink