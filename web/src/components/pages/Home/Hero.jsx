import React from 'react';
import {Link} from 'react-router-dom';
import {heroImg} from '../../../images';

const Hero = () => {
  return (
    <section>
      <h1
        className={`font-display text-textPrimary text-4xl font-bold mb-[6vh]
          md:text-5xl xl:text-6xl`}
      >
        For physicians by physicians
      </h1>
      <div className="flex flex-col justify-center items-start lg:flex-row-reverse gap-[4vw]">
        <img
          src={heroImg}
          alt="Prometheus"
          className={`mb-[5vh] opacity-80 bg-cover object-cover lg:w-[45vw] lg:mb-0`}
        />
        <div className="flex flex-col justify-start items-start">
          <p className="text-sm lg:text-base leading-[1.6] w-full">
            Designed exclusively for physicians and healthcare organizations of
            all kinds in the MENA region looking to connect and expand their
            professional networks.
          </p>
          <Link to="/register" className="btn-primary mt-[7vh]">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
