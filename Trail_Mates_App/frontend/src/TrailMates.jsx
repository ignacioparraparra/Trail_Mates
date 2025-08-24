import { Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './components/dashboard.component.jsx';
import Home from './components/home.component.jsx';
//import LoginButton from './components/login.component.jsx';
//import LogoutButton from './components/logout-component.jsx';

export default function TrailMates() {
  const { isAuthenticated, isLoading, error} = useAuth0();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
