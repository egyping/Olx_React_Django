import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API } from '../api';

// http://127.0.0.1:8000/api/ads/${id}
// http://localhost:3000/ads/1
// http://127.0.0.1:8000/api/ads/1/


export default function AdDetails() {
  const [ad, setAd] = useState(null);
  // const {id} = useParams();
  //console.log(id)
  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    function fetchAd() {
      //axios.get("http://127.0.0.1:8000/api/ads/1/")
      axios.get(API.ads.retrieve(id))
        .then(response => {
          console.log(response.data)
          setAd(response.data);
        })
      }
      fetchAd() 
    }, []);

  return (
    <div>

       {!ad && "Loading ... "}
       {ad && (
          <div>
            <h1>{ad.title}</h1>
          </div>
       )}
    </div>
  );
}


