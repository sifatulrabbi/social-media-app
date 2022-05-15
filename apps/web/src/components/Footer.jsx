import React from 'react';
import {logo} from '../images';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-container flex flex-col mt-[10vh] gap-6 border-t-[2px] border-[#9C69E277] pt-[10vh] mb-[10vh]">
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
      <div className="flex flex-row items-start justify-between mt-[10vh]">
        <div className="flex flex-row items-center gap-4">
          <img src={logo} alt="" height="50" width="50" />
          <span className="font-display font-bold text-textPrimary">
            Prometheus
          </span>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h6 className="font-bold text-textPrimary mb-4">About</h6>
          <a href="/">Profile</a>
          <a href="/">Features</a>
          <a href="/">Careers</a>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h6 className="font-bold text-textPrimary mb-4">Title</h6>
          <a href="/">Support</a>
          <a href="/">Sign up</a>
          <a href="/">Guide</a>
          <a href="/">Q & A</a>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h6 className="font-bold text-textPrimary mb-4">Social Media</h6>
          <div className="flex flex-row items-center gap-4">
            <a
              href="/"
              className="text-xl w-[35px] h-[35px] bg-gray-200 rounded-full flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="/"
              className="text-xl w-[35px] h-[35px] bg-gray-200 rounded-full flex items-center justify-center"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              className="text-xl w-[35px] h-[35px] bg-gray-200 rounded-full flex items-center justify-center"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
