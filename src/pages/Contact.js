import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();
    const cars = ["BMW", "Benz", "Range Rover"];
  return (
    <div>
        <h1>Contact</h1>
        {cars.map((cars,index) => {
            return <h3 onClick={() => navigate(`/Details/${index}`)}>{cars}</h3>
        })}

        
        </div>
  );
};

export default Contact;



