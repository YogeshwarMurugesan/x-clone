// SideBar.js
import React from 'react';
import './SideBar.css';
import { RiTwitterXLine } from "react-icons/ri";
import avatar from './—Pngtree—avatar icon profile icon member_5247852.png';
import sidebardata from './sidebardata';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={`sidebar ${isSmallScreen ? 'small-sidebar' : ''}`}>
      <div className="xLogo">
        <RiTwitterXLine className="xlogo" />
      </div>

      <div className="list">
        <ul>
          {sidebardata.map((item, index) => (
            <Link to={item.path} key={index} className="sidebar-link">
              <li className="sidebar-item">
                <span className="sidebar-icon">{item.icon}</span>
                {!isSmallScreen && <span className="sidebar-text">{item.title}</span>}
              </li>
            </Link>
          ))}
        </ul>
        <button className="btn btn-light postButton">
          {!isSmallScreen ? "Post" : "+"}
        </button>
      </div>

      <div className="user">
        <button className="btn btn-light profile">
          <img src={avatar} alt="User" />
          {!isSmallScreen && <h5>Yogesh_Kuruvilla</h5>}
        </button>
      </div>
    </div>
  );
};

export default SideBar;