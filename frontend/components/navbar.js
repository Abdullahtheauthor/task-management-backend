import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="navbar">
   
      {isLoggedIn && (
        <button onClick={() => navigate('/profile')}>
          Profile
        </button>
      )}
    </nav>
  );
};

export default Navbar;
