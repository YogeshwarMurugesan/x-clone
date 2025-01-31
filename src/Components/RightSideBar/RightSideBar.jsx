import React from 'react';
import './RightSideBar.css';
import image from '../assets/tommy.jpg';

const users = [
  { name: '2D Entertainment', username: '@2d_entertainment', image },
  { name: 'Tommy', username: '@tommy', image },
  { name: 'Tech Guru', username: '@tech_guru', image },
  { name: 'Music Beats', username: '@music_beats', image },
];

const RightSideBar = () => {
  return (
    <div className="RightSidebar" style={{ }}>
      <div className="card p-4">
        <h5>Who to follow</h5>
        <div className="suggestions">
          {users.map((user, index) => (
            <div key={index} className="suggestion-item d-flex align-items-center">
              <img src={user.image} className="img-fluid user-image" alt={user.name} />
              <div className="user-info ms-3">
                <p className="user-name text-white">{user.name}</p>
                <p className="user-username">{user.username}</p>
              </div>
              <button className="btn follow-btn ms-auto">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
