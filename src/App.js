import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import User from './components/User';
import users from './users.json';
import UsersList from './components/UsersList';

const App = () => {
  return (
   <div>
     <h1>Главный компонент-контейнер</h1>
     <UsersList users={users} />
   </div>
  );
};


export default App;
