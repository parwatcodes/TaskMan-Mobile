import { lightGreen, lightBlue, lightPink, lightOrange, lightYellow, darkBlue, portage, pharlap, bostonBlue } from './colors';
import { darkGreen, darkYellow, darkRed } from './colors'

export const statusToCardColor = {
  'todo': lightGreen,
  'progress': lightOrange,
  'review': lightPink,
  'hold': pharlap,
  'done': bostonBlue,
  'default': portage
}

export const priorityToLabelColor = {
  'low': darkGreen,
  'medium': darkYellow,
  'high': darkRed
}

export const projectStatusColor = {
  'not-started': darkGreen,
  'on-going': darkYellow,
  'completed': darkBlue
}

export const PROJECT_STATUS = {
  'not-started': 'Not Started',
  'on-going': 'On Going',
  'completed': 'Completed'
};

export const TASK_STATUS = {
  todo: 'ToDo',
  progress: 'Progress',
  review: 'Review',
  hold: 'Hold',
  done: 'Done'
};

export const TASK_PRIORITY_LABEL = {
  low: 'Low',
  medium: 'Medium',
  high: 'High'
};

export const USER_ROLE = {
  member: 'Member',
  admin: 'Admin'
}
