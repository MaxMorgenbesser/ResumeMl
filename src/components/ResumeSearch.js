import { Button, Form, Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { data } from "../App";
import NotLoggedInYet from "./NotLoggedInYet";
// import { Carousel } from "antd";
import ResumeSearchCarousel from "./ResumeSearchComponents/ResumeSearchCarousel";
// import { data } from "../App"

const ResumeSearch = () => {
  let { loggedIn } = useContext(data);
  let [resumes, setResumes] = useState();
  const [filebase64Array, setFileBase64Array] = useState([]);
  // const [resumeWords,setResumeWords]=useState([])
  //   const [userQueryTitle, setUserQueryTitle] = useState();
  const [userSkills, setUserSkills] = useState();
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    fetch("https://final-api-mam.web.app/getresumes")
      .then((res) => res.json())
      .then((data) => {
        setResumes(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setSubmitted(true);
  }, [filebase64Array]);

  const handleSubmit = () => {
    const newArr = resumes.filter((resume) => {
      return resume.words.toUpperCase().includes(userSkills.toUpperCase());
    });
    setFileBase64Array(newArr);
  };

  return (
    <>
      {!loggedIn ? (
        <NotLoggedInYet />
      ) : (
        <Form onFinish={handleSubmit}>
          <Form.Item>
            <Input
              type="text"
              value={userSkills}
              onChange={(e) => setUserSkills(e.target.value)}
            ></Input>
            {console.log(userSkills)}
          </Form.Item>
          {resumes ? (
            <Button type="primary" htmlType="submit">
              Search for resumes!
            </Button>
          ) : (
            <h3>Please wait</h3>
          )}
        </Form>
      )}
      {submitted && <ResumeSearchCarousel filebase64Array={filebase64Array} />}
    </>
  );
};
export default ResumeSearch;
