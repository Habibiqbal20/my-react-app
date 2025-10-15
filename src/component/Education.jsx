import '../assets/main.css';

export default function Education() {

    const timeline = [
        {
            title: 'STIE BINA KARYA',
            listItem : ['Address : Tebing Tinggi', 'Year : 2021 - 2025', 'Average Value : 3.7'],
            link: 'https://maps.app.goo.gl/UEHebYC8fWGBJacs8'
        },
        {
            title: 'SMA NEGERI 1 DOLOK BATU NANGGAR',
            listItem : ['Address : Serbelawan', 'Year : 2018 - 2021', 'Average Value : 8.5'],
            link: 'https://maps.app.goo.gl/ZLrjBMjs7AG5Zs6U7'
        },
        {
            title: 'SMP NEGERI 1 DOLOK BATU NANGGAR',
            listItem: ['Address : Serbelawan', 'Year : 2015 - 2018', 'Average Value : 3.7'],
            link: 'https://maps.app.goo.gl/YYPVnFmUVe9CeazQ7'
        },
        {
            title: 'SD NEGERI 091600',
            listItem: ['Address : Dolok Merangir', 'Year : 2009 - 2015', 'Average Value : 80'],
            link: 'https://maps.app.goo.gl/K4dx1wpnnguy9ohq5'
        },
    ]

    return (
        <>
            <div className="timeline-heading">
                <h4>Education History</h4>
            </div>
            <section className="timeline">
                <div className="container education-section">
                    {timeline.map((edu, i) => (
                        <div className="timeline-item" key={i}>
                            <div className="timeline-img"></div>
                            <div className="timeline-content js--fadeInLeft">
                                <a href={edu.link} target='_blank'>
                                    <h2>{edu.title}</h2>
                                </a>
                                {edu.listItem.map((item, j) => (
                                    <p key={j}>{item}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}