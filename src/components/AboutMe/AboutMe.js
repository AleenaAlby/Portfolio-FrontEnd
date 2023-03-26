import React from 'react';
import './AboutMe.css';

const AboutMeSection = () => {
    return (
        <div className="about-me-section">
            <div className="left-side">
                <h2 className="section-title">Know Me More</h2>
                <p className="section-text">
                    My name is Aleena Alby, and I am based in England, UK. In January 2022,
                    I graduated with distinction from Coventry University, where I earned my MSc in Data Science and Computational Intelligence. Currently,
                    I am actively attending interviews and facing rejections 😅. However, these setbacks only serve to encourage me and remind me that failure is a stepping stone to success 💪.
                    <br/><br/>
                    As I continue to navigate the world and learn how to live in it, I have discovered my passion and talent for web development.
                    I have honed my skills in React JS, Python Django, and JavaScript, which have allowed me to create engaging and dynamic websites.
                    Additionally, I am fascinated by machine learning and its potential applications in various industries.
                    <br/><br/>
                    On a personal level, I possess a unique blend of introverted and extroverted qualities.  deeply value honesty, integrity, and kindness.
                    I am a strong advocate for sustainability and environmental responsibility. I believe that we all have a role to play in preserving our planet for future generations.
                    <br/><br/>
                    Aside from my professional interests, I am a firm believer in the importance of lifelong learning and self-improvement. I am always eager to explore new technologies, embrace new challenges, and collaborate with like-minded individuals.
                    In my spare time, you can find me experimenting with new coding techniques or participating in online coding communities to broaden my horizons and sharpen my skills.

                </p>
            </div>
            <div className="right-side">
                <div className="content-container">
                    <div className="left-content">
                        <h3 className="small-title">
                            <a href="https://www.chess.com/openings/Kings-Pawn-Opening" target="_blank" rel="noopener noreferrer">My Best Move</a>
                        </h3>
                        <p className="best-move">King's Pawn Opening</p>
                        <p className="best-move">Queen's Gambit</p>
                    </div>
                    <div className="right-content">
                        <h3 className="small-title">
                            <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">My Best Song</a>
                        </h3>
                        <p className="best-song">Random Popular Song Title</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;

