// for main image/carousel in home page, overlaid with 'get started' button
import AuthModal from "./AuthModal";
// import attic-boxes from './assets'

import { Link } from "react-router-dom";

export default function GettingStarted() {
    return (
        <main>
            <section>
                <img src="./assets/attic-boxes.jpg" alt="boxes in an attic"/>
                <h3>Outsource your organizational overhead</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
                    consequat velit, sit amet tempus lectus. Nam mattis dignissim dolor.
                </p>
            </section>
            <div>
                <Link to={`login`} element={<AuthModal />}><button>Get Started</button></Link>
            </div>
        </main>
    );
}