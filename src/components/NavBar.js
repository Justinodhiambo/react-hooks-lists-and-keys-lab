import React from 'react';

const links = ['home', 'about', 'projects'];

function NavBar() {
  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
