import {useEffect, useState} from 'react';
import axios from 'axios';

export default () => {
  const [results, setResults] = useState([]);
  const getData = () => {
    axios({
      method: 'GET',
      url: 'https://type.fit/api/quotes',
    })
      .then(res => setResults(res.data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getData('text');
  }, []);
  return [results, getData];
};
