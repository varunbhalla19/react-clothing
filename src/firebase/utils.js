import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBbeqrkPtBf23j8caq9lebM9A6ECDagc0w",
    authDomain: "react-clothing-862bc.firebaseapp.com",
    databaseURL: "https://react-clothing-862bc.firebaseio.com",
    projectId: "react-clothing-862bc",
    storageBucket: "react-clothing-862bc.appspot.com",
    messagingSenderId: "722339198391",
    appId: "1:722339198391:web:3aac128339c0f1ad852432"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ 'prompt': 'select_account' });

const signIn = () => {
    auth.signInWithPopup(provider)
        .then(user => {
            console.log('Signed In', user, user.user.displayName, user.user.uid);
            // letsCreateProfile(user.user);
        })
        .catch(er => console.log('Error while SignIn ', er, er.message));
}

const db = firebase.firestore();

const letsCreateProfile = (user, name = null) => {

    console.log('inside PD func');
    let { uid, displayName, email } = user;

    if (name) { displayName = name }

    let docRef = db.doc(`/Users/${uid}`) ; 

    return new Promise ( res => {

        docRef.get().then(docSnap => {
            if (!docSnap.exists) {
                docRef.set({
                    name: displayName,
                    email: email,
                    createdAt: new Date()
                }).then(_ => {
                    console.log('Done');
                    res(docRef) ;
                });
            } else {
                console.log('Already Exists in DB');
                res(docRef) ;
            }
        })
    
    } )
}



export { signIn, auth, letsCreateProfile }; 