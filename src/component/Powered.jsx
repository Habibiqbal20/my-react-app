import React, { useEffect, useRef } from "react";
import ColorThief from "colorthief";

// Import logo
import Html from "../assets/logo/html5-icon.png";
import JS from "../assets/logo/javascript.png";
import reactLogo from "../assets/logo/react_native_icon.png";
import Sass from "../assets/logo/sass_icon.png";
import Gsap from "../assets/logo/gsap-white.svg";
import Vite from "../assets/logo/vite.svg";
import Github from "../assets/logo/github-mark-white.png";
import Git from "../assets/logo/Git-Logo-2Color.png";

export default function Powered() {
    const logoRefs = useRef([]);

    const logos = [
        { image: Html },
        { image: JS },
        { image: Sass },
        { image: Gsap },
        { image: reactLogo },
        { image: Vite },
        { image: Github },
        { image: Git },
    ];

    useEffect(() => {
        const colorThief = new ColorThief();

        logoRefs.current.forEach((img) => {
            const applyGlow = () => {
                try {
                    const [r, g, b] = colorThief.getColor(img);
                    img.style.filter = `drop-shadow(0 0 20px rgb(${r},${g},${b}))`;
                } catch {
                    img.style.filter =
                        "drop-shadow(0 0 15px #fff) drop-shadow(0 0 30px #fff)";
                }
            };
            img.complete ? applyGlow() : img.addEventListener("load", applyGlow);
        });
    }, []);

    return (
        <section className="powered">
            <div className="inner-powered">
                <div className="title">
                    <h4>The Code Behind the Magic</h4>
                </div>
                <div className="content-powered">
                    {logos.map((logo, i) => (
                        <div className="card-lang" key={i}>
                            <img
                                ref={(el) => (logoRefs.current[i] = el)}
                                src={logo.image}
                                alt="tech logo"
                                crossOrigin="anonymous"
                                draggable="false"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
