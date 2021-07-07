import React from 'react';
import PropTypes from "prop-types";
import Friend from './Friend';


const FriendList= ({ friends }) => {
    return(
    <ul>
        {friends.map((friend) => (
        <li key={friend.id}>
            <Friend
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            />
        </li>
        ))}
    </ul>)

    }

export default FriendList;