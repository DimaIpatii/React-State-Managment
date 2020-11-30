import React from 'react';

// *************************************
// Components:
// *************************************
import Grudges from './Grudges';
import NewGrudge from './NewGrudge';


const Application = () => {
  
  console.log('Print Grudges..');
  return (
    <div className="Application">
      <NewGrudge  />
      <Grudges  />
    </div>
  );
};

export default Application;

