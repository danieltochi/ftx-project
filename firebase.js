import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
            
const firebaseConfig = {
    apiKey: "AIzaSyBDw_OcHDfFGn6U9wjYZbhiYOUUzcvEhfg",
    authDomain: "project1-3c1ee.firebaseapp.com",
    projectId: "project1-3c1ee",
    storageBucket: "project1-3c1ee.appspot.com",
    messagingSenderId: "238265436757",
    appId: "1:238265436757:web:e7f51958f937dd1f0be2dc"
  };

  const app = initializeApp(firebaseConfig);

  import { getDatabase } from "firebase/database";


function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
    

    writeUserData("anderw", "awu", "myemail.com", "myimageurl");