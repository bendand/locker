
import Button from "./elements/button/Button";

export default function GettingStarted({ onStartAuthentication }) {

    return (
        <main>
            <section className="homepage-content">
                <div className="left-homepage">
                    <img 
                        className="homepage-image" 
                        src="george-pagan-iii.jpg" 
                        alt="rows and columns of geometric shapes" 
                    />
                </div>
                <div className="right-homepage">
                    <h3>Outsource your organizational overhead</h3>
                    <p>
                        Locker is your bookkeeper for everything storage-related 
                    </p>
                    <div>
                        <Button onClick={onStartAuthentication}>Get Started</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}