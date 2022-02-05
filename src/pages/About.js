import React from 'react';
import {useNavigate} from 'react-router-dom';


const cities = ["London", "Ontario", "Chicago"];
const About = () => {
    const navigate = useNavigate();
  return (
  <div>
      <h1>About</h1>
      {cities.map((cities,index) => {
          return <h3 onClick={() => navigate(`/Details/${index}`)}>{cities}</h3>
      }

      )}
      </div>
    );
};

export default About;




    
