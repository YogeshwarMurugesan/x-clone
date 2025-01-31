import React from 'react';
import './Posts.css';
import postImage from './assets/BuzzFeed.jpg';
import image from './assets/Realistic-X-Post-Generator.jpg';
import { FaRegComment } from "react-icons/fa";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Example array of posts
const postsData = [
  {
    id: 1,
    userName: "User Name",
    userId: "@UserId",
    time: "20h",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae autem quo officia quae numquam cupiditate ea ex maiores quas vel ab, consequatur illo nobis voluptates impedit, earum facilis possimus unde.",
    image: image
  },
  {
    id: 2,
    userName: "Another User",
    userId: "@AnotherId",
    time: "5h",
    text: "This is another post content example with different text. React is amazing!",
    image: image
  },
  {
    id: 3,
    userName: "Third User",
    userId: "@ThirdId",
    time: "1d",
    text: "Another example post showing dynamic rendering. Loving this feature!",
    image: image
  },
  {
    id: 4,
    userName: "Fourth User",
    userId: "@FourthId",
    time: "1d",
    text: "Another example post showing dynamic rendering. Loving this feature!",
    image: image
  }
];

const Posts = () => {
  return (
    <div className="post-container">
      <div className="row">
          <div className="col">
          {postsData.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <img className="user-avatar" src={postImage} alt="User Avatar" />
            <div className="user-info">
              <h6 className="user-name me-3 text-white">{post.userName}</h6>
              <div className="user-meta">
                <p className="user-id text-secondary">{post.userId} •</p>
                <p className="post-time text-secondary">{post.time}</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row contentRow">
              <p>{post.text}</p>
            </div>
            {post.image && (
              <div className="row postRow">
                <img className="posts" src={post.image} alt="Post Content" />
              </div>
            )}
            <div className="row reactionRow">
              <span className="p-3 reactSpan">
                <FaRegComment className="comment" />
                <FavoriteBorderIcon className="like" />
              </span>
            </div>
          </div>
        </div>
      ))}
          </div>
      </div>
      
    </div>
  );
};

export default Posts;
