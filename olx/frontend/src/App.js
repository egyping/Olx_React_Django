// Axios

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import AdCreate from "./components/AdCreate";
import AdDetails from "./components/AdDetails";
import { AdList } from "./components/AdList";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {AuthContextProvider} from "./contexts/AuthContexts"



export default function App() {
  return (
    <Router>
      <AuthContextProvider>
      <div>
        <Navbar />

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
