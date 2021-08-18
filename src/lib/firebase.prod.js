import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase} from '../seed';


// we need to somehow seed the database

//we need to config here
const config = {
    apiKey: "AIzaSyBIdeoaLuimdhTW5OD1NtnxS8wd_HmScjU",
    authDomain: "netflix-clone-b10a7.firebaseapp.com",
    projectId: "netflix-clone-b10a7",
    storageBucket: "netflix-clone-b10a7.appspot.com",
    messagingSenderId: "191709760910",
    appId: "1:191709760910:web:b8d8a58441badc39a6a8df"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase};