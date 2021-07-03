import React from 'react';
import PropTypes from "prop-types";

const Friend = (props) => {
return (
<li class="item">
  <span class="status">{props.isOnline}</span>
  <img class="avatar" src={props.avatar} alt={props.name} width="48" />
  <p class="name">{props.name}</p>
</li> 
)
}
export default Friend;

