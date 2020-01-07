import React from 'react';
import './collections.css';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../Component/CollectionItem/CollectionItem';

const Collections = (props:any) => {

    const { collection } = props;

    const { title, items } = collection;
    console.log(items);
    return(
        <div className="collection-page">
            <h1 className="title">{title}</h1>
            <div className="items">
                {
                    items.map((item: any) => 
                        <CollectionItem key={item.id} Item={item}/>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state:any, ownProps:any) => {
    return({
        collection: selectCollection(ownProps.match.params.categoryId)(state)
    })
};

export default connect(mapStateToProps)(Collections);