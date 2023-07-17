import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import { getUsers } from '../api/user';
import UserList from '../components/UserList';

const UserListScreen = (props) => {
  const [users, setUsers] = React.useState([]);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    getUsers()
      .then(setUsers);
  },[isFocused]);

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
