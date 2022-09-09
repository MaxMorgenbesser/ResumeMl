import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
// import Login from "./components/Login";
import PostResume from "./components/PostResume";
import Navbar from "./components/Navbar";
import RateResume from "./components/RateResume";
import ResumeSearch from "./components/ResumeSearch";
import Footer from "./components/Footer";

export const data = createContext();

function App() {
  const [loggedIn, setLoggedin] = useState(false);
  const [filebase64, setFileBase64] = useState("");
  const [userInfo, setUserInfo] = useState(
    "" || localStorage.getItem("userId")
  );
  const [token,setToken]=useState(localStorage.getItem("accessToken"))
  const [words, setWords] = useState(null);
  const [id, setID] = useState("");
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState([]);

 


  
  return (
    <data.Provider
      value={{
        token,
        setToken,
        input,
        setWords,
        words,
        setInput,
        output,
        setOutput,
        loggedIn,
        setLoggedin,
        setFileBase64,
        filebase64,
        userInfo,
        setUserInfo,
        id,
        setID,
      }}
    >
      
      <BrowserRouter>
      
        <Routes>
          {!userInfo&& 
          <Route
            index
            element={
              <div id="body-wrapper">
             
                <About />
        
              </div>
                
            }
          />
}
          {userInfo && (
            <>
              <Route
                index
                element={
                  <>
                    <Navbar />
                   
                    <PostResume />
                  </>
                }
              />
              <Route
                path="score"
                element={
                  <>
                    <Navbar />
                    <RateResume />
                  </>
                }
              />
              <Route
                path="research"
                element={
                  <>
                    <Navbar />
                    <ResumeSearch />
                  </>
                }
              />
            </>
          )}
        </Routes>
        
      </BrowserRouter>
      <Footer />
    
    </data.Provider>
  );
}

export default App;
