// import pdf from "pdf-parse";
// const pdf = require('pdf-parse');
import { useContext } from "react";
import { useEffect } from "react";
import { data } from "../../App";
import Brain from "../Brain";
import NotLoggedInYet from "../NotLoggedInYet";


const ResUpload = () => {
  const { setFileBase64, filebase64 } = useContext(data);
  const { loggedIn, user, words , setWords, input ,setInput , output,setOutput } = useContext(data);
  
 
 
  
    useEffect(() => {
      fetch("https://final-api-mam.web.app/getresumes")
        .then((res) => res.json())
        .then((resumes) => {resumes.map(
          (resume)=>{
            if (resume.score){
            setInput((input)=>[...input,resume.words])
            setOutput((output)=>[...output,(resume.score/resume.responses)]) 
}
        })})
        .catch((err) => console.log(err));
    }, [setInput,setOutput]);

  



  const addRes = () => {
    //http://localhost:5050
    // https://final-api-mam.web.app
    fetch("https://final-api-mam.web.app/addresume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filebase64 }),
    })
      .then((res) => res.json())
      .then(data=>setWords(data))
      .catch((err) => console.log(err));
    setFileBase64("");
  };




  function formSubmit(e) {
    e.preventDefault();
    // Submit your form with the filebase64 as
    // one of your fields
    console.log({ filebase64 });
  }
 



  function convertFile(files) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev) => {
        // convert it to base64
        console.log(fileType);
        setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`);
        console.log(filebase64)
      };
    }
  }



  return (

    <>
    {words &&console.log(words.text.replaceAll(' ', ''))}
    {input!==[]&&console.log(input)}
    {output!==[]&&console.log(output)}
      {!loggedIn ? (
        <NotLoggedInYet />
      ) : (
        <>
          <br />
          <form onSubmit={formSubmit}>
            {console.log(user)}
            <input
              type="file"
              onChange={(e) => convertFile(e.target.files)}
              accept="application/pdf"
            />

            {filebase64 && <button onClick={addRes}>Submit</button>}
          </form>
          {filebase64.indexOf("application/pdf") > -1 && (
            <embed src={filebase64} width="800px" height="2100px" />
          )}{" "}
        </>
      )}
{input&&output&&<Brain input={input} output={output}/>}
    </>
  );
};

export default ResUpload;
