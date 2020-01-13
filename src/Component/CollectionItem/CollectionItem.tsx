import React from 'react';
import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-styles.styles';

const CollectionItem = (props:any) => {

    const {Item, addItem} = props;
    const {name, price, imageUrl} = Item;

    return (
      <CollectionItemContainer className="collection-item">
          <BackgroundImage 
          className="image"
          style = {{backgroundImage:`url(${imageUrl})`}}
          />
        
          <CollectionFooterContainer className="collection-footer">
            <NameContainer className="name">{name}</NameContainer>
            <PriceContainer className="price">{price}</PriceContainer>
          </CollectionFooterContainer>
          <AddButton onClick={() => addItem(Item)} inverted>Add To Cart</AddButton>
      </CollectionItemContainer>
    );
    
}

const mapDispatchToProps = (dispatch:any) => ({
  addItem: (item:any) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
