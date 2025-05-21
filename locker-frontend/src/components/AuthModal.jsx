import { userCredentials } from "../assets/util";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";



import Header from "./Header";
import Dashboard from "./Dashboard";

export default function AuthModal() {
    let navigate = useNavigate();

    function handleInputValidation() {
        console.log("handling input validation");
        return navigate("dashboard/lockerlist");
    }

    return (
        <section>
            <Header />
            <form action="" method="">
                <div>
                    <label htmlFor="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="password">Enter your password: </label>
                    <input type="password" name="password" id="password" minLength={8} required />
                </div>
                <div>
                    <button onClick={handleInputValidation}>Submit</button>
                </div>
            </form>
        </section>
    );
}