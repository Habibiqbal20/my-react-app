import '../assets/main.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import CV from '../assets/New_CV_ATS.pdf';
import manualPDF from "../assets/Skripsi.pdf";

export default function Contact() {
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxOFrbkRVV2sHQ3jtcmy-OAInxA-BaRio3Lobu4JCdLrHwGo800aPrmzTfHEPrS0NwGAw/exec";

    const [formData, setFormData] = useState({ nama: "", email: "", pesan: "" });
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                body: new FormData(e.target),
            });
            console.log("Success!", response);
            setShowAlert(true);
            setFormData({ nama: "", email: "", pesan: "" });
            e.target.reset();
            setTimeout(() => setShowAlert(false), 10000);
        } catch (err) {
            console.error("Error!", err);
        } finally {
            setLoading(false);
        }
    };

    const download = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'Curriculum Vitae Habib Iqbal.pdf';
        link.click();
    }
    return (
        <section className="contact" id="contact">
            <div className={`alert-float ${showAlert ? "show" : ""}`} id="alertBox">
                <span className="alert-text">
                    ✅ Message sent successfully!
                </span>
                <button
                    className="alert-close"
                    id="closeAlert"
                    onClick={() => setShowAlert(false)}
                >
                    &times;
                </button>
            </div>
            <div className="container">
                <h2>Contact Me</h2>
                <form className="contact-form" name="submit-to-google-sheet" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="nama"
                            required
                            value={formData.nama}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            name="pesan"
                            required
                            value={formData.pesan}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    {!loading ? (
                        <button type="submit" className="btn kirim">
                            Send Message
                        </button>
                    ) : (
                        <button type="button" className="btn loading" disabled>
                            <span className="btn-text">Sending...</span>
                            <span className="spinner"></span>
                        </button>
                    )}
                </form>
                <div className="download-cv">
                    <button className="btn download-btn" id="downloadBtn" onClick={download}>
                        Download My CV
                    </button>
                </div>
            </div>
        </section>
    )
}