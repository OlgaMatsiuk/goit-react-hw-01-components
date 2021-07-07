import React from 'react';
import users from './users.json';
import UsersList from './components/Users/UsersList';
import friends from './friends.json';
import FriendList from './components/Friends/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import StatisticList from './components/Statistics/StatisticList';
import statisticsData from './statistical-data.json';

const App = () => {
  return (
   <div>
     <h1>Главный компонент-контейнер</h1>
     <UsersList users={users} />
     <FriendList friends={friends} />
     <TransactionHistory items={transactions} />
     <StatisticList statisticsData={statisticsData} />

   </div>
  );
};


export default App;
