import React from 'react';
import { Button } from 'react-bootstrap';

function SOSUser() {
  const handleClick = async () => {
    try {
      const id = '123'; // Replace '123' with the actual value of the ID
      const response = await fetch(`http://localhost:3402/api/v1/sos/send/6484e0a3c1ecbdb84e9ce595`, {
        method: 'POST'
      });

      if (response.ok) {
        // Handle the successful response if needed
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.log(error);
    }
  };

  return (
    <Button className='danger' onClick={handleClick}>
      SOS my Care-Taker
    </Button>
  );
}

export default SOSUser;
