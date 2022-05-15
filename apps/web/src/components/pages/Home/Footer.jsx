import React from 'react';
import {logo} from '../../../images';

const Footer = () => {
  return (
    <footer className="flex flex-col mt-[10vh] gap-6 border-t-[2px] border-[#9C69E277] pt-[10vh]">
      <div className="w-full flex justify-between items-center">
        <div>
          <h3 className="font-display font-bold text-textPrimary mb-4 text-3xl">
            Sign up today!
          </h3>
          <p className="leading-[1.6] lg:max-w-[30vw]">
            Any medically licensed physician can join and start engaging with
            colleagues today!
          </p>
        </div>
        <div className="flex flex-row gap-6">
          <button className="btn-primary">Sign in</button>
          <button className="btn-secondary">Register</button>
        </div>
      </div>
      {/* footer bottom */}
      <div>
        <div className="flex flex-row items-center gap-4">
          <img src={logo} alt="" height="50" width="50" />
          <span className="font-display font-bold text-textPrimary">
            Prometheus
          </span>
        </div>
        <div className="flex flex-col items-start">
          <h6 className="font-bold text-textPrimary">Title</h6>
        </div>
        <div className="flex flex-col items-start">
          <h6 className="font-bold text-textPrimary">Title</h6>
        </div>
        <div className="flex flex-col items-start">
          <h6 className="font-bold text-textPrimary">Title</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
