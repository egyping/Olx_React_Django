

import { useEffect, useState } from "react";
import axios from "axios"
import { API } from "../api";
import { NavLink } from "react-router-dom";
// import { BASE_URL } from '../api';

export function AdList() {
    const [ads, setAds] = useState(null)
  
    useEffect( () => {
      function fetchAds() {
        axios.get(API.ads.list)
        .then( response => {
            console.log(response.data)
            setAds(response.data)
        })}
      fetchAds()
    }, [])
  

    return (
      
      <div>
        {!ads && <p>No available ads now!</p>}
        {ads && ads.map((ad, i) => {
          return (
            <div key={i}>
            <NavLink to={`/ads/${ad.id}`}>{ad.title}</NavLink>
            </div>
          )
        })}
      </div>
    );
  }
  

  // export function AdList() {
  //   const [ads, setAds] = useState([]);
  
  //   useEffect(() => {
  //     axios.get(`${BASE_URL}/ads/`)
  //       .then(response => {
  //         setAds(response.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   }, []);
  
  //   if (ads.length === 0) {
  //     return <p>No Available Ads NOW!</p>;
  //   }
  //     return (
  //       <div>
  //         <h1>Ads List</h1>
  //         <ul>
  //           {ads.map(ad => (
  //             <li key={ad.id}>
  //               <NavLink to={`/ads/${ad.id}`} >{ad.title}</NavLink>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     );