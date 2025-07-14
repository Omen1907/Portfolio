import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className='px-0 grid grid-cols-2 md:grid-cols-4 pb-10'>
      <FunFactCard
        icon={<BsTrophyFill />}
        des='Driven by Growth, Not Awards (Yet!)'
      />
      <FunFactCard
        icon={<SiAntdesign />}
        des='Loves Clean, Minimalist Design'
      />
      <FunFactCard
        icon={<BiCodeAlt />}
        des='Obsessed with Seamless User Experiences'
      />
      <FunFactCard
        icon={<IoLogoYoutube />}
        des='Enjoys Learning & Sharing Insights Online'
      />
    </div>
  );
};

export default FunFact;
