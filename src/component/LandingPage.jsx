import { useState } from 'react'
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import logoCard from '../assets/Manchester_City_FC_badge.svg'
import nationalFlag from '../assets/Flag_of_Indonesia.png'
import cardPhoto from '../assets/WhatsApp_Image_2025-09-24_at_09.34.23-removebg-previews.png'
import gsap from '../assets/gsapSetup';
import VanillaTilt from "vanilla-tilt";
import '../assets/main.css'

export default function LandingPage() {
    const styleOne = { '--color': '#00e0ff' };
    const styleTwo = { '--bg-color': 'hsl(40, 100%, 50%)' };

    const el = useRef(null);

    useEffect(() => {
        const texts = [
            "Web Developer",
            "Video/Photo Editor",
            "Office Administrator",
            "Digital Marketing",
            "Others",
        ];
        let count = 0;
        let index = 0;
        let isDeleting = false;

        function type() {
            const current = texts[count];

            isDeleting
                ? index = Math.max(0, index - 1)
                : index = Math.min(current.length, index + 1);

            el.current && (el.current.textContent = current.substring(0, index));

            let delay = isDeleting ? 80 : 120;

            if (!isDeleting && index === current.length) {
                delay = 3500;
                isDeleting = true;
            } else if (isDeleting && index === 0) {
                isDeleting = false;
                count = (count + 1) % texts.length;
                delay = 500;
            }
            setTimeout(type, delay);
        }
        type();
    }, []);
    const socialIcon = [
        { link: 'https://web.facebook.com/habibiqballubis.lubis', icon: 'fa-brands fa-facebook-f' },
        { link: 'https://x.com/habibiqbaaaal', icon: 'fa-brands fa-x-twitter' },
        { link: 'https://www.instagram.com/habib.iqbal.l/', icon: 'fa-brands fa-instagram' },
        { link: 'https://www.linkedin.com/in/mhd-habib-iqbal-lubis/', icon: 'fa-brands fa-linkedin-in' }
    ];

    const heroContent = useRef(null);
    const animatedH = useRef(null);
    const animatedI = useRef(null);
    const animatedQ = useRef(null);
    const animatedA = useRef(null);
    const socialIconRef = useRef(null);

    const profileRef = useRef(null);
    const innerRef = useRef(null);
    let floatAnim;
    let cardEl;
    let handleEnter, handleLeave;

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroContent.current, {
                delay: 0.6,
                opacity: 0,
                duration: 1,
                ease: "back.out",
                y: -100,
                onComplete: () => {
                    gsap.to(animatedH.current, {
                        rotationX: 720,
                        duration: 3,
                        ease: "power2.inOut",
                        repeat: -1,
                        repeatDelay: 5,
                        yoyo: true,
                        transformOrigin: "center center",
                    });
                    gsap.to(animatedI.current, {
                        rotationX: 180,
                        duration: 2,
                        ease: "power2.inOut",
                        repeat: -1,
                        repeatDelay: 5,
                        yoyo: true,
                        transformOrigin: "center center",
                    });
                    gsap.to(animatedQ.current, {
                        rotationY: 720,
                        duration: 3,
                        ease: "power2.inOut",
                        repeat: -1,
                        repeatDelay: 5,
                        yoyo: true,
                        transformOrigin: "center center",
                    });
                    gsap.to(animatedA.current, {
                        rotationX: 720,
                        duration: 3,
                        ease: "power2.inOut",
                        repeat: -1,
                        repeatDelay: 5,
                        yoyo: true,
                        transformOrigin: "center center",
                    });
                },
            });

            gsap.from(socialIconRef.current, {
                delay: 1,
                opacity: 0,
                duration: 1,
                ease: "back.out",
                y: -100,
            });

            cardEl = profileRef.current;

            gsap.from(cardEl, {
                delay: 0.6,
                opacity: 0,
                duration: 2.5,
                ease: "back.out",
                y: -100,
                onComplete: () => {
                    floatAnim = gsap.to(cardEl, {
                        y: -20,
                        duration: 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    });
                },
            });

            handleEnter = () => floatAnim && floatAnim.pause();
            handleLeave = () => floatAnim && floatAnim.resume();

            cardEl.addEventListener("mouseenter", handleEnter);
            cardEl.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            cardEl?.removeEventListener("mouseenter", handleEnter);
            cardEl?.removeEventListener("mouseleave", handleLeave);
            floatAnim?.kill();
            ctx.revert();
        };
    }, []);

    useEffect(() => {
        VanillaTilt.init(profileRef.current, {
            max: 30,
            speed: 400,
            reverse: true,
            gyroscope: false,
        });
        VanillaTilt.init(innerRef.current, {
            max: 0,
            speed: 400,
            glare: true,
            reverse: true,
            gyroscope: false,
        });
        return () => {
            profileRef.current?.VanillaTilt?.destroy();
            innerRef.current?.VanillaTilt?.destroy();
        };
    }, []);
    return (
        <section className='hero' id='home'>
            <div className="container">
                <div className="hero-content" ref={heroContent}>
                    <h3>Hello, It's Me</h3>
                    <h1><span className="animated-h" ref={animatedH}>H</span>ab<span className="animated-i" ref={animatedI}>i</span>b I<span
                        className="animated-q" ref={animatedQ}>q</span>b<span className="animated-a" ref={animatedA}>a</span>l</h1>
                    <h2>Open To Work As <span className="typing" ref={el}></span></h2>
                    <p>
                        Senang
                        untuk mempelajari hal-hal yang baru serta memiliki kemampuan yang
                        cukup baik pada pengembangan website dan UI/UX
                    </p>
                    <div className="social-icons" ref={socialIconRef}>
                        {socialIcon.map((item, i) => (
                            <a href={item.link} target='_blank' key={i}>
                                <i>
                                    <FontAwesomeIcon icon={item.icon} />
                                </i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="hero-image">
                    <div className="profile-card" style={styleOne} ref={profileRef}>
                        <div className="card__border"></div>
                        <div className="card__border-line"></div>
                        <div className="card__inner" ref={innerRef}>
                            <div className="card__img">
                                <div className="img__team">
                                    <div className="ovr">
                                        <h1>99</h1>
                                    </div>
                                    <div className="position">
                                        <h3>ST</h3>
                                    </div>
                                    <img src={nationalFlag} alt=""></img>
                                </div>
                                <div className="img__athlete">
                                    <img src={cardPhoto} alt=""></img>
                                </div>
                            </div>
                            <div className="card__text">
                                <div className="card__type" style={styleTwo}>HI</div>
                                <h1 className="name">Habib</h1>
                                <div className="value">
                                    <div className="left">
                                        <h3><strong>99</strong> PAC</h3>
                                        <h3><strong>99</strong> SHO</h3>
                                        <h3><strong>99</strong> PAS</h3>
                                    </div>
                                    <div className="right">
                                        <h3><strong>99</strong> DRI</h3>
                                        <h3><strong>99</strong> DEF</h3>
                                        <h3><strong>99</strong> PHY</h3>
                                    </div>
                                </div>
                                {/* <p className="points">380 PTS</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}