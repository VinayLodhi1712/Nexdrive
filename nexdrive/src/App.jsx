import NavBar from './Components/Navbar';
import Home from './Components/Home/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        
      </Router>
    </>
  )
}

export default App
