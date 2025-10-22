import React from 'react'
import Tondi from '../assets/_MG_6573.JPG'
import Oyen from '../assets/_MG_6580.JPG'

export default function Tribute() {
    const tribute = [
        {
            Name: 'Tondi',
            Born: 'N/A',
            Status: 'Rest In Peace',
            foto: Tondi,
        },
        {
            Name: 'Oyen',
            Born: '06-May-2024',
            Born: 'Missing',
            foto: Oyen,
        },
    ]

    return (
        <div className="container-tribute">
            <div className="inner-container">
                <div className="title-tribute">
                    <h4>Tribute to My Cat</h4>
                </div>
                <div className="content-tribute">
                    {tribute.map((content, i) => (
                        <div className="card-tribute" key={i} style={{ "--i": i }}>
                            <img src={content.foto} alt="" />
                            <div className="information">
                                <div className="name">
                                    <h3>Nama : {content.Name}</h3>
                                </div>
                                <div className="born">
                                    <p>{content.Born}</p>
                                </div>
                                <div className="status">
                                    <p>{content.Status}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
