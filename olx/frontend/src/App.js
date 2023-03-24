// Axios

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import AdCreate from "./components/AdCreate";
import AdDetails from "./components/AdDetails";
import { AdList } from "./components/AdList";
import Login from "./components/Login";
import {AuthContextProvider} from "./contexts/AuthContexts"



export default function App() {
  return (
    <Router>
      <AuthContextProvider>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/create-ad">Create new Ad</Link>
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
          <Route path="/create-ad" element={<AdCreate/>}  exact />
          <Route path="/" element={<AdList/>} exact />
          <Route path="/login" element={<Login/>} exact />
        </Routes>
      </div>
      </AuthContextProvider>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
