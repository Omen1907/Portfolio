import React from "react";
import { downloadbooking, downloadfinance, downloadmovie } from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title='Recent' subTitle='Projects' />
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10'>
        <div className='px-6'>
          <ProjectsCard
            title='Finance Tracker'
            category='Website'
            image={downloadfinance}
            link='https://finance-tracker-mvp.vercel.app/'
          />
          <ProjectsCard
            title='VioScreen'
            category='Website'
            image={downloadmovie}
            link='https://movie-site-qsyd.onrender.com'
          />
          {/* <ProjectsCard
            title='Infinity Logo'
            category='Logo'
            image={workImgTwo}
          />
          <ProjectsCard
            title='Mobile Application'
            category='Shopping'
            image={workImgFive}
          /> */}
        </div>
        <div className='px-6'>
          <ProjectsCard
            title='Booking Website'
            category='Booking-page'
            image={downloadbooking}
            link='https://booking-fi21vnzq7-mikhael-fouries-projects.vercel.app/'
          />
          {/* <ProjectsCard
            title='Grapic Design'
            category='Design'
            image={workImgSix}
          />
          <ProjectsCard
            title='Ideas & Blog'
            category='Website'
            image={workImgEight}
          />
          <ProjectsCard
            title='ZOSS Logo'
            category='Logo'
            image={workImgSeven}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
