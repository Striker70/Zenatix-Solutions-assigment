import { useEffect, useState } from "react";
import "./Card.css";
import "../../api.js";

const Card = ({ info }) => {
  if (info) {
    let { name, id, sprites, types } = info;
    return (
      <div key={id} className="card-container">
        <div className="header-card">
          <h3 className="namePok">{name}</h3>
          <h5 className="dexnumber">#{id}</h5>
        </div>
        <div className="body-card">
          <img
            alt="img"
            className="poke-image"
            src={info ? sprites.front_default : ""}
          />
          <div className="type-container">
            {types &&
              types.map((item, index) => {
                let { type } = item;
                return (
                  <span key={index} className={`type ${type.name}`}>
                    {type.name}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
