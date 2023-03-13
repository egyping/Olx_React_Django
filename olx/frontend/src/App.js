// Axios

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import AdDetails from "./components/AdDetails";
import { AdList } from "./components/AdList";


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

        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/ads/:id" element={<AdDetails/>}  />
          <Route path="/" element={<AdList/>} exact />
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
