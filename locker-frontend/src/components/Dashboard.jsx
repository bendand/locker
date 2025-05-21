import LockerList from "./lockers/LockerList";
import Footer from "./Footer";
import UserIcon from "./nav-icons/UserIcon"

export default function Dashboard() {
    return (
        <>
            <UserIcon />
            <LockerList />
            <Footer />
        </>
    );
}