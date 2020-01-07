import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('WBZchwtkRCT08S3l4zQC').collection('cartItems').doc('ebY4fQu7RyNQJVU2isFa');

firestore.doc('/users/WBZchwtkRCT08S3l4zQC/cartItems/ebY4fQu7RyNQJVU2isFa');

firestore.collection('/users/WBZchwtkRCT08S3l4zQC/cartItems');