

import { useEffect, useState } from "react";
import axios from "axios"
import { API } from "../api";


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
        {ads && ads.map((ad, i) => {
          return (
            <div key={i}>
            Ad #{ad.id}: {ad.title}
            </div>
          )
        })}
      </div>
    );
  }
  