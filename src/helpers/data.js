import uuid from 'react-native-uuid';

import { ADMIN, MEMBER } from '../helpers/constant'

export const DEFAULT_ADMIN = {
  "id": uuid.v4(),
  "role": ADMIN,
  "name": "Default Admin",
  "email": "admin123@gmail.com",
  "password": "Admin@123"
};

export const DEFAULT_MEMBER = {
  "id": uuid.v4(),
  "role": MEMBER,
  "hourlyRate": 45,
  "password": "Member@123",
  "name": "Default Member",
  "email": "member123@gmail.com"
}

export const DEFAULT_PROJECT = {
  id: uuid.v4(),
  name: 'TaskMan',
  description: 'TaskMan is a powerful and intuitive web application built using JavaScript, HTML, and CSS, designed to help you stay organized and productive.'
}

export const DEFAULT_TASK = {
  id: uuid.v4(),
  projectId: '', // will be set during the seed func call.
  name: 'Design landing page for TaskMan',
  description: 'Need to research on the landing page with all the key aspects being covered.',
}
