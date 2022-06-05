import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetCategoryById = (API) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios(API);
      setCategory(response.data);
    }
    getData();
  }, [API]);

  return category;
};

export default useGetCategoryById;
