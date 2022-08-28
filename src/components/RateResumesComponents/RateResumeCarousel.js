import { Carousel } from "antd";
import { useEffect, useState } from "react";

const contentStyle = {
    height: '160px',
    color: '#fff',
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
        {resumes.map((resume)=>{
            {console.log(resume)}
          <div>
            <h3 style={contentStyle}>  
             <embed source={resume.filebase64} width="800px" height="2100px" />
             </h3>
          </div>
        })}
        </Carousel>
        
      );
      }
}