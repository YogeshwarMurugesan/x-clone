// Home.js
import React, { useState } from 'react';
import './Home.css';
import avatar from './assets/BuzzFeed.jpg';
import { FaRegImage } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import Posts from './Posts';

const Home = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [file, setFile] = useState(null);
  const [activeTab, setActiveTab] = useState("forYou");

  const handleEmojiClick = () => {
    setEmojiPickerVisible((prev) => !prev);
  };

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setTimeout(() => setEmojiPickerVisible(false), 200);
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div
          className={`col forYouCol ${activeTab === "forYou" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("forYou")}
        >
          For You
        </div>
        <div
          className={`col followingCol ${activeTab === "following" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("following")}
        >
          Following
        </div>
      </div>

      <div className="post">
        <div className="postInputs">
          <img className='img-fluid' src={avatar} alt="User" />
          <input type="text" placeholder='What is happening?!' ></input>
          {selectedEmoji && <div>Selected Emoji: {selectedEmoji}</div>}
          <hr />

          <div className="postImages">
            <div className="inputs">
              <FaRegImage
                className='icons'
                onClick={() => document.getElementById("fileInput").click()}
              />
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />

              <MdEmojiEmotions className='icons' onClick={handleEmojiClick} />
            </div>

            {isEmojiPickerVisible && (
              <div className="emoji-picker">
                {['😊', '😂', '😍', '😎', '😢'].map((emoji) => (
                  <span key={emoji} className="emoji" onClick={() => handleEmojiSelect(emoji)}>
                    {emoji}
                  </span>
                ))}
              </div>
            )}

            {file && <img src={file} alt="Preview" className="file-preview" />}

            <button className='btn btn-light poButton'>Post</button>
          </div>
        </div>
      </div>

      <Posts/>
    </div>
  );
};

export default Home;