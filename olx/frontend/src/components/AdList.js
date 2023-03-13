

import { useEffect, useState } from "react";
import axios from "axios"
import { API } from "../api";
import { NavLink } from "react-router-dom";


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
  