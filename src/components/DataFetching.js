import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetching() {
  const [data, setData] = useState(''); 

  useEffect(() => {
    
    async function fetchData() {
      const result = await axios("https://api.adviceslip.com/advice"); 
      const data = result.data.slip; 
      setData(data); 
    }
    
    fetchData(); 
  
  }, [])
  
   return {data}; 
}

export default DataFetching