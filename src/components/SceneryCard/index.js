import React from "react";
import "./style.css";

const SceneryCard = (props) => (
<div className="card">
      <div className="img-container" value={props.id} onClick={() => props.clickHandler(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>

)
 
export default SceneryCard;
