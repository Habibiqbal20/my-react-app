import React from 'react'
import batGirl from '../assets/my_cats_min/PXL_20230326_212705857.jpg'
import apin from '../assets/my_cats_min/PXL_20240504_211643566.jpg'
import kunis from '../assets/my_cats_min/PXL_20240327_144614073.jpg'
import Oyen from '../assets/my_cats_min/PXL_20241206_130435371.jpg'
import Kocan from '../assets/my_cats_min/PXL_20240728_171408689.jpg'
import Tondi from '../assets/my_cats_min/_MG_6573.jpg'
import Cimeng from '../assets/my_cats_min/4 Sep 20_59.lmc_8.4.jpg'
import Cimung from '../assets/my_cats_min/20250720_170647_lmc_8.4.MP.jpg'

export default function Tribute() {
    const cats = [
        {
            nama: 'Bat Girl',
            lahir: 'N/A',
            status : 'Missing🤍',
            foto: batGirl
        },
        {
            nama: 'Apin',
            lahir: '21 April 2023',
            status : 'Missing🤍',
            foto: apin
        },
        {
            nama: 'Kunis',
            lahir: '21 April 2023',
            status : 'Missing🤍',
            foto: kunis
        },
        {
            nama: 'Kocan',
            lahir: '06 May 2024',
            status : '🥀🤍',
            foto: Kocan
        },
        {
            nama: 'Oyen',
            lahir: '06 May 2024',
            status : 'Missing🤍',
            foto: Oyen
        },
        {
            nama: 'Tondi',
            lahir: 'N/A',
            status : '🥀🤍',
            foto: Tondi
        },
        {
            nama: 'Cimeng',
            lahir: '29 April 2025',
            status : '🥀🤍',
            foto: Cimeng
        },
        {
            nama: 'Cimung',
            lahir: '29 April 2025',
            status : '🥀🤍',
            foto: Cimung
        },
    ]
    return (
        <div className="container-tribute">
            <div className="inner-container">
                <div className="title-tribute">
                    <h4>Tribute</h4>
                </div>
                <div className="content-tribute">
                    {cats.map((myCat, i) => (
                        <div className="card-tribute" key={i}>
                            <img src={myCat.foto} alt="" />
                            <div className="information">
                                <h3>{myCat.nama}</h3>
                                <p>{myCat.lahir}</p>
                                <p>{myCat.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
