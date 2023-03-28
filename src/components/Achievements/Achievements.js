import React from 'react';
import { Card } from 'react-bootstrap';
import './Achievements.css';

const Achievements = ({ certifications }) => {
    const defaultCertification = {
        logo: 'default_image.png', // Replace with the default image path
        cert_name: 'Default-Name',
        cert_date: 'Default-Date',
    };

    if (certifications.length === 0) {
        certifications = [defaultCertification];
    }
    return (
        <div className="achievements-container">
            <h2>Achievements and Certifications</h2>
            <div className="certifications">
                <div className="certification-cards">
                    {certifications.map((certification, index) => (
                        <Card className="achievement-card" key={index}>
                            <Card.Img variant="top" src={certification.logo} className="certification-logo" />
                            <Card.Body>
                                <Card.Title>{certification.cert_name}</Card.Title>
                                <Card.Text className="certification-date">{certification.cert_date}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
