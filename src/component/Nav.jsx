import { useState } from 'react'
import React, { useEffect, useRef } from 'react';
import gsap from '../animations/gsapSetup';


export default function Nav() {
    // Navbar dan SideBar
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
    const toggle = useRef(null);
    useEffect(() => {
        function handleClickOutside(e) {
            if (
                menuRef.current &&
                listRef.current &&
                toggle.current &&
                !menuRef.current.contains(e.target) &&
                !listRef.current.contains(e.target) &&
                !toggle.current.contains(e.target)
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


    // Progress Bar
    const [scrollWidth, setScrollWidth] = useState(0);
    useEffect(() => {
        const progressBar = () => {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollY / docHeight) * 100;
            setScrollWidth(scrolled);
        }
        window.addEventListener('scroll', progressBar);
        return () => window.addEventListener('scroll', progressBar);
    }, []);

    // Gsap
    useEffect(() => {
        const nav = gsap.context(() => {
            gsap.from(".nav", {
                y: -100,
                opacity: 0,
                duration: 1
            });

            gsap.from(".scroll-progress", {
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



    const [slider, setSlider] = useState(() => {
        return localStorage.getItem('slider') || 'slider dark';
    });
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    })
    document.body.className = theme;
    localStorage.setItem('slider', slider)
    localStorage.setItem('theme', theme);
    function sliderToggle() {
        setSlider(slider === 'slider dark' ? 'slider light' : 'slider dark')
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <>
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
                    <div className="toggle" ref={toggle}>
                        <div className="theme">
                            <span className={slider} onClick={sliderToggle}></span>
                        </div>
                        <div className={menuBtn} onClick={toggleClassMenuBtn} ref={menuRef}>
                            <div className="menu-btn__burger"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-progress" style={{ width: `${scrollWidth}%` }} ></div>
        </>
    )
}