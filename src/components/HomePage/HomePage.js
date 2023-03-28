import React, { useCallback, useEffect, useState} from 'react';
import TSParticles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './HomePage.css';
import backgroundVideo from '../../assets/v11.mp4';
import resumePDF from '../../assets/AleenaAlby003.pdf';



const HomePage = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    const [headerText, setHeaderText] = useState('');
    const aleenaText = "Hi, I'm Aleena"

    useEffect(() => {
        let textIndex = 0;
        const interval = setInterval(() => {
            if (textIndex < aleenaText.length) {
                setHeaderText((prevText) => prevText + aleenaText.charAt(textIndex));
                textIndex++;
            } else {
                clearInterval(interval);
            }
        }, 150); // You can adjust the typing speed by changing this value

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-page">
            <TSParticles
                className="particles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: '#F7F7F7',
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 5,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#0d0d0c',
                        },
                        links: {
                            color: '#0d0d0c',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: 'triangle',
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                    pauseOnBlur: true,
                }}
            />
            <video className="background-video" src={backgroundVideo} autoPlay muted loop />
            <div className="caption-text">Kovalam Beach, Kerala, India - Video by Pexels</div>
            <div className="intro-container">
                {/*<img src="your-image-url" alt="Your Name" className="profile-image" />*/}
                {/*<h1 className="Aleena">Hi, I'm Aleena</h1>*/}
                <h1 className="Aleena">{headerText}</h1>
                <p className="intro2">I am an experienced web developer with a passion for building engaging and dynamic websites using the latest technologies.
                    My expertise lies in React JS, Python, Django, and Javascript. I am also interested in data science and machine learning.
                    I am always eager to learn new things and explore new technologies.</p>
                <a href={resumePDF} download className="download-link">
                    <button className="download-button" onClick={() => { /* Handle click event here */ }}>
                        <i className="download-icon">Resume</i>
                    </button>
                </a>
                <p>I am presently working on building my portfolio, with a focus on both backend and front end development.
                    Feel free to browse the site and, if you have any suggestions or feedback,
                    please don't hesitate to reach out to me.</p>
            </div>
        </div>
    );
};

export default HomePage;
