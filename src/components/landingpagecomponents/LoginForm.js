import { useState,useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { firebaseConfig } from "./FirebaseConfig";
import { app } from "./FirebaseConfig";

// const app = initializeApp(firebaseConfig);

import { data } from "../../App";

const LoginForm= () => {
  const {loggedIn, setLoggedin} = useContext(data)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


  const connectAuth = () =>{
      const app = initializeApp(firebaseConfig);
      //if all okay then set isLoggedIn to true
      return getAuth(app)
  }
  const handleGoogleLogin = async () => {
      const auth = await connectAuth()
      const provider = new GoogleAuthProvider()
      const user = await signInWithPopup(auth,provider)
      .catch(err => alert(err))
      if (user){
          console.log(user.user)
          setLoggedin(true)
      }
  }
  
  const handleLogin = async () =>{
      const auth = await connectAuth()
      const user = await signInWithEmailAndPassword(auth,email,password)
     .catch(err=>alert(err))
      if (user){ 
          console.log(user.user)
          setLoggedin(true)}
  }
  
  
  
  
    const handleSignUp = async () => {
      //send email and password to firebase auth
      const app = initializeApp(firebaseConfig);
      //if all okay then set isLoggedIn to true
      const auth = getAuth(app)
  // set email and password to auth
  const user = await createUserWithEmailAndPassword(auth,email,password)
  .catch(err=>alert(err.message))
  //if all okay
      if (user)
      {setLoggedin(true)}
    };
  
  
  
    return (
      <form onSubmit={e=>e.preventDefault()}>
        <label htmlFor="email">
          Email:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="you@there.com"
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="password"
          />
        </label>
        <br />
        <button onClick={handleLogin}>Login</button>&nbsp;
        <button onClick={handleSignUp}>Sign Up</button>
        <br />
        <button onClick={handleGoogleLogin}>Sign in with google</button>
      </form>
  
    );
  };
  
  export default LoginForm;