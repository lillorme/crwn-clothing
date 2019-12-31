import React from 'react';
import './Shop.css';
import Collection from '../../Component/CollectionPreview/CollectionPreview';
import SHOP_DATA from './ShopData';

interface IProps {
  superhero: string;
}

interface Items{
  id: number,
  name: string,
  imageUrl: string,
  price: number
}
interface Collection{
  id: number,
  title: string,
  routeName: string,
  items:Items[]
}

interface IState{
  collections: Collection[]
}

class Shop extends React.Component <IProps, IState> {

  constructor(props: IProps){
    
    super(props);

    this.state = {
      collections: SHOP_DATA,
    }

  }
  
  render(){

    const {collections} = this.state;

    return (
      <div className="Shop">
          <h1>Shop Page</h1>

          {
            collections.map((collection, i) => (
              
              <Collection key={i} item-id={collection.id} title={collection.title} collections={collection}/>

            ))
          }
          
      </div>
    );
  }
}

export default Shop;
