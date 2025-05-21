import './App.css'
import { Routes, Route} from "react-router-dom";
// import parent jsx files here
import Main from './components/Main';
import About from './components/About';
import AuthModal from './components/AuthModal';
import Home from './components/Home';
import Dashboard from './components/Dashboard';


function App() {


  return (
      <Routes>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<AuthModal />} />

        <Route path="dashboard/lockerlist" element={<Dashboard />} >
          <Route path="dashboard/lockerlist/:lockerId"/>
        </Route>

        {/* <Routes>
          <Route index element={<HomeScreen />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route 
            path='/'
            element={<Main />}
          />
          <Route 
            path='/about'
            element={<AboutPage />}
          />
          <Route 
            path='/validate'
            element={<Validation />}
          />

        </Routes> */}
      </Routes>
    );

}

export default App
