import uuid from 'react-native-uuid';

export const ADMIN = 'admin';
export const MEMBER = 'member';

export const DEFAULT_ADMIN = {
  "id": uuid(),
  "role": ADMIN,
  "name": "Default Admin",
  "email": "admin123@gmail.com",
  "password": "Admin@123"
};

export const DEFAULT_MEMBER = {
  "id": uuid(),
  "role": MEMBER,
  "hourlyRate": 45,
  "password": "Member@123",
  "name": "Default Member",
  "email": "member123@gmail.com"
}

export const DEFAULT_PROJECT = {
  id: uuid(),
  name: 'TaskMan',
  description: 'TaskMan is a powerful and intuitive web application built using JavaScript, HTML, and CSS, designed to help you stay organized and productive.',
}
