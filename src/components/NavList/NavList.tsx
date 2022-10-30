import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link className='nav-item__link' to={link.link}>{link.name}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavLink;
