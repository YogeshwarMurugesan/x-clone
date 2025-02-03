import React from 'react';
import coverImage from './assets/Cover Image 1500x500.jpg'; // Replace with your cover image
import profileImage from './assets/profile image400x400.jpg'; // Replace with your profile image
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Cover Image */}
      <div className="cover-section">
        <img src={coverImage} alt="Cover" className="cover-image" />
      </div>

      {/* Profile Info */}
      <div className="profile-info">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <button className="edit-profile-button">Edit Profile</button>
        <h1 className="profile-name">Yogesh_Kuruvilla</h1>
        <p className="profile-username">@Yogesh_kuruvila</p>
        <p className="profile-bio text-white">
        யோகேஷ்வர் முருகேசன்✨
        </p>
        <div className="profile-stats">
          <span>100 Following</span>
          <span>1.2K Followers</span>
        </div>
      </div>

      {/* Tabs (Tweets, Replies, Media, Likes) */}
      <div className="tabs-section">
        <button className="tab active">Tweets</button>
        <button className="tab">Replies</button>
        <button className="tab">Media</button>
        <button className="tab">Likes</button>
      </div>

      {/* Tweets Section */}
      <div className="tweets-section">
        <div className="tweet">
          <p className="tweet-content">
            This is a sample tweet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="tweet-date">10:15 AM · Jan 1, 2024</p>
        </div>
        <div className="tweet">
          <p className="tweet-content">
            Another tweet example. React is awesome! 🚀
          </p>
          <p className="tweet-date">11:30 AM · Jan 2, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;