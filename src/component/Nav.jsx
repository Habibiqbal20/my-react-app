import { useState } from 'react'
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from '../assets/gsapSetup';
import '../assets/main.css'


export default function Nav() {
  const listItem = ['Home', 'About', 'Project', 'Contact'];
  const [active, setActive] = useState('Home');
  const [menuBtn, setMenuBtn] = useState('menu-btn');
  const [listOpen, setListOpen] = useState('list');
  function toggleClassMenuBtn(e) {
    setMenuBtn(prev =>
      prev === 'menu-btn' ? 'menu-btn cross' : 'menu-btn'
    );
    setListOpen(prevList =>
      prevList === 'list' ? 'list open' : 'list'
    );
  };
  const menuRef = useRef(null);
  const listRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        listRef.current &&
        !menuRef.current.contains(e.target) &&
        !listRef.current.contains(e.target)
      ) {
        setMenuBtn("menu-btn");
        setListOpen("list");
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 750px)').matches
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 750px)');
    const handleChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  });

useEffect(() => {
  const nav = gsap.context(() => {
    gsap.from(".nav", { 
      y: -100, 
      opacity: 0, 
      duration: 1 });
  });
  return () => nav.revert();
}, []);

  return (
    <nav className='nav'>
      <div className="main">
        <div className="logo">
          <h1>
            <a href="">Habib Iqbal.</a>
          </h1>
        </div>
        <div className={listOpen} ref={listRef}>
          <ul className={isMobile ? 'mobile' : ''}>
            {listItem.map((item) => (
              <li
                key={item}
                className={active === item ? 'active' : ''}
                onClick={() => setActive((item))}
              >
                <a onClick={() => (window.location.href = '#' + item.toLowerCase())}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={menuBtn} onClick={toggleClassMenuBtn} ref={menuRef}>
          <div className="menu-btn__burger"></div>
        </div>
      </div>
    </nav>

  )
}