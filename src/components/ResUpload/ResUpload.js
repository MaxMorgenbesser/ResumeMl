import { useContext } from "react"
import { data } from "../../App"

const ResUpload = ()=>{
const {setFileBase64,fileBase64} = useContext(data)

function formSubmit(e) {
    e.preventDefault();
    // Submit your form with the filebase64 as 
    // one of your fields
    console.log({fileBase64})
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
    
   <form onSubmit={formSubmit}>
   <input type="file" onChange={(e)=> convertFile(e.target.files)}   accept="application/pdf" />
   <button>Submit</button>
    </form></>)
}

export default ResUpload