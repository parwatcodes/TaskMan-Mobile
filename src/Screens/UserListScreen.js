import React from 'react';

import { getUsers } from '../api/user';
import UserList from '../components/UserList';

const UserListScreen = (props) => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers()
      .then(setUsers);
  },[]);

  const handleOnUserClick = (user) => {
    props.navigation.navigate('User Details', { user });
  };

  return (
    <UserList
      data={users}
      handleOnUserClick={handleOnUserClick}
    />
  );
};

export default UserListScreen;
