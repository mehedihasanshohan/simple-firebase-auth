import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase.init";


const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    console.log('clicked');
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })
  }


  return(
    <div>
      <h2>Shohan</h2>
      <button onClick={handleGoogleSignIn}>Google Login</button>
    </div>
  )
}

export default Login