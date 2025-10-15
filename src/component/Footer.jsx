import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

export default function Footer() {
    const navigation = ['home', 'about', 'project', 'contact'] 
    const socialIcon = [
        { class: 'fb', link: 'https://web.facebook.com/habibiqballubis.lubis', icon: 'fa-brands fa-facebook-f' },
        { class: 'x', link: 'https://x.com/habibiqbaaaal', icon: 'fa-brands fa-x-twitter' },
        { class: 'ig', link: 'https://www.instagram.com/habib.iqbal.l/', icon: 'fa-brands fa-instagram' },
        { class: 'LI', link: 'https://www.linkedin.com/in/mhd-habib-iqbal-lubis/', icon: 'fa-brands fa-linkedin-in' }
    ]
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>MyPortfolio</h2>
                    <p>Showcasing my journey in web development & design.</p>
                </div>
                <div className="footer-nav">
                    <h3>Navigate</h3>
                    <ul>
                        {navigation.map((item) => (
                            <li key={item} ><a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Me</h3>
                    <div className="footer-social-icons">
                        {socialIcon.map((item, i) => (
                            <a className={item.class} href={item.link} target='_blank' key={i}>
                                <i>
                                    <FontAwesomeIcon icon={item.icon} />
                                </i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 MyPortfolio. All rights reserved.</p>
            </div>
        </footer>
    )
}