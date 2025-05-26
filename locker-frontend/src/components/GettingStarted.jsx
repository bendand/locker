// for main image/carousel in home page, overlaid with 'get started' button

// import attic-boxes from './assets'
import LockerList from "./lockers/LockerList";


import { Link } from "react-router-dom";

export default function GettingStarted() {
    return (
        <main>
            <section className="homepag-content">
                <img className="homepage-image" src="george-pagan-iii.jpg" alt="boxes in an attic" />
                <h3>Outsource your organizational overhead</h3>
                <p>
                    Locker is your bookkeeper for everything storage-related 
                </p>
                <div>
                    <Link to={`lockerlist`} element={<LockerList />}><button>Get Started</button></Link>
                </div>
            </section>
        </main>
    );
}