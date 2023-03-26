import React from 'react';
import HomePage from './components/HomePage/HomePage';
import Education from './components/Education/Education';
import Quote from './components/Quote/Quote';
import Achievements from './components/Achievements/Achievements';
import WorkExperience from './components/WorkExperience/WorkExperience';

const certifications = [
    {
        logo: 'az.png',
        name: 'Microsoft Certified: Azure Fundamentals',
        date: 'January 2022',
    },
    {
        logo: 'coventry_uni_logo.png',
        name: 'Certification 2',
        date: 'February 2022',
    },
    // ...
];

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
  return (
      <div className="App">

          <HomePage />
          <Education />
          <WorkExperience experiences={experiences} />
          <Achievements certifications={certifications} />
          <Quote />

      </div>
  );
}

export default App;
