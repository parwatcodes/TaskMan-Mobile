import { lightGreen, lightBlue, lightPink, lightOrange, lightYellow, darkBlue, portage, pharlap, bostonBlue } from '../constants/colors';
import { darkGreen, darkYellow, darkRed } from '../constants/colors'

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
