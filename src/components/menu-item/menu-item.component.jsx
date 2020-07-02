import React from "react";
import "./menu-item.styles.scss";
function menuItem({title,imgUrl,size}){
    return (
        <div className={`  ${size} menu-item`}>
        <div style={{
            backgroundImage: `url(${imgUrl})`
        }} className="background-image"></div>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW </span>
        </div>
      </div>
    );
}

export default menuItem;