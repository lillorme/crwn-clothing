import React from 'react';
import './CollectionPreview.css';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = (props:any) => {
    return (
      <div className="collection-preview">
          <h2>{props.collections.title}</h2>
          <div className="preview">
            {
                props.collections.items
                .filter((item:any, idx:number) => idx < 4)
                .map((item:any) => (
                    <CollectionItem key={item.id} Item={item}>{item.name}</CollectionItem>
                ))
            }
          </div>
      </div>
    );
    
}

export default CollectionPreview;
