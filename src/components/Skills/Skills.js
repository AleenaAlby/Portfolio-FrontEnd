import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPython } from '@fortawesome/free-solid-svg-icons';
import { faPython, faReact, faHtml5, faCss3Alt, faFigma, faJira, faNpm, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import DjangoIcon from './django.svg';
import JavaScriptIcon from './javascript.svg';
import FirebaseIcon from './firebase.svg';
import HerokuIcon from './heroku.svg';
import NetlifyIcon from './netlify.svg';
import TableauIcon from './tableau.svg';
import PowerBIIcon from './powerbi.svg';
const Skills = () => {
    const icons = [
        {icon: faPython, color: "#3776AB", name: "Python"},
        {icon: DjangoIcon, color: "#092E20", name: "Django", isCustom: true},
        // {icon: faDjango, color: "#092E20", name: "Django"},
        {icon: faReact, color: "#61DAFB", name: "React"},
        {icon: faHtml5, color: "#E34F26", name: "HTML5"},
        {icon: faCss3Alt, color: "#1572B6", name: "CSS3"},
        {icon: JavaScriptIcon, color: "#F7DF1E", name: "JavaScript", isCustom: true},
        // {icon: faJavaScript, color: "#F7DF1E", name: "JavaScript"},
        {icon: faFigma, color: "#F24E1E", name: "Figma"},
        {icon: faJira, color: "#0052CC", name: "Jira"},
        {icon: faNpm, color: "#CB3837", name: "npm"},
        {icon: faMicrosoft, color: "#00A4EF", name: "Azure"},
        {icon: FirebaseIcon, color: "#FFCA28", name: "Firebase", isCustom: true},
        {icon: HerokuIcon, color: "#430098", name: "Heroku", isCustom: true},
        {icon: NetlifyIcon, color: "#00C7B7", name: "Netlify", isCustom: true},
        {icon: TableauIcon, color: "#E97627", name: "Tableau", isCustom: true},
        {icon: PowerBIIcon, color: "#F2C811", name: "PowerBI", isCustom: true},
    ];

    return (
        <div className="skills">
            <h2 className="skills-heading">What I Do</h2>
            <p className="skills-description"></p>
            <div className="skills-logos">
                {icons.map((iconObj, index) => (
                    <div className="skill-logo" key={index}>
                        {iconObj.isCustom ? (
                            <img src={iconObj.icon} alt={iconObj.name} style={{width: '3em', height: '3em', color: iconObj.color}} />
                        ) : (
                            <FontAwesomeIcon icon={iconObj.icon} size="3x" style={{color: iconObj.color}} />
                        )}
                        <span className="skill-name">{iconObj.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
