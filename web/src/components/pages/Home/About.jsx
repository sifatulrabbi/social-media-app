import React from 'react';
import {aboutImg} from '../../../images';
import {BsArrowRight} from 'react-icons/bs';

const About = () => {
  return (
    <section
      className={`bg-primary bg-opacity-[15%] rounded-[40px] flex flex-col lg:flex-row`}
    >
      <img
        src={aboutImg}
        alt="Prometheus"
        className={`opacity-75 rounded-[40px] mb-[6vh] lg:mb-0 lg:w-1/2 object-cover`}
      />
      <div className={`px-5 pb-5 lg:py-5`}>
        <h2
          className={`text-3xl font-bold text-textPrimary font-display mb-[3vh]
            lg:text-4xl`}
        >
          An enriching, expansive, immersive medical community
        </h2>
        <p className={`leading-[1.6]`}>
          This is the place medical practitioners of all specializations come to
          connect with colleagues, collaborate on challenging clinical cases,
          and interact with healthcare organizations that value their insights.
        </p>
        <button
          className={`btn-secondary w-full mt-[6vh] flex justify-between items-center lg:w-max gap-6`}
        >
          Register <BsArrowRight className={`text-2xl fill-primary`} />
        </button>
      </div>
    </section>
  );
};

export default About;
