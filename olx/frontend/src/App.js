// Axios
import axios from "axios"
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"


function AdList() {
  const [ads, setAds] = useState(null)

  useEffect( () => {
    function fetchAds() {
      axios.get("http://0.0.0.0:8000/api/ads/")
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





export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/" element={<AdList/>} />
        </Routes>
      </div>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
