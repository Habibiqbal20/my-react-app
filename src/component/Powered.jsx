import React from 'react'
import Html from '../assets/logo/html5-icon.png'
import JS from '../assets/logo/javascript.png'
import reactLogo from '../assets/logo/react_native_icon.png'
import Sass from '../assets/logo/sass_icon.png'
import Gsap from '../assets/logo/gsap-white.svg'
import Vite from '../../public/vite.svg'

export default function Powered() {

    const logo = [
        {image: Html},{image: JS},{image: Sass},{image: Gsap},{image: reactLogo},{image: Vite},
    ]

    return (
        <section className="powered">
            <div className="inner-powered">
                <div className="title">
                    <h4>The Code Behind the Magic</h4>
                </div>
                <div className="content-powered">
                    {logo.map((gambar, i) => (
                        <div className="card-lang" key={i}>
                            <img src={gambar.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
