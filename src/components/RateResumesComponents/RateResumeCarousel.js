import { Carousel } from "antd";
import { useEffect, useState } from "react";
import './RateResumeCss.css'
const contentStyle = {
    height: '1600px',
    lineHeight: '160px',
    color: 'blue',
    textAlign: 'center',
    background: '#364d79',
    
  };


export default function RateResumeCarousel(){
    const [resumes,setResumes]=useState('')
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    
    useEffect(()=>{
        fetch('https://final-api-mam.web.app/getresumes')
        .then(res=>res.json())
        .then(data=>{
            setResumes(data)
            console.log(data)
        })
        .catch(err=>console.log(err))
    },[])
     

      if (resumes){
    console.log(resumes)
      return (
        <Carousel afterChange={onChange}>
        {resumes.map(resume=>{
           return( <div key={resume._id}><embed src = {resume.filebase64} width="100%" height="200px" style={contentStyle}/></div>)
        })}
    </Carousel>
        
      );
}else {
    return <h1>No resumes to rate at the moment </h1>
}


}