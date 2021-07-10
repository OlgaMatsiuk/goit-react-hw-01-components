import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const FriendList = ({ friends }) => (
    <ul className={styles.friendList}>
        {friends.map(friend => (
            <li className={styles.item} key={friend.id}>
                {friend.isOnline ? (
                    <span className={styles.status}></span>
                ) : (
                    <span className={styles.status__offline}></span>   
                )}                
                <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                <p className="name">{friend.name}</p>
            </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
};

export default FriendList;