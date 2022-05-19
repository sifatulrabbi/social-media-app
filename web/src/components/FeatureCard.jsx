import React from 'react';
import {BsArrowRight} from 'react-icons/bs';

const FeatureCard = ({title, desc, img, bg}) => {
  return (
    <div className={`relative grid grid-cols-2 gap-4 max-w-2xl z-[1] p-4`}>
      <img src={img} alt="" />
      <img
        src={bg}
        alt=""
        className="z-[-1] absolute -right-4 top-1/2 -translate-y-1/2 h-[125%] w-[70%]"
      />
      <div className="flex flex-col gap-4">
        <h5 className="font-display text-xl">{title}</h5>
        <p className="text-sm leading-[1.6]">{desc}</p>
        <button className="fill-primary text-xs font-bold flex items-center gap-4">
          Learn more
          <BsArrowRight className="text-lg fill-primary" />
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
