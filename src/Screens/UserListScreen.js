import React from 'react';

import UserList from '../components/UserList';

const UserListScreen = () => {
  const data = [
    {
      name: 'Parwat Kunwar',
      email: 'parwatkunwar08@gmail.com',
      role: 'Admin',
      totalProjects: 2,
      totalTask: 11,
      projects: ['Project ABC', 'Project 123']
    },
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'User',
      totalProjects: 1,
      totalTask: 5,
      projects: ['Project XYZ']
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      role: 'User',
      totalProjects: 3,
      totalTask: 15,
      projects: ['Project DEF', 'Project GHI', 'Project JKL']
    },
    {
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
      role: 'User',
      totalProjects: 0,
      totalTask: 0,
      projects: []
    },
    {
      name: 'Bob Williams',
      email: 'bobwilliams@example.com',
      role: 'User',
      totalProjects: 2,
      totalTask: 8,
      projects: ['Project MNO', 'Project PQR']
    },
    {
      name: 'Emily Brown',
      email: 'emilybrown@example.com',
      role: 'User',
      totalProjects: 1,
      totalTask: 3,
      projects: ['Project STU']
    },
    {
      name: 'Michael Davis',
      email: 'michaeldavis@example.com',
      role: 'User',
      totalProjects: 2,
      totalTask: 10,
      projects: ['Project VWX', 'Project YZ']
    },
    {
      name: 'Sophia Taylor',
      email: 'sophiataylor@example.com',
      role: 'User',
      totalProjects: 4,
      totalTask: 20,
      projects: ['Project 456', 'Project 789', 'Project 1011', 'Project 1213']
    },
    {
      name: 'David Wilson',
      email: 'davidwilson@example.com',
      role: 'User',
      totalProjects: 2,
      totalTask: 7,
      projects: ['Project 1415', 'Project 1617']
    },
    {
      name: 'Olivia Lee',
      email: 'olivialee@example.com',
      role: 'User',
      totalProjects: 1,
      totalTask: 6,
      projects: ['Project 1819']
    }
  ];

  return (
    <UserList data={data} />
  );
};

export default UserListScreen;
