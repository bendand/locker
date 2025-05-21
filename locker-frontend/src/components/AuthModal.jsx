import { userCredentials } from "../assets/util";
import { Link } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";

export default function AuthModal() {
    function handleInputValidation() {

    }

    return (
        <section>
            <Header />
            <form action="" method="">
                <div>
                    <label for="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div>
                    <label for="password">Enter your password: </label>
                    <input type="password" name="password" id="password" minLength={8} required />
                </div>
                <div>
                    <Link to="dashboard/lockerlist" element={<Dashboard />}><button>Submit</button></Link>
                </div>
            </form>
        </section>
    );
}