import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className='w-full grid grid-cols-9 px-6 pb-6'>
      {/* Experience Section */}
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Experience' icon={<MdWork />} />
        <ResumeCard
          badge='2024 - Present'
          title='Freelance Web Developer'
          subTitle='Self-Employed'
          des='Building custom websites and web applications for clients with a focus on responsive design and user experience.'
        />
        <ResumeCard
          badge='2023'
          title='Freelance Researcher and Marketer'
          subTitle='Industrial Laboratory Services'
          des='Conducted market research to identify expansion opportunities and managed advertising and marketing strategies.'
        />

        {/* Add any small projects or internships here */}
      </div>

      <div className='w-full h-full hidden lgl:flex justify-center items-center'>
        <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
      </div>

      {/* Education Section */}
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Education & Learning' icon={<GiGraduateCap />} />
        <ResumeCard
          badge='2024 - 2025'
          title='Full Stack Web Development'
          subTitle='Zero To Mastery (ZTM)'
          des='Completed comprehensive courses covering HTML, CSS, JavaScript, React, Node.js, and more.'
        />
        <ResumeCard
          badge='2023 - 2024'
          title='Responsive Web Design Certification'
          subTitle='freeCodeCamp'
          des='Earned certification focusing on building modern, responsive websites from scratch.'
        />
      </div>
    </div>
  );
};

export default Education;
