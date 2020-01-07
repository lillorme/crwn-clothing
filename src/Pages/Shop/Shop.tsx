import React from 'react';
import './Shop.css';
import CollectionOverview from '../../Component/CollectionOverview/CollectionOverview';
import {Route} from 'react-router-dom';
import Collections from '../collections/collections';


const Shop = (props: any) => {
 
  const { match } = props;

  return (
    <div className="Shop">
      
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={Collections} />

    </div>
  );

}

export default Shop;
