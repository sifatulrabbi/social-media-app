import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {v4} from 'uuid';
import {
  settings,
  wallet,
  profileLeftIllustration,
  interests,
  cert,
  education,
} from '../../../images';

const leftNavItems = [
  {name: 'Dashboard', link: 'dashboard', img: ''},
  {name: 'Experience', link: 'experience', img: wallet},
  {name: 'Education', link: 'education', img: education},
  {name: 'Skills', link: 'skills', img: ''},
  {name: 'Certification', link: 'certification', img: cert},
  {name: 'Interests', link: 'interests', img: interests},
  {name: 'settings', link: 'settings', img: settings},
];

const SideNavBtn = ({activeName, name, link, img}) => {
  return (
    <Link to={`/profile?tab=${link}`}>
      <button
        className={`${activeName === name ? 'active' : ''}
        px-6 py-3 min-w-[200px] flex justify-between hover:bg-gray-100 transition-colors`}
      >
        {name}
        {img && <img src={img} alt="" height="25" width="25" />}
      </button>
    </Link>
  );
};

const LeftSideBar = () => {
  const [active, setActive] = useState('Dashboard');

  return (
    <aside
      className={`z-50 h-full flex flex-col justify-start items-start fixed top 0 left-4 top-[100px] -translate-y-8 translate-x-[-120%] bg-white transition-transform xl:translate-x-0 pt-[5vh]`}
    >
      {leftNavItems.map((item) => (
        <SideNavBtn
          activeName={active}
          name={item.name}
          link={item.link}
          img={item.img}
          key={v4()}
          onClick={() => setActive(item.name)}
        />
      ))}
      <div className="mt-[7vh]">
        <img src={profileLeftIllustration} alt="" />
      </div>
    </aside>
  );
};

export default LeftSideBar;
