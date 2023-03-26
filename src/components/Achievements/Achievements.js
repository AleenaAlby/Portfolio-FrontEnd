import React from 'react';
import { Card } from 'react-bootstrap';
import './Achievements.css';

const Achievements = ({ certifications }) => {
    return (
        <div className="achievements-container">
            <h2>Achievements and Certifications</h2>
            <div className="certifications">
                {certifications.map((certification, index) => (
                    <Card className="achievement-card" key={index}>
                        <Card.Img variant="top" src={certification.logo} className="certification-logo" />
                        <Card.Body>
                            <Card.Title>{certification.name}</Card.Title>
                            <Card.Text className="certification-date">{certification.date}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
