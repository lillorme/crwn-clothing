import React from 'react';
import './CollectionPreview.css';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = (props:any) => {
    console.log(props.collections.items);
    return (
      <div className="collection-preview">
          <h2>{props.collections.title}</h2>
          <div className="preview">
            {
                props.collections.items
                .filter((item:any, idx:number) => idx < 4)
                .map((item:any, i:number ) => (
                    <CollectionItem key={item.id} CollectionItem={item}>{item.name}</CollectionItem>
                ))
            }
          </div>
      </div>
    );
    
}

export default CollectionPreview;
