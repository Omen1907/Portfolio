import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className='w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6'>
      {/* Design & UI */}
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Web & UI Design' icon={<SiArtstation />} />
        <div className='py-4'>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>
              Responsive Web Design
            </p>
            <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
              <span className='w-[90%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>
              User Interface (UI) Design
            </p>
            <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
              <span className='w-[85%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>
              Graphic & Animation Design
            </p>
            <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
              <span className='w-[75%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
        </div>
      </div>

      <div className='w-full h-full hidden lgl:flex justify-center items-center'>
        <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
      </div>

      {/* Languages */}
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Languages' icon={<FaFlag />} />
        <div className='py-4'>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>English (Fluent)</p>
            <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
              <span className='w-[100%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>
              Afrikaans (Fluent)
            </p>
            <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
              <span className='w-[90%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>
              Japanese (Learning)
            </p>
            <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
              <span className='w-[40%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
        </div>
      </div>

      {/* Coding Skills */}
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Coding Skills' icon={<BiCodeAlt />} />
        <div className='py-4'>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>ReactJS</p>
            <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
              <span className='w-[85%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>Node.js</p>
            <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
              <span className='w-[80%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>JavaScript</p>
            <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
              <span className='w-[85%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>TypeScript</p>
            <span className='w-full bg-zinc-600 h-1 inline-flex relative'>
              <span className='w-[50%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
        </div>
      </div>

      <div className='w-full h-full hidden lgl:flex justify-center items-center'>
        <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
      </div>

      {/* Additional Skills */}
      <div className='col-span-9 md:col-span-4'>
        <ResumeTitle title='Additional Skills' icon={<IoIosPaper />} />
        <ul className='py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800'>
          <li className='flex items-center gap-4 text-textColor'>
            <span className='text-designColor text-lg'>
              <GiCheckMark />
            </span>
            Website Hosting & Maintenance
          </li>
          <li className='flex items-center gap-4 text-textColor'>
            <span className='text-designColor text-lg'>
              <GiCheckMark />
            </span>
            Responsive & Mobile-First Design
          </li>
          <li className='flex items-center gap-4 text-textColor'>
            <span className='text-designColor text-lg'>
              <GiCheckMark />
            </span>
            SEO Fundamentals
          </li>
          <li className='flex items-center gap-4 text-textColor'>
            <span className='text-designColor text-lg'>
              <GiCheckMark />
            </span>
            Graphic Design & Animations
          </li>
          <li className='flex items-center gap-4 text-textColor'>
            <span className='text-designColor text-lg'>
              <GiCheckMark />
            </span>
            Client Communication & Project Management
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
