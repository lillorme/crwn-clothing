import React from 'react';
import {CollectionPageContainer, CollectionTitle, CollectionItemsContainer} from './collection.styles';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../Component/CollectionItem/CollectionItem';
import { updateCollections } from '../../redux/shop/shop.action';

const Collections = (props:any) => {

    console.log(props);

    const { collection } = props;
    const { title, items } = collection;

    return(
        <CollectionPageContainer className="collection-page">
            <CollectionTitle className="title">{title}</CollectionTitle>
            <CollectionItemsContainer className="items">
                {
                    items.map((item: any) => 
                        <CollectionItem key={item.id} Item={item}/>
                    )
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state:any, ownProps:any) => ({
   
    collection: selectCollection(ownProps.match.params.categoryId)(state)
  
});

export default connect(mapStateToProps)(Collections);