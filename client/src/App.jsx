import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import IDDetails from './pages/IDDetails';
import SellerDashboard from './pages/SellerDashboard';
import AddID from './pages/AddID';
import AdminPanel from './pages/AdminPanel';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/id/:id" element={<IDDetails />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/add" element={<AddID />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
