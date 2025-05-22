import './App.css'
import { Routes, Route} from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LockerDetails from './components/lockers/LockerDetails';
import ContainerDetails from './components/containers/ContainerDetails';
import LockerList from './components/lockers/LockerList';
import LockerLabel from './components/lockers/LockerLabel';


function App() {
  return (
      <Routes>
        {/* initial layout plan -- with home screen and validation */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="lockerlist" element={<LockerList />} />
        <Route path="lockerlist/:lockerId" element={<LockerDetails />} />
        <Route path="lockerlist/:lockerId/:containerId" element={<ContainerDetails />} />



        {/* <Route path="login/dashboard/lockerlist" element={<Dashboard />} >
          <Route 
            path=":lockerName"
            element={<LockerDetails />}
          />
        </Route> */}

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
