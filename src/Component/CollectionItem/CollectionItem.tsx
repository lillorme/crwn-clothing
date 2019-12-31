import React from 'react';
import './CollectionItem.css';

const CollectionItem = (props:any) => {
    console.log(props.CollectionItem);
    return (
      <div className="collection-item">
          <div 
          className="image"
          style = {{backgroundImage:`url(${props.CollectionItem.imageUrl})`}}
          />
        
          <div className="collection-footer">
            <span className="name">{props.CollectionItem.name}</span>
            <span className="price">{props.CollectionItem.price}</span>
          </div>
      </div>
    );
    
}

export default CollectionItem;
