import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Login from "./components/Login";
import PostResume from "./components/PostResume";
import Navbar from "./components/Navbar";
import RateResume from "./components/RateResume";
import TopFive from "./components/TopFive";


export const data = createContext();

function App() {
  const [Loggedin, setLoggedin] = useState(false);

  return (
    <data.Provider value={{ Loggedin, setLoggedin }}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <About />
                <Login />
              </>
            }
          />
          <Route
            path="post"
            element={
              <>
                <Navbar />
                <br />
                <PostResume />
              </>
            }
          />
          <Route path='score' element={<><Navbar/><RateResume/></>}/>
          <Route path='topfive' element={<><Navbar/><TopFive/></>}/>
        </Routes>
      </BrowserRouter>
    </data.Provider>
  );
}

export default App;
