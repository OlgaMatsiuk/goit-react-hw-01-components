import React from 'react';
import PropTypes from "prop-types";
import Friend from './Friend';


const FriendList= ({ friends }) => (
<ul>
    {friends.map((friend) => (
    <li key={friend.id}>
        <Friend
        name={friends.name}
        isOnline={friends.isOnline}
        avatar={friends.avatar}
        />
    </li>
    ))}
</ul>
)

export default FriendList;