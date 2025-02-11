import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FaFolder, FaWhmcs, FaWrench, FaInfoCircle, FaBars, FaChevronRight } from 'react-icons/fa'; // Import icons
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import About from './pages/About';
import './App.css';

const App: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <div className={`app-container ${isCollapsed ? 'collapsed' : ''}`}>
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
          <button className="toggle-button" onClick={toggleSidebar}>
            {isCollapsed ? <FaBars /> : <FaChevronRight className={isCollapsed ? '' : 'rotated'} />}
          </button>
          <div className="logo-container">
            <h1>{!isCollapsed ? 'Logo' : 'L'}</h1>
          </div>
          <nav>
            <ul>
              <NavItem to="/" label="Home" icon={<FaFolder />} isCollapsed={isCollapsed} />
              <NavItem to="/page1" label="Settings" icon={<FaWhmcs />} isCollapsed={isCollapsed} />
              <NavItem to="/page2" label="Technology" icon={<FaWrench />} isCollapsed={isCollapsed} />
              <NavItem to="/about" label="About" icon={<FaInfoCircle />} isCollapsed={isCollapsed} />
            </ul>
          </nav>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  isCollapsed: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, icon, isCollapsed }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} className="nav-link">
        <span className="icon">{icon}</span>
        {!isCollapsed && <span className="label">{label}</span>}
      </Link>
    </li>
  );
};

export default App;
