import './App.css'
import { Routes, Route} from "react-router-dom";
// import parent jsx files here
import Main from './components/Main';
import About from './components/About';
import AuthModal from './components/AuthModal';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LockerDetails from './components/lockers/LockerDetails';
import ContainerDetails from './components/containers/ContainerDetails';


function App() {
  return (
      <Routes>
        {/* initial layout plan -- with home screen and validation */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<AuthModal />} />

        <Route path="login/dashboard/lockerlist" element={<Dashboard />} >
          <Route 
            path=":lockerName"
            element={<LockerDetails />}
          />
        </Route>

        {/* alternative route layout -- just boxes and add boxes form */}

        {/* <Route index element={<ContainerList />}>
          <Route
            path=":containerId"
            element={ContainerDetails}
          />
        </Route>
        <Route path="about" element={<About />} /> */}
      

      </Routes> 
    );

}

export default App
