import React from 'react'
import batGirl from '../assets/my_cats/PXL_20230326_212705857.jpg'
import apin from '../assets/my_cats/PXL_20240504_211643566.jpg'
import kunis from '../assets/my_cats/PXL_20240327_144614073.jpg'
import Oyen from '../assets/my_cats/_MG_6580.JPG'
import Kocan from '../assets/my_cats/PXL_20241005_121424569.jpg'
import Tondi from '../assets/my_cats/_MG_6573.JPG'
import Cimeng from '../assets/my_cats/4 Sep 20_59.lmc_8.4.jpg'
import Cimung from '../assets/my_cats/4 Sep 20_59.lmc_8.4.jpg'

export default function Tribute() {
    const cat = [
        {
            nama: 'Bat Girl',
            lahir: 'N/A',
            foto: batGirl
        },
        {
            nama: 'Apin',
            lahir: 'N/A',
            foto: apin
        },
        {
            nama: 'Kunis',
            lahir: 'N/A',
            foto: kunis
        },
        {
            nama: 'Kocan',
            lahir: 'N/A',
            foto: Kocan
        },
        {
            nama: 'Oyen',
            lahir: 'N/A',
            foto: Oyen
        },
        {
            nama: 'Tondi',
            lahir: 'N/A',
            foto: Tondi
        },
        {
            nama: 'Cimeng',
            lahir: 'N/A',
            foto: Cimeng
        },
        {
            nama: 'Cimung',
            lahir: 'N/A',
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
                    {cat.map((myCat, i) => (
                        <div className="card-tribute" key={i}>
                            <img src={myCat.foto} alt="" />
                            <div className="information">
                                <h3>{myCat.nama}</h3>
                                <p>{myCat.lahir}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
