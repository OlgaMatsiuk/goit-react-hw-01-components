import React from 'react';
import PropTypes from "prop-types";
import styles from './User.module.css';
import defaultImg from './default.svg';

  
const User = (props) => { 
   return (
    <div className={styles.friend_profile}>
    <div className={styles.friend_description}>
      <img src={props.avatar}
      alt="Аватар пользователя" 
      className={styles.friend_avatar} 
      />

      <p className={styles.friend_name}>{props.name}</p>
      <p className={styles.friend_tag}>{props.tag}</p>
      <p className={styles.friend_location}>{props.location}</p>
    </div>
  
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.friend_label}>followers</span>
        <span className={styles.friend_quantity}>{props.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.friend_label}>Views</span>
        <span className={styles.friend_quantity}>{props.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.friend_label}>Likes</span>
        <span className={styles.friend_quantity}>{props.likes}</span>
      </li>
    </ul>
  </div>
    );
    
  };
  User.defaultProps = {
    avatar: defaultImg,
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