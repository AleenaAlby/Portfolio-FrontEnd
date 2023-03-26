import React from 'react';
import './WorkExperience.css';

const WorkExperience = ({ experiences }) => {
    return (
        <div className="work-experience-container">
            <h2>Work Experience</h2>
            <ul className="experience-list">
                {experiences.map((experience, index) => (
                    <li key={index} className="experience-item">
                        <h3>{experience.jobTitle}</h3>
                        <h4>{experience.company}</h4>
                        <p>{experience.duration}</p>
                        <p>{experience.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkExperience;
