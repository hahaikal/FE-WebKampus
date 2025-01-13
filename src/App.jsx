import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Login from './Pages/Login'
import FormLogin from './Pages/FormLogin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/dosen" element={<FormLogin />} />
        <Route path="/login/mahasiswa" element={<FormLogin />} />
      </Routes>
    </Router>
  );
}