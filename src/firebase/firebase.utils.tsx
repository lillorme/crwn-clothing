import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsguC776f2h7BVCNUtRnNVf8Jt_znsPZQ",
    authDomain: "crwn-db-15c13.firebaseapp.com",
    databaseURL: "https://crwn-db-15c13.firebaseio.com",
    projectId: "crwn-db-15c13",
    storageBucket: "crwn-db-15c13.appspot.com",
    messagingSenderId: "417520452686",
    appId: "1:417520452686:web:ef6d41fe5a1d756a402f1f",
    measurementId: "G-R0F6TYBQMQ",
};

export const createUserProfileDocument = async (userAuth:any, additionalData:any) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShop = await userRef.get();

    if(!snapShop.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch (error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey:any, objectToAdd:any ) => {

    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectToAdd.forEach((obj:any) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();

}

export const convertCollectionsSnapshotToMap = (collections:any) => {
   
    const transformedCollection = collections.docs.map( (doc:any) => {
       
        const { title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator:any, collection:any) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;