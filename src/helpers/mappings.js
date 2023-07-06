import { lightGreen, lightBlue, lightPink, lightOrange } from '../constants/colors';
import { darkGreen, darkYellow, darkRed } from '../constants/colors'

export const statusToCardColor = {
  'todo': lightGreen,
  'progress': lightOrange,
  'review': lightPink,
  'done': lightBlue
}

export const priorityToLabelColor = {
  'low': darkGreen,
  'medium': darkYellow,
  'high': darkRed
}
