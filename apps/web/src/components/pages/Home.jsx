import React from 'react';
import {heroImg, aboutImg} from '../../images';
import {BsArrowRight} from 'react-icons/bs';

const Home = () => {
  return (
    <div
      className={`bg-linear w-full max-w-screen h-full min-h-full p-container mt-[60px] 
      md:mt-[80px] flex flex-col`}
    >
      {/* Hero section */}
      <section>
        <img src={heroImg} alt="Prometheus" className={`mb-[5vh] opacity-80`} />
        <div>
          <h1
            className={`font-display text-textPrimary text-4xl font-bold mb-[5vh]
          md:text-5xl xl:text-6xl`}
          >
            For physicians by physicians
          </h1>
          <p className="text-sm lg:text-base leading-[1.6]">
            Designed exclusively for physicians and healthcare organizations of
            all kinds in the MENA region looking to connect and expand their
            professional networks.
          </p>
        </div>
        <button className="btn-primary mt-[7vh]">Sign up</button>
      </section>

      <div className={`my-[8vh]`} />

      {/* About us section */}
      <section className={`bg-primary bg-opacity-[15%] rounded-[40px]`}>
        <img
          src={aboutImg}
          alt="Prometheus"
          className={`opacity-75 rounded-[40px] mb-[6vh]`}
        />
        <div className={`px-5 pb-5`}>
          <h2
            className={`text-3xl font-bold text-textPrimary font-display mb-[3vh]
            lg:text-4xl`}
          >
            An enriching, expansive, immersive medical community
          </h2>
          <p className={`leading-[1.6]`}>
            This is the place medical practitioners of all specializations come
            to connect with colleagues, collaborate on challenging clinical
            cases, and interact with healthcare organizations that value their
            insights.
          </p>
          <button
            className={`btn-secondary w-full mt-[6vh] flex justify-between items-center`}
          >
            Register <BsArrowRight className={`text-2xl fill-primary`} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
