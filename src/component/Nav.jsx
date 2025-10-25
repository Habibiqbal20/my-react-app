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
                duration: 1
            });

            function handleMouseEnter(e) {
                gsap.to(e.currentTarget, {
                    x: 20,
                    duration: 0.2,
                    ease: 'power4.in'
                });
            }
            function handleMouseLeave(e) {
                gsap.to(e.currentTarget, {
                    x: 0,
                    duration: 0.2,
                    ease: 'power4.in'
                });
            }
            setInterval(() => {
                const exists = document.querySelector('.open');
                const li = document.querySelectorAll('.li');
                const isMobile = window.innerWidth <= 900;

                if (!isMobile) {
                    li.forEach(liAnimate => {
                        liAnimate.removeEventListener('mouseenter', handleMouseEnter);
                        liAnimate.removeEventListener('mouseleave', handleMouseLeave);
                        gsap.set(liAnimate, { clearProps: 'all' });
                    });
                    return;
                }

                if (!exists) {
                    gsap.utils.toArray(li).forEach((liAnimate, iAnimate) => {
                        gsap.fromTo(
                            liAnimate,
                            {
                                opacity: 0,
                                x: 20
                            },
                            {
                                opacity: 1,
                                x: 0,
                                duration: 1,
                                delay: iAnimate * 0.3,
                                ease: "power4.in"
                            }
                        );

                        liAnimate.addEventListener('mouseenter', handleMouseEnter);
                        liAnimate.addEventListener('mouseleave', handleMouseLeave);
                    });
                }
            }, 500);
        });
        return () => nav.revert();
    }, []);

    return (
        <div className='nav'>
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
                                className={active === item ? 'active li' : 'li'}
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
        </div>

    )
}