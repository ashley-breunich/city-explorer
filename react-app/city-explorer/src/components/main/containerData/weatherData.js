import React from 'react';

const WeatherData = props => {

  return (
    <section>
      <h3>Results from the Dark Sky API</h3>
      <ul className='weather-results'></ul>
    </section>
  );
};

export default WeatherData;