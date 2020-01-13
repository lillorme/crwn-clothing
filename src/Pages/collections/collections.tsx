import React from 'react';
import {CollectionPageContainer, CollectionTitle, CollectionItemsContainer} from './collection.styles';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../Component/CollectionItem/CollectionItem';

const Collections = (props:any) => {

    const { collection } = props;

    const { title, items } = collection;
    console.log(items);
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

const mapStateToProps = (props:any) => {
    console.log(props);
    const {ownProps, state } = props;
    return({
        collection: selectCollection(ownProps.match.params.categoryId)(state)
    })
};

export default connect(mapStateToProps)(Collections);