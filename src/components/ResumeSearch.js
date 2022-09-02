import { Button, Form, Input } from "antd"
import { useContext,useEffect, useState } from "react"
import { data } from "../App"
import NotLoggedInYet from "./NotLoggedInYet"

// import { data } from "../App"

const ResumeSearch=()=>{
 let {loggedIn} = useContext(data)
let [resumes,setResumes]=useState()
const [filebase64Array,setFileBase64Array]= useState([])
// const [resumeWords,setResumeWords]=useState([])
const [userQueryTitle,setUserQueryTitle]=useState()
const [userSkills,setUserSkills]=useState()
const [submitted,setSubmitted]=useState(false)
useEffect(() => {
    fetch("https://final-api-mam.web.app/getresumes")
      .then((res) => res.json())
      .then((data) => {
        setResumes(data);
        console.log(data)
      })
      .catch((err) => console.log(err));
  }, []);

const handleSubmit = ()=>{

resumes.map(resume=>{
    if (resume.words.includes(userSkills)){
        setFileBase64Array([...filebase64Array,resume.newRes.filebase64])
    }
})
setSubmitted(true)
}
       
    
    


    return (
        
        <>
        
        {!loggedIn?
        
        <NotLoggedInYet/>:(!submitted? 
        <>
        <Form onFinish={handleSubmit}>
            <Form.Item>
                <Input type="text" value={userSkills} onChange={(e)=>setUserSkills(e.target.value)}></Input>
                    {console.log(userSkills)}
            </Form.Item>
            { resumes? <Button type="primary" htmlType="submit">Search for resumes!</Button>:<h3>Please wait</h3> }
            </Form>
    
        </>
        
        :


        <>
        
        </>
        )}</>
    

)}
export default ResumeSearch