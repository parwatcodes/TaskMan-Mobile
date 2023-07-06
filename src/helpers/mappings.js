import { lightGreen, lightBlue, lightPink, lightOrange, lightYellow } from '../constants/colors';
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
