import { Carousel } from "antd";
import { useEffect, useState } from "react";

const contentStyle = {
    height: '160px',
    color: 'blue',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


export default function RateResumeCarousel(){
    const [resumes,setResumes]=useState('')
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    
    useEffect(()=>{
        fetch('http://localhost:5050/getresumes')
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
           return( <div><embed src = {resume.filebase64} width="100%" height="2000px" style={contentStyle}/></div>)
        })}
    </Carousel>
        
      );
}else {
    return <h1>No resumes to rate at the moment </h1>
}


}
