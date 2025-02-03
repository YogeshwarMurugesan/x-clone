import React from 'react';

import './Notifications.css';

const Notifications = () => {
  return (
    <div className="notifications-container ">
      <h1 className="notifications-header text-white">Notifications</h1>

      {/* Notification List */}
      <div className="notification-list">
        {/* Like Notification */}
        <div className="notification">
          {/* <img src={likeIcon} alt="Like" className="notification-icon" /> */}
          <div className="notification-content">
            <p className='text-secondary'><strong>John Doe</strong > liked your tweet.</p>
            <p className="notification-time">2m ago</p>
          </div>
        </div>

      

        {/* Follow Notification */}
        <div className="notification">
          {/* <img src={followIcon} alt="Follow" className="notification-icon" /> */}
          <div className="notification-content">
            <p className='text-secondary'><strong>Alice Johnson</strong> followed you.</p>
            <p className="notification-time">1h ago</p>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default Notifications;