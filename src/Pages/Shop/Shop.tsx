import React from 'react';
import './Shop.css';
import CollectionOverview from '../../Component/CollectionOverview/CollectionOverview';
import {Route} from 'react-router-dom';
import Collections from '../collections/collections';
import {connect} from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import collections from '../collections/collections';
import { updateCollections } from '../../redux/shop/shop.action';
import WithSpinner from '../../Component/WithSpinner/WithSpinner';

interface Props{
  match:any,
  updateCollections:any,
}

const CollectionOverviewWithSpinner = () => {
  return WithSpinner(CollectionOverview);
}
  
const CollectionPageWithSpinner = () => {
  return WithSpinner(Collections);
}

class Shop extends React.Component<Props> {

  state = {
    loading : true
  };

  unsubscribeFroSnapshot:any = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFroSnapshot = collectionRef.onSnapshot( async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({loading: false});
    });
  }
 
  render(){

    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="Shop">
        
          <Route 
            exact 
            path={`${match.path}`} 
            render={(props:any) => (

              <CollectionOverviewWithSpinner isloading={loading} {...props}/>

            )} 
          />

          <Route 
            path={`${match.path}/:categoryId`} 
            render={(props:any) => (

              <CollectionPageWithSpinner isloading={loading} {...props}/>

            )} 
          />

      </div>
    );
  }

}

const mapDispatchToProps = (dispatch:any) => ({
  updateCollections: (collectionsMap:any) => dispatch(updateCollections(collectionsMap))
});

export default connect( null, mapDispatchToProps )(Shop);
