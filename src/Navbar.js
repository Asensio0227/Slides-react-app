import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { social, links } from './data';

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);
  const containerRef = useRef(null);
  const linksRef = useRef(null);

  const toggle = () => {
    setShowLink(!showLink)
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLink) {
      containerRef.current.style.height = `${linksHeight}px`;
    } else {
      containerRef.current.style.height = '0px';
    }
  },[showLink])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h4>sky<span>codings</span></h4>
          <button onClick={toggle} className="nav-toggle">
            <FaBars/>
          </button>
        </div>
        <div ref={containerRef} className="links-container">
          <ul ref={linksRef} className="links">
            {links.map((link) => {
              const { text, url, id } = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((icons) => {
            const { icon, url, id } = icons;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
