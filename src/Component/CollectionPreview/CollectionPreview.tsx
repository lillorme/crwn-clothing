import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = (props:any) => {
    return (
      <CollectionPreviewContainer className="collection-preview">
          <TitleContainer>{props.collections.title}</TitleContainer>
          <PreviewContainer className="preview">
            {
                props.collections.items
                .filter((item:any, idx:number) => idx < 4)
                .map((item:any) => (
                    <CollectionItem key={item.id} Item={item}>{item.name}</CollectionItem>
                ))
            }
          </PreviewContainer>
      </CollectionPreviewContainer>
    );
    
}

export default CollectionPreview;
