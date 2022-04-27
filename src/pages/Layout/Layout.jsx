import { Outlet, Link } from "react-router-dom";
import './Layout.css';

export default function Layout() {
    return(
        <div className="layout">
            <nav>
                <div className="nav-bar">
                    <Link to="/">
                        <img className="nav-img" src="./images/logo.svg" alt=""/>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}