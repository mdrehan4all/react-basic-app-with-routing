import { Link, Outlet } from "react-router-dom";

export default function Nav() {
    return (
      <>
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="abcd">Not found</Link></li>
          </ul>
          <Outlet/>
      </>
    )
}