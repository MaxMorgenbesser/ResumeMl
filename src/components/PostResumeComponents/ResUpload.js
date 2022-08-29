import { useContext } from "react"
import { data } from "../../App"


const ResUpload = ()=>{
const {setFileBase64,filebase64} = useContext(data)


const addRes = () => {
    fetch("https://final-api-mam.web.app/addresume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({filebase64}),
    })
      .then((res) => res.json())
      .then(data)
      .catch((err) => console.log(err));
      setFileBase64('')
  };


function formSubmit(e) {
    e.preventDefault();
    // Submit your form with the filebase64 as 
    // one of your fields
    console.log({filebase64})
}

function convertFile(files) {
    if (files) {
      const fileRef = files[0] || ""
      const fileType = fileRef.type || ""
      console.log("This file upload is of type:",fileType)
      const reader = new FileReader()
      reader.readAsBinaryString(fileRef)
      reader.onload=(ev) => {
        // convert it to base64
        console.log(fileType)
        setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
      }
    }
  }

    return (<>
    <br/>
   <form onSubmit={
    formSubmit
}>
   <input  type="file" onChange={(e)=> convertFile(e.target.files)}   accept="application/pdf" />
   <button onClick={ 
    addRes
  }>Submit</button>
    </form>
    {(filebase64.indexOf("application/pdf") > -1)  && 
             <embed src={filebase64} width="800px" height="2100px" />
             }
    </>)
}


export default ResUpload