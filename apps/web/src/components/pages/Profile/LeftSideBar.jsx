import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {v4} from 'uuid';

const leftNavItems = [
  {name: 'Dashboard', link: 'dashboard'},
  {name: 'Experience', link: 'experience'},
  {name: 'Education', link: 'education'},
  {name: 'Skills', link: 'skills'},
  {name: 'Certification', link: 'certification'},
  {name: 'Interests', link: 'interests'},
  {name: 'settings', link: 'settings'},
];

const SideNavBtn = ({activeName, name, link}) => {
  return (
    <Link to={`/profile?tab=${link}`}>
      <button
        className={`${activeName === name ? 'active' : ''}
        px-6 py-3`}
      >
        {name}
      </button>
    </Link>
  );
};

const LeftSideBar = () => {
  const [active, setActive] = useState('Dashboard');

  return (
    <aside
      className={`flex flex-col justify-start items-start fixed left-0 top-[100px]`}
    >
      {leftNavItems.map((item) => (
        <SideNavBtn
          activeName={active}
          name={item.name}
          link={item.link}
          key={v4()}
          onClick={() => setActive(item.name)}
        />
      ))}
    </aside>
  );
};

export default LeftSideBar;
