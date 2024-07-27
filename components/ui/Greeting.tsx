// components/Greeting.js

import React from 'react';

const Greeting = () => {
  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good Night';
    }
  };

  return <div>{getGreeting()}</div>;
};

export default Greeting;
