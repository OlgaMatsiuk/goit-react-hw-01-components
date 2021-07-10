import React from 'react';
import users from './users.json';
import UsersList from './components/Profile/UsersList';
import friends from './friends.json';
import FriendList from './components/Friends/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import statisticsData from './statistical-data.json';
import Statistics from './components/Statistics/Statistics';


const App = () => {
  return (
   <div>
     {/* <h1>Главный компонент-контейнер</h1> */}
     <UsersList users={users} />
     <FriendList friends={friends} />
     <TransactionHistory items={transactions} />
     <Statistics title="Upload stats" stats={statisticsData} />

   </div>
  );
};


export default App;
