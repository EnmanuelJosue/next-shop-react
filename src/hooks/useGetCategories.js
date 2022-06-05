import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetCategories = (API) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios(API);
      setCategories(response.data);
    }
    getData();
  }, [API]);

  return categories;
};

export default useGetCategories;
