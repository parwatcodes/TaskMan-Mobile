import React from 'react';

import { getUsers } from '../api/user';
import UserList from '../components/UserList';

const UserListScreen = (props) => {
  // const data = [
  //     name: 'Olivia Lee',
  //     email: 'olivialee@example.com',
  //     role: 'User',
  //     totalProjects: 1,
  //     totalTask: 6,
  //     projects: ['Project 1819']
  //   }
  // ];

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers()
      .then(setUsers);
  });

  const handleOnUserClick = () => {
    props.navigation.navigate('User Details');
  };

  return (
    <UserList
      data={users}
      handleOnUserClick={handleOnUserClick}
    />
  );
};

export default UserListScreen;
