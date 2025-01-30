import React from 'react';
import image from './SideBar/—Pngtree—avatar icon profile icon member_5247852.png';
import './Posts.css';
import postImage from './assets/Realistic-X-Post-Generator.jpg'

const Posts = () => {
  return (
    <div className="post-container">
      <div className="post-card">
        <div className="post-header">
          <img className="user-avatar" src={image} alt="User Avatar" />
          <div className="user-info">
            <h6 className="user-name me-2">User Name</h6>
            <div className="user-meta ">
              <p className="user-id text-secondary">@UserId •</p>
              <p className="post-time text-secondary">20h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
