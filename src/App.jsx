import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './components/Navbar.jsx';
import HomeScreen from './screens/HomeScreen.jsx'
import CartScreen from './screens/CartScreen.jsx';
import { Routes, Route,BrowserRouter as Router} from 'react-router-dom';
// import { Router } from 'express';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';




function App() {

  return (
    <>
    <div className="App">
    <Router>
        <Navbar/>
        <Routes>
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        {/* Add more routes as needed */}
        </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
