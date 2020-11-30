import React from 'react';
import Grudge from './Grudge';

// Context:
import {GrudgeContext} from './GrudgeProvider';

const Grudges = React.memo(() => {
  const {grudges} = React.useContext(GrudgeContext);
  
  return (
    <section className="Grudges">
      <h2>Grudges ({grudges.length})</h2>
      {grudges.map(grudge => (
        <Grudge key={grudge.id} grudge={grudge} />
      ))}
    </section>
  );
});

export default Grudges;
