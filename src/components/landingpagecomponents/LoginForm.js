import { useState, useContext } from "react";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { firebaseConfig } from "./FirebaseConfig";
// import { app } from "./FirebaseConfig";

// const app = initializeApp(firebaseConfig);

import { data } from "../../App";
import '../css/logincss.css'


const LoginForm = () => {
  const navigate = useNavigate()
  const {  setLoggedin, setUserInfo, userInfo,setToken } = useContext(data);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 


  const connectAuth = () => {
    const app = initializeApp(firebaseConfig);
    //if all okay then set isLoggedIn to true
    return getAuth(app);
  };
  const handleGoogleLogin = async () => {
    const auth = await connectAuth();
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider).catch((err) =>
      alert(err)
    );
    if (user) {
      setLoggedin(true);
      setUserInfo(user.user.uid);
      localStorage.setItem('userId', user.user.uid)
      localStorage.setItem('accessToken', user.user.accessToken)
      setToken(user.user.accessToken)
      // console.log(user.user.accessToken)
      navigate('/')
    }
  };

  const handleLogin = async () => {
    const auth = await connectAuth();
    const user = await signInWithEmailAndPassword(auth, email, password).catch(
      (err) => alert(err)
    );
    if (user) {
      setLoggedin(true);
      setUserInfo(user.user.uid);
      localStorage.setItem('userId', user.user.uid)
      localStorage.setItem('accessToken', user.user.accessToken)
      // console.log(user.user.accessToken)
      navigate('/')
    }
  };

  const handleSignUp = async () => {
    //send email and password to firebase auth
    const app = initializeApp(firebaseConfig);
    //if all okay then set isLoggedIn to true
    const auth = getAuth(app);
    // set email and password to auth
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((err) => console.log(err.message));
    //if all okay
    if (user) console.log(user.user);
    setLoggedin(true);
    setUserInfo(user.user.uid);
    localStorage.setItem('userId', JSON.stringify(userInfo))
    localStorage.setItem('accessToken', user.user.accessToken)
    // console.log(user.user.accessToken)
    navigate('/')
  };

  return (
    <div id="wholelogin">
    <form onSubmit={(e) => e.preventDefault()}>
      <div id="loginforminputs">
      <label htmlFor="email">
        <div id="email-input">
        Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        </div>
 
      </label>
      <br />
     
      <label htmlFor="password">
      <div id="pass-input">
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="password"
        />
        </div>
      </label>
      </div>
      <br />
      <div id="loginbuttons">
      <button className="buttonlogin" onClick={handleLogin}>Login</button>
      <button className="buttonlogin" onClick={handleSignUp}>Sign Up</button>
      
      <button className="buttonlogin" onClick={handleGoogleLogin}>Sign in with google</button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
