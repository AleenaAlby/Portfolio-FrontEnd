import React, { useCallback } from 'react';
import TSParticles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './HomePage.css';

const HomePage = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
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
                            value: '#ffffff',
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
            <div className="intro-container">
                {/*<img src="your-image-url" alt="Your Name" className="profile-image" />*/}
                <h1>Aleena Alby</h1>
                <h2>Developer</h2>
            </div>
        </div>
    );
};

export default HomePage;
