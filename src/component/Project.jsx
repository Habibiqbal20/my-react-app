import '../assets/main.css';
import gsap from '../assets/gsapSetup';
import fotoProjectOne from '../assets/project/Screenshot (515).png';
import fotoProjectTwo from '../assets/project/Screenshot (516).png';
import { useEffect } from 'react';

export default function Project() {

    const project = [
        {
            foto: fotoProjectOne,
            title: 'Tesya Lobster Farm',
            deskription: 'Website ini dipergunakan sebagai salah satu media promosi bagi pemilih usah lobster air tawar dengan menampilkan setiap detail dari produk yang dijual, para pengunjung juga dapat memberikan review untuk setiap jenis lobster yang di jual. Website ini menggunakan bahasa pemrograman HTML, CSS, PHP, JavaScript, MySQL.'
        },
        {
            foto: fotoProjectTwo,
            title: 'Tesya Catalog',
            deskription: 'Membuat aplikasi berbasis website menggunakan HTML, CSS, PHP, JavaScript, MySQL untuk menampilkan produk UMKM yang dijual masyarakat dengan menampilkan foto produk, harga, nomor hp dan informasi lainnya serta menerapkan UML diagram dalam pengembangan software berbasis website.'
        },
    ]

    useEffect(() => {
        gsap.utils.toArray(".card").forEach((card, i) => {
            gsap.fromTo(card,
                {
                    x: i % 2 === 0 ? -300 : 300,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 35%",
                        scrub: true,
                        //markers: true,
                    }
                }
            );
            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    y: -10,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    y: 1,
                    duration: 0.2,
                    ease: "power2.inOut"
                });
            });
        });
    })

    return (
        <section className="projects" id="project">
            <h4>My Projects</h4>
            <div className="grid">
                {project.map((item, i) => (
                    <div className="card" key={i}>
                        <img src={item.foto} alt="Project 1"></img>
                        <div className="card-content">
                            <h3>{item.title}</h3>
                            <p>{item.deskription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}