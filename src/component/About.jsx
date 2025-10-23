import { useState } from 'react'
import { useEffect, useRef } from "react";
import profilePicture from '../assets/my_foto/17583517131s70s.jpg';
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
//import GitHubCalendar from 'react-github-calendar';

import '../assets/main.css';

export default function About() {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
            "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css";
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.src =
            "https://bloggify.github.io/github-calendar/dist/github-calendar.min.js";
        // script.src =
        //     "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
        script.onload = () => {
            if (window.GitHubCalendar) {
                window.GitHubCalendar(".calendar", "Habibiqbal20", {
                    responsive: true,
                });
            } else {
                console.warn("GitHubCalendar not loaded yet!");
            }
        };
        document.body.appendChild(script);
        return () => {
            document.head.removeChild(link);
            document.body.removeChild(script);
        };
    }, []);

    const trackRef = useRef(null);
    const speedRef = useRef(1);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const firstContent = track.querySelector(".skills-content");
        if (!firstContent) return;

        const singleWidth = firstContent.getBoundingClientRect().width;
        track.appendChild(firstContent.cloneNode(true));

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;
        const handleMouseDown = (e) => {
            isDown = true;
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
            track.style.cursor = "grabbing";
            speedRef.current = 0;
        };

        const handleMouseLeave = () => (isDown = false);
        const handleMouseUp = () => {
            isDown = false;
            track.style.cursor = "grab";
            speedRef.current = 1;
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.2;
            track.scrollLeft = scrollLeft - walk;
        };
        const handleTouchStart = (e) => {
            isDown = true;
            startX = e.touches[0].pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
            speedRef.current = 0;
        };

        const handleTouchMove = (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - track.offsetLeft;
            const walk = (x - startX) * 1.2;
            track.scrollLeft = scrollLeft - walk;
        };

        const handleTouchEnd = () => {
            isDown = false;
            speedRef.current = 1;
        };
        let animationFrameId;
        const autoScroll = () => {
            track.scrollLeft = (track.scrollLeft + speedRef.current) % singleWidth;
            animationFrameId = requestAnimationFrame(autoScroll);
        };
        autoScroll();
        track.addEventListener("mousedown", handleMouseDown);
        track.addEventListener("mouseleave", handleMouseLeave);
        track.addEventListener("mouseup", handleMouseUp);
        track.addEventListener("mousemove", handleMouseMove);
        track.addEventListener("touchstart", handleTouchStart);
        track.addEventListener("touchmove", handleTouchMove);
        track.addEventListener("touchend", handleTouchEnd);
        return () => {
            cancelAnimationFrame(animationFrameId);
            track.removeEventListener("mousedown", handleMouseDown);
            track.removeEventListener("mouseleave", handleMouseLeave);
            track.removeEventListener("mouseup", handleMouseUp);
            track.removeEventListener("mousemove", handleMouseMove);
            track.removeEventListener("touchstart", handleTouchStart);
            track.removeEventListener("touchmove", handleTouchMove);
            track.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    const skillsData = [
        {
            title: "Web Developer",
            items: ["HTML", "CSS / SCSS", "JavaScript", "PHP", "MySQL"],
        },
        {
            title: "Microsoft Office",
            items: ["Word", "Excel", "PowerPoint"],
        },
        {
            title: "Digital Marketing",
            items: ["Social Media Marketing", "Meta/Tiktok Ads", "Content Marketing"],
        },
        {
            title: "Photo/Video Editor",
            items: ["Premiere Pro", "After Effects", "Photoshop", "Canva"],
        },
    ];


    const titleAbout = useRef(null);
    const splitText = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleAbout.current, {
                y: -50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: titleAbout.current,
                    start: 'top 80%',
                    //markers: true,
                    once: true,
                },
            });

            console.log("✅ SplitText loaded?", typeof SplitText);

            document.fonts.ready.then(() => {
                gsap.set(splitText.current, { opacity: 1 });

                const paragraph = splitText.current.querySelector("p");
                if (paragraph.splitText) {
                    paragraph.splitText.revert();
                }
                const split = new SplitText(paragraph, {
                    type: "words,lines",
                    linesClass: "line",
                    autoSplit: true,
                    mask: "lines",
                });
                paragraph.splitText = split;
                gsap.from(split.lines, {
                    scrollTrigger: {
                        trigger: splitText.current,
                        start: "top 80%",
                        toggleActions: "play pause resume none",
                        // markers: true,
                    },
                    duration: 1,
                    yPercent: 100,
                    opacity: 0,
                    stagger: 0.4,
                    ease: "expo.out",
                });
            });

            gsap.from('.github-profile', {
                scrollTrigger: {
                    trigger: '.github-profile',
                    start: 'top 80%',
                },
                x: -200,
                opacity: 0,
                duration: 1.3,

            });
            gsap.from('.calendar', {
                scrollTrigger: {
                    trigger: '.calendar',
                    start: 'top 80%',
                },
                x: 200,
                opacity: 0,
                duration: 1.3,
                delay: 0.8
            });
        });
        return () => {
            ctx.revert();
            const paragraph = splitText.current?.querySelector("p");
            if (paragraph?.splitText) {
                paragraph.splitText.revert();
                delete paragraph.splitText;
            }
        };
    }, []);

    const skills = [
        { name: "Web Developer", level: 78 },
        { name: "Microsoft Office", level: 90 },
        { name: "Digital Marketing", level: 70 },
        { name: "Photo/Video Editor", level: 85 },
    ];

    const sectionRef = useRef(null);
    const barsRef = useRef([]);
    const numbersRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            barsRef.current.forEach((bar, index) => {
                const numObj = { value: 0 };

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });

                tl.fromTo(
                    bar,
                    { width: "0%" },
                    {
                        width: `${skills[index].level}%`,
                        duration: 1.8,
                        ease: "power3.out",
                        delay: index * 0.2,
                    }
                ).to(numObj, {
                    value: skills[index].level,
                    duration: 1.8,
                    delay: index * 0.2,
                    ease: "power3.out",
                    onUpdate: () => {
                        if (numbersRef.current[index]) {
                            numbersRef.current[index].textContent = `${Math.round(numObj.value)}%`;
                        }
                    },
                }, "<");
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [skills]);

    return (
        <section className="about" id="about">
            <div className="about-content">
                <div className="header">
                    <h1 className="About-me" ref={titleAbout}>About Me</h1>
                </div>
                <div className="text split" ref={splitText}>
                    <p>Memiliki minat bekerja pada bidang yang berhubungan dengan Komputer
                        maupun pada bagian administrasi perkantoran dan lainnya. Senang
                        untuk mempelajari hal-hal yang baru serta memiliki kemampuan yang
                        cukup baik pada pengembangan website dan UI/UX. Memiliki komunikasi
                        yang baik serta dapat bekerja sama dalam tim dan dapat beradaptasi
                        dengan cepat. Merupakan individu yang sehat, jujur, komunikatif, disiplin
                        dan bertanggung jawab.</p>
                </div>
            </div>
            <div className="github">
                <div className="heading">
                    <h4>Github Contributions</h4>
                </div>
                <div className="content">
                    <div className="github-profile">
                        <div className="photo">
                            <img src={profilePicture} alt=""></img>
                        </div>
                        <div className="information">
                            <div className="full-name">
                                <p>Mhd. Habib Iqbal Lubis</p>
                            </div>
                            <div className="birth-date">
                                <p>20-07-2003</p>
                            </div>
                            <div className="location">
                                <p>Tebing Tinggi, Sumatera Utara</p>
                            </div>
                        </div>
                    </div>
                    <div className="calendar">
                        <span className="loading-text">Loading contributions...</span>
                        {/* <GitHubCalendar username="Habibiqbal20" /> */}
                    </div>
                </div>
            </div>
            <div className="skills">
                <div className="heading">
                    <h4 className="text">What Can I Do</h4>
                </div>
                <div className="skills-content-container" ref={trackRef} id="scrollTrack">
                    <div className="skills-content">
                        {skillsData.map((skill, i) => (
                            <div className="skills-card" id={skill.title} key={i}>
                                <div className="skills-name" >
                                    <h3>{skill.title}</h3>
                                </div>
                                <div className="information">
                                    <ul>
                                        {skill.items.map((items, j) => (
                                            <li key={j}>
                                                <p>{items}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="skills-section" ref={sectionRef}>
                <h2 className="skills-title">My Skills</h2>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div className="skill" key={skill.name}>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-number" ref={(el) => (numbersRef.current[index] = el)}>0% </span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-fill" ref={(el) => (barsRef.current[index] = el)}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}