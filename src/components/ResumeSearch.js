import { Button, Form, Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { data } from "../App";

import '../components/css/searchstyles.css'
// import { Carousel } from "antd";
import ResumeSearchCarousel from "./ResumeSearchComponents/ResumeSearchCarousel";
// import { data } from "../App"

const ResumeSearch = () => {
  let { loggedIn } = useContext(data);
  let [resumes, setResumes] = useState();
  let [level, setLevel] = useState();
  const [filebase64Array, setFileBase64Array] = useState([]);
  // const [resumeWords,setResumeWords]=useState([])
  //   const [userQueryTitle, setUserQueryTitle] = useState();
  const [userSkills, setUserSkills] = useState();
  const [searchTerms, setSearchTerms] = useState();
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    fetch("https://final-api-mam.web.app/getresumes")
      .then((res) => res.json())
      .then((data) => {
        setResumes(data);
       
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   setSubmitted(true);
  // }, [filebase64Array]);

  // useEffect(() => {
  //   setUserSkills(searchTerms);
  // }, []);


  const handleSubmit = () => {
    // setUserSkills(searchTerms)

    const newArr = resumes.filter((resume) => {
    
      return resume.words.replaceAll(" ","").toUpperCase().includes(userSkills.replaceAll(" ", '').toUpperCase()) ;
    });
    setFileBase64Array( newArr );
    setSubmitted(true)
  };


  return (
    <div className="searchSectionContainer">
      {submitted ? (
        <></>
      ) : (
       
        <Form onFinish={()=>handleSubmit()} id="searchform">
          <div className="searchTextContainer">
          <h1 id="searchtitle">Resu-mii Search</h1>
          <br />
          <Form.Item>
            <h2><b>Enter the skills you are looking for</b></h2>
            <br />
            <Input 
              id="searchbar"
              type="text"
              value={userSkills}
              onChange={(e) => setUserSkills(e.target.value)}
            ></Input>
            <br />
          <h3>Are you looking for a person that is Entry-Level, Mid-Level, or Senior?</h3>
          </Form.Item>
          </div>
          <Form.Item 
          
          >
      
            <div className="levelbuttonsContainer">
            <Button onClick={()=>setLevel('Entry-Level')} className="levelbuttons">
              Entry-Level
            </Button>
            <Button onClick={()=>setLevel('Mid-Level')} className="levelbuttons">
              Mid-Level
            </Button>
            <Button onClick={()=>setLevel('Senior')} className="levelbuttons">
              Senior
            </Button>
            </div>
          </Form.Item>
          {resumes? (
            <div className="submitButtonContainer">
            <Button type="primary" htmlType="submit" id="searchbutton">
              Search for resumes!
            </Button>
            </div>
          ) : (
            <h3>Please wait</h3>
          )}
        </Form>
      )}
      {submitted && filebase64Array && <ResumeSearchCarousel filebase64Array={filebase64Array} setSubmitted={setSubmitted} level={level}  submitted={submitted} setFileBase64Array={setFileBase64Array}/>}
    </div>
  );
};
export default ResumeSearch;
