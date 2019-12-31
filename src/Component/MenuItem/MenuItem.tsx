import React from 'react';
import './MenuItem.css';
import {Link, withRouter} from "react-router-dom";

const MenuItem = (props: any) => {
  
  const match = props.match;
  return (
    <div className={`${props.section.size} menu-item`} onClick={() => props.history.push(`${match.url}${props.section.linkUrl}`)}>
     
      <div className="background-image" style={{backgroundImage: `url(${props.section.imageUrl})`}} />
      <div className="content">
          <h2 className="title">{props.section.title}</h2>
          <span className="subtitle">Shop Now</span>
      </div> 
    </div>
  );
}

export default withRouter(MenuItem);
