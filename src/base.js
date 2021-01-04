import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCXw5Bmhb4KGO0Qj7n0tmlyMRbgcrOz-eM',
	authDomain: 'catch-of-the-day-lalaane.firebaseapp.com',
	databaseURL: 'https://catch-of-the-day-lalaane-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;
