import React from 'react';
import './CollectionItem.css';
import Button from '../Form/Button/Button';
import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = (props:any) => {

    const {Item, addItem} = props;
    const {name, price, imageUrl} = Item;

    return (
      <div className="collection-item">
          <div 
          className="image"
          style = {{backgroundImage:`url(${imageUrl})`}}
          />
        
          <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
          </div>
          <Button onClick={() => addItem(Item)} inverted>Add To Cart</Button>
      </div>
    );
    
}

const mapDispatchToProps = (dispatch:any) => ({
  addItem: (item:any) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
