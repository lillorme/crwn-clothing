import React from 'react';
import Home from './Pages/Home/HomePage';
import {Route, Switch, Redirect} from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Checkout from './Pages/Checkout/Checkout';
import './App.css';
import Header from './Component/Header/Header';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp';
import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';
import collections from './Pages/collections/collections';

interface Props{
  setCurrentUser:any,
  currentUser:any,
  collectionsArray:any
}

class App extends React.Component<Props> {


  unsubscribeFromAuth:any = null;

  componentDidMount(){

    
    const { setCurrentUser, collectionsArray  } = this.props;
 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef:any = await createUserProfileDocument(userAuth, '');

        userRef.onSnapshot((snapShot: any) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        
      }
      
      setCurrentUser(userAuth);
      //addCollectionAndDocuments('collections', collectionsArray);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render(){

    const { currentUser} = this.props;
    
    return (

      <div>
        <Header/>
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route path = '/shop' component={Shop} />
          <Route exact path = '/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Switch>
      </div>
  
    )

  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch:any) => ({
  setCurrentUser: (user:any) => dispatch(setCurrentUser(user))
});

export default connect( mapStateToProps, mapDispatchToProps )(App);
