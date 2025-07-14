import React from "react";

const AboutMe = () => {
  return (
    <div className='flex flex-col md:flex-row pb-0'>
      <div className='w-full md:w-1/2 text-zinc-600 px-6 border-r-[1px] border-r-zinc-800 flex items-center'>
        <div className='py-6'>
          <h2 className='font-semibold mb-1'>Hello! I'm Mikhael Fourie</h2>
          <p className='text-base leading-6 '>
            I'm a web designer based in Namibia, Africa, passionate about
            creating modern, responsive websites. I focus on building clean,
            user-friendly designs that help businesses grow and stand out
            online. When I'm not building websites, you'll usually find me at
            the gym or spending quality time with my family. I'd love the
            opportunity to connect and explore how I can help bring your ideas
            to life.
          </p>
        </div>
      </div>
      <div className='w-full md:w-1/2 p-6'>
        <ul className='flex flex-col gap-1'>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan text-white'>Location:</span>
            Namibia (Working Remotely)
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan text-white'>Freelance:</span>
            Available
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan text-white'>Experience:</span>
            Web Design & Development
          </li>
          <li className='aboutRightLi'>
            <span className='aboutRightLiSpan text-white'>Focus:</span>
            Modern, Responsive Websites
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
