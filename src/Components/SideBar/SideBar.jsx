import React, { useState } from 'react';
import './SideBar.css';
import { RiTwitterXLine } from "react-icons/ri";
import avatar from '../assets/BuzzFeed.jpg';
import sidebardata from './sidebardata';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { FaRegImage } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";

const SideBar = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const [showModal, setShowModal] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [file, setFile] = useState(null);

  
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

        {/* Button to trigger modal */}
        <button className="btn postButton" onClick={() => setShowModal(true)}>
          {!isSmallScreen ? "Post" : "+"}
        </button>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal show d-block color-dark" tabIndex="-1">
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Post</h5>
                <button type="button" className="btn-close bg-light" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body ">
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
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary">Post</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close modal when clicking outside */}
      {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}

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
