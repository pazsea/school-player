import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyB439cux7TUefb0brEzWAke68OOQU9knXA',
  authDomain: 'kyhplayer.firebaseapp.com',
  databaseURL: 'https://kyhplayer.firebaseio.com',
  projectId: 'kyhplayer',
  storageBucket: 'kyhplayer.appspot.com',
  messagingSenderId: '751303324824',
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  videos = () => this.db.ref('videos');
}

export default Firebase;
