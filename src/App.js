import React, {useState, useEffect } from 'react';
import HomePage from './components/HomePage/HomePage';
import Education from './components/Education/Education';
import Quote from './components/Quote/Quote';
import Achievements from './components/Achievements/Achievements';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Skills from './components/Skills/Skills';
import axios from 'axios';


const experiences = [
    {
        jobTitle: 'Software Engineer',
        company: 'Emdeon Digital Service',
        duration: 'January 2020 - June 2021',
        description: 'Developed and maintained web applications using React and Django REST Frameworks.'
    },
    {
        jobTitle: 'System Administrator',
        company: 'Reunion Fire systems Pvt.Ltd',
        duration: 'November 2018 - December 2019',
        description: 'Ensuring that computer systems and networks are running efficiently, effectively, and securely, to support the business operations.'
    }
];
function App() {

    const[certifications, setcertifications] = useState([]);
    const [educationData, setEducationData] = useState([]);

    useEffect( ()=>{
            axios.get('https://portfolio-aleena.herokuapp.com/api/certifications/')
                .then(res =>{
                    setcertifications(res.data);
                })
                .catch(err =>{
                    console.log(err);
                });
        }, []);

    useEffect(()=>{
            axios.get('https://portfolio-aleena.herokuapp.com/api/educations/')
            .then(res =>{
                setEducationData(res.data);
            })
            .catch(err =>{
                console.log(err);
            });
        }, [] )

  return (
      <div className="App">

          <HomePage />

          {/*<Education Education={educationData}/>*/}
          <Education educationData={educationData}/>
          <Skills />
          <WorkExperience experiences={experiences} />
          {/*{certifications.map(certification =>(*/}
          {/*    <Achievements certifications={certifications} />*/}
          {/*))}*/}
          <Achievements certifications={certifications} />
          <ContactMe />
          <Quote />
          <Footer />

          <ScrollToTop />
      </div>
  );
}

export default App;
