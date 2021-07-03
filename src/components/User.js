import React from 'react';
import PropTypes from "prop-types";

  
const User = (props) => { 
   return (
    <div class="profile">
    <div class="description">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        alt="Аватар пользователя"
        class="avatar"
      />

      <p class="name">{props.name}</p>
      <p class="tag">{props.tag}</p>
      <p class="location">{props.location}</p>
    </div>
  
    <ul class="stats">
      <li>
        <span class="label">followers</span>
        <span class="quantity">{props.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{props.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{props.likes}</span>
      </li>
    </ul>
  </div>
    );
    
  };
    User.propTypes = {
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
      };


export default User;