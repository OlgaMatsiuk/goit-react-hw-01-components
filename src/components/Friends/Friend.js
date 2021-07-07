import React from 'react';
import PropTypes from "prop-types";
import styles from './Friends.module.css';

const Friend = (props) => {
return (
<li className={styles.friend_item}>
  <span className={styles.friend_status}>{props.isOnline}</span>
  <img className={styles.friend_avatar} src={props.avatar} alt={props.name} width="48" />
  <p className={styles.friend_name}>{props.name}</p>
</li> 
)
}
export default Friend;

