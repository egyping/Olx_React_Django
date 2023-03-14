import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../api';


export default function AdDetails() {

  const [ad, setAd] = useState(null);
  // const {id} = useParams();
  //console.log(id)
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    axios.get(`${BASE_URL}/ads/${id}/`)
      .then(response => {
        console.log(response.data)
        setAd(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!ad) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{ad.title}</h1>
      <p>{ad.description}</p>
      <p>Make: {ad.make}</p>
      <p>Price: {ad.price}</p>
      <p>Seller: {ad.seller}</p>
      <p>Posted at: {ad.created}</p>

    </div>
  );
}





  
//   useEffect(() => {
//     function fetchAd() {
//       axios.get("http://127.0.0.1:8000/api/ads/2/")
//       //axios.get(API.ads.retrieve(id))
//         .then(response => {
//           console.log(response.data)
//           setAd(response.data);
//         })
//       }
//       fetchAd() 
//     }, [id]);

//   return (
//     <div>

//         {!ad && "Loading ... "}
//        {ad && (
//           <div>
//             <h1>{ad.title}</h1>
//           </div>
//        )}
//     </div>
//   );
// }


