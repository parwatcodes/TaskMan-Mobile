import { lightGreen, lightBlue, lightPink, lightOrange, lightYellow, darkBlue } from '../constants/colors';
import { darkGreen, darkYellow, darkRed } from '../constants/colors'

export const statusToCardColor = {
  'todo': lightGreen,
  'progress': lightOrange,
  'review': lightPink,
  'done': lightBlue,
  'default': lightYellow
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
