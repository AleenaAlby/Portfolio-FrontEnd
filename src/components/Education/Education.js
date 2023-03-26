import React, { useState, useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
    const [showLine, setShowLine] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                const timer = setTimeout(() => {
                    setShowLine(true);
                }, 1000);
                return () => clearTimeout(timer);
            }
        }, { threshold: 0.5 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="education-section">
            <div className="university" ref={sectionRef}>
                <div className="university-info">
                    <h2 className="education-title">Education</h2>
                    <div className="university-details">
                        <img src={process.env.PUBLIC_URL + '/coventry_uni_logo.png'} alt="Coventry University Logo" className="university-logo" />
                        <div className="university-text">
                            <h3 className="university-name">Coventry University</h3>
                            <p className="degree-info">MSc Data Science & Computational Intelligence</p>
                            <p className="graduation-info">2022 - 2023</p>
                        </div>
                    </div>
                    {showLine && <div className="hr-line"></div>}
                    <div className="university-details">
                        <img src={process.env.PUBLIC_URL + '/mahatma_gandhi_uni_logo.png'} alt="Mahatma Gandhi University Logo" className="university-logo" />
                        <div className="university-text">
                            <h3 className="university-name">Mahatma Gandhi University</h3>
                            <p className="degree-info">Bachelor of Computer Application</p>
                            <p className="graduation-info">2015 - 2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Education;
