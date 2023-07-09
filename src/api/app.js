import AsyncStorage from '@react-native-async-storage/async-storage';

import { parseIt } from '../helpers/utils'
import { APP_DATA } from '../constants'

// app-data: {
//   projects: [{}],
//   users: [{}],
//   tasks: [{}]
// }

export async function getAppData() {
  try {
    const jsonValue = await AsyncStorage.getItem(APP_DATA);

    return parseIt(jsonValue);
  } catch (e) {

  }
}
