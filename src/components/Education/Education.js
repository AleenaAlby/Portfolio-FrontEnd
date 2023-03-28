import React, { useState, useEffect, useRef } from 'react';
import './Education.css';

const Education = ({ educationData }) => {
    const defaultCertification = {
        university_logo: 'default_image.png', // Replace with the default image path
        university_name: 'Default-Name',
        cert_date: 'Default-Date',
    };

    if (educationData.length === 0) {
        educationData = [defaultCertification];
    }
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
            <h2 className="education-title">Education</h2>
            <div className="university" ref={sectionRef}>
                {educationData.map((education, index) => (
                    <div key={index}>
                        <div className="university-details">
                            <img src={education.university_logo} alt="Coventry University Logo" className="university-logo" />
                            <div className="university-text">
                                <h3 className="university-name">{education.university_name}</h3>
                                <p className="degree-info">{education.course_name}</p>
                                <p className="graduation-info">{education.course_start_year} - {education.course_end_year}</p>
                            </div>

                        </div>
                        {showLine && <div className="hr-line"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;

