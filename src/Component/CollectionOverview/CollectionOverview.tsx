import React from 'react';
import shopReducer  from '../../redux/shop/shop.reducer'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../Component/CollectionPreview/CollectionPreview';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionOverview = (props:any) => {

    console.log(props);

    const {  collections } = props;

    return(

        <CollectionsOverviewContainer className='collection-overview'>
            <h1>Shop Page</h1>
            {
                collections.map((collection:any, i:number) => (
                    
                    <CollectionPreview key={i} item-id={collection.id} title={collection.title} collections={collection}/>

                ))
            }
        
        </CollectionsOverviewContainer>

    )

}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);