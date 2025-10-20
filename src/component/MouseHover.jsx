import { useEffect } from "react";

// const baseColor = "#1d1d1dff";
const baseColor = "#1e1e2f";

export default function MouseHover() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.pageX;
            const y = e.pageY;

            document.body.style.background = `
            radial-gradient(circle at ${x}px ${y}px, 
            rgba(0, 224, 255, 0.08), 
            ${baseColor} 100px)
        `;
        };

        const handleMouseLeave = () => {
            document.body.style.background = `
            radial-gradient(circle at -9999px -9999px, 
            rgba(0, 224, 255, 0), 
            ${baseColor} 100px)
        `;
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return null;
}
