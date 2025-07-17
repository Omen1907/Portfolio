import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { contrastFace } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "Problem Solver"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className='w-full lgl:w-5/12 h-full bg-dsfsdfds rounded-2xl shadow-testShwdow z-10'>
      <div className='w-full h-3/5'>
        <img
          className='w-full h-full object-cover rounded-2xl'
          src={contrastFace}
          loading='priority'
          alt='bannerImage'
        />
      </div>
      <div className='w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl'>
        <div className='flex flex-col items-center gap-2 py-10'>
          <h1 className='text-textColor text-4xl font-semibold'>
            Mikhael Fourie
          </h1>
          <p className='text-base text-designColor tracking-wide'>
            {text}
            <Cursor cursorBlinking='false' cursorStyle='|' />
          </p>
          <div className='flex justify-center gap-3 mt-2'>
            <a
              href='https://github.com/Omen1907'
              target='_blank'
              rel='noreferrer'
              className='hover:text-designColor duration-300 text-2xl'
            >
              <FaGithub />
            </a>
            <a
              href='www.linkedin.com/in/mikhael-fourie-90b7a32a0'
              target='_blank'
              rel='noreferrer'
              className='hover:text-designColor duration-300 text-2xl'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://instagram.com/yourusername'
              target='_blank'
              rel='noreferrer'
              className='hover:text-designColor duration-300 text-2xl'
            >
              <FiInstagram />
            </a>
            <a
              href='mailto:mikhael.fourie@gmail.com'
              className='hover:text-designColor duration-300 text-2xl'
            >
              <FiMail />
            </a>
          </div>
        </div>
        <div className='flex h-14 text-designColor'>
          {/* <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a> */}
          <a
            href='/contact'
            className='w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-textColor duration-300'
          >
            Contact me <FiSend />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
