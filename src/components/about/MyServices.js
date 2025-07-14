import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 text-textColor'>
      <ServicesCard
        icons={<BiCodeAlt />}
        title='Web Development'
        subTitle='Custom-built, responsive websites with modern designs and fast loading speeds to elevate your online presence.'
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title='Web Design'
        subTitle='User-focused designs that naturally guide visitors through your site with balanced aesthetics and clean, intuitive interfaces.'
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title='Mobile Application'
        subTitle='Dynamic, interactive web applications built with modern frameworks, fully optimized for seamless mobile use.'
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title='Website Hosting'
        subTitle='Reliable, secure hosting solutions with ongoing technical support, maintenance, and scalability to grow with your needs.'
      />
    </div>
  );
};

export default MyServices;
