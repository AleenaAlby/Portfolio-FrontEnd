import React, {useState, useEffect } from 'react';
import HomePage from './components/HomePage/HomePage';
import Education from './components/Education/Education';
import Quote from './components/Quote/Quote';
import Achievements from './components/Achievements/Achievements';
import WorkExperience from './components/WorkExperience/WorkExperience';
// import AboutMe from './components/AboutMe/AboutMe';
import axios from 'axios';


const experiences = [
    {
        jobTitle: 'Software Engineer',
        company: 'Emdeon Digital Service',
        duration: 'January 2020 - June 2021',
        description: 'Developed and maintained web applications using React and Node.js.'
    },
    {
        jobTitle: 'System Administrator',
        company: 'Reunion Fire systems Pvt.Ltd',
        duration: 'November 2018 - December 2019',
        description: 'Designed and implemented responsive websites using HTML, CSS, and JavaScript.'
    }
];
function App() {

    const[certifications, setcertifications] = useState([]);
    const[Education, setEducation] = useState([]);

    useEffect( ()=>{
            axios.get('http://127.0.0.1:8000/api/certifications/')
                .then(res =>{
                    setcertifications(res.data);
                })
                .catch(err =>{
                    console.log(err);
                });
        }, []);

    useEffect(()=>{
            axios.get('http://127.0.0.1:8000/api/educations/')
            .then(res =>{
                setEducation(res.data);
            })
            .catch(err =>{
                console.log(err);
            });
        }, [] )

  return (
      <div className="App">

          <HomePage />

          <Education Education={Education}/>
          <WorkExperience experiences={experiences} />
          {/*{certifications.map(certification =>(*/}
          {/*    <Achievements certifications={certifications} />*/}
          {/*))}*/}
          <Achievements certifications={certifications} />
          <Quote />

      </div>
  );
}

export default App;
