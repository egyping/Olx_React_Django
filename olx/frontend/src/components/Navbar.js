import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContexts"
import { Link } from "react-router-dom"

export default function Navbar(){
    const {user} =  useContext(AuthContext)
    console.log(user)
    return(
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
                <li>
                <Link to="/logout">Logout</Link>
              </li>
            ) : (
                <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            
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

    )
}