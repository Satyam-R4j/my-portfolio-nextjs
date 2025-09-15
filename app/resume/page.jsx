"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiPostman
} from "react-icons/si";

const about = {
  title:"About me",
  description:"I am a Computer Science Engineer passionate about technology, problem-solving, and innovation, focused on building efficient solutions and exploring the latest in software and technology."
  ,
  info:[
    {
      fieldName: "Name",
      fieldValue:"Satyam Raj"
    },

    {
      fieldName: "Experience",
      fieldValue:"2+ years"
    },
    {
      fieldName: "Nationality",
      fieldValue:"Indian"
    },
    {
      fieldName: "Email",
      fieldValue:"satyamraj418@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue:"Available"
    },
    {
      fieldName: "Language",
      fieldValue:"English, Hindi"
    },
  ]
}

const experience = {
  icons:'/public/assets/assets/resume/badge.svg'
  ,title:"My experience"
  ,description:"Passionate Computer Science Engineer with 2 years of hands-on experience building efficient solutions and exploring emerging technologies."
  ,items:[
    {
      company:"Tech Solution Inc."
      ,position:"Full Stack Developer"
      ,duration:"2023-present"
    }
  ]
}

const Resume = () => {
  return <div>Resume page</div>;
};

export default Resume;
