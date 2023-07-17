import AsyncStorage from '@react-native-async-storage/async-storage';

import { parseIt } from '../helpers/utils';
import { APP_DATA } from '../helpers/constant';

export async function getAppData() {
  try {
    const jsonValue = await AsyncStorage.getItem(APP_DATA);

    return parseIt(jsonValue);
  } catch (e) {

  }
}

export async function totalTaskByStatus(status) {
  try {
    let allTask = await getAppData()?.tasks;

    if (!status) {
      let obj = {};

      allTask.forEach(task => {
        if (!obj[task.status]) {
          obj[status] = allTask.filter(task => task.status === obj[status]).length;
        }
      });

      return obj;
    }

    let taskByStatus = allTask.filter(task => task.status === status);

    return taskByStatus.length;
  } catch (error) {

  }
}

export async function getOverviewData() {
  try {
    const appData = await getAppData();

    let totalProject = appData?.projects.length;
    let taskObj = await totalTaskByStatus();

    console.log('--', totalProject, taskObj)

    return {
      taskObj,
      totalProject
    };

  } catch (error) {
    console.log('getOverviewData error', error)
  }
}
