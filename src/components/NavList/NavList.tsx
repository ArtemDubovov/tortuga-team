import React from 'react';

import './NavList.css';

type LinkType = {
  name: string;
  link: string;
}

interface NavLinkProps {
  links: LinkType[];
}

const NavLink: React.FC<NavLinkProps> = ({links}) => {
  return (
    <nav>
      <ul className='nav-list'>
        {links.map(link =>
          <li className='nav-item' key={link.name}>
            <a className='nav-item__link' href={link.link}>{link.name}</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavLink;
