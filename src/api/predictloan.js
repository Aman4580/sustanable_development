import axios from 'axios';

export const Predictloan = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'backend url',
        headers: {
          'content-type': 'application/json',
        },
        data:inputData
    };


      let response = await axios(options);
      return response.data;


  } catch (error) {
    console.error(error.response.data); 
  }
};