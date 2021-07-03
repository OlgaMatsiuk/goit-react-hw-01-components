import React from 'react';
import PropTypes from "prop-types";
import User from './User';

const UsersList= ({ users }) => {
return (
   <div key={users.name}>
     <User 
     name={users.name}
     tag={users.tag}
     location={users.location}
     followers={users.stats.followers}
     views={users.stats.views}
     likes={users.stats.likes}
     />
   </div>
  )
}

// UsersList.propTypes = {
//     users: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   };

export default UsersList;