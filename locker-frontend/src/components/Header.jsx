import { Link } from "react-router-dom";

import AboutPage from "./About";
import AuthModal from "./AuthModal";

export default function Header() {
    
    return (
        <header>
            <h4>Locker</h4>
            <nav className="main-nav">
                <ul>
                    <li><Link to={`/about`} element={<AboutPage />}>About Us</Link></li>  
                    <li><Link to={`/login`} element={<AuthModal />}>Log In</Link></li>
                </ul>
            </nav>
        </header>
    );
};