import { useState } from 'react'
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import logoCard from '../assets/Manchester_City_FC_badge.svg'
import cardPhoto from '../assets/WhatsApp_Image_2025-09-24_at_09.34.23-removebg-previews.png'
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
            if (isDeleting) {
                index = Math.max(0, index - 1);
            } else {
                index = Math.min(current.length, index + 1);
            }

            if (el.current) {
                el.current.textContent = current.substring(0, index);
            }

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

    return (
        <section className='hero' id=''>
            <div className="container">
                <div className="hero-content">
                    <h3>Hello, It's Me</h3>
                    <h1><span className="animated-h">H</span>ab<span className="animated-i">i</span>b I<span
                        className="animated-q">q</span>b<span className="animated-a">a</span>l</h1>
                    <h2>Open To Work As <span className="typing" ref={el}></span></h2>
                    <p>
                        Senang
                        untuk mempelajari hal-hal yang baru serta memiliki kemampuan yang
                        cukup baik pada pengembangan website dan UI/UX
                    </p>
                    <div className="social-icons">
                        <a href="https://web.facebook.com/habibiqballubis.lubis" target='_blank'><i><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></i></a>
                        <a href="https://x.com/habibiqbaaaal" target='_blank'><i><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></i></a>
                        <a href="https://www.instagram.com/habib.iqbal.l/" target='_blank'><i><FontAwesomeIcon icon="fa-brands fa-instagram" /></i></a>
                        <a href="https://www.linkedin.com/in/mhd-habib-iqbal-lubis/" target='_blank'><i><FontAwesomeIcon icon="fa-brands fa-linkedin-in" target='_blank' /></i></a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="profile-card" style={styleOne}>
                        <div className="card__border"></div>
                        <div className="card__border-line"></div>
                        <div className="card__inner">
                            <div className="card__img">
                                <div className="img__team">
                                    <img src={logoCard} alt=""></img>
                                </div>
                                <div className="img__athlete">
                                    <img src={cardPhoto} alt=""></img>
                                </div>
                            </div>
                            <div className="card__text">
                                <div className="card__type" style={styleTwo}>HI</div>
                                <h1 className="name">Habib</h1>
                                <p className="points">150 PTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}