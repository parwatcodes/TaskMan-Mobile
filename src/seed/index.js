import AsyncStorage from '@react-native-async-storage/async-storage';

import { DEFAULT_ADMIN, DEFAULT_MEMBER, DEFAULT_PROJECT, DEFAULT_TASK } from '../helpers/data';
import { getAppData } from '../api/app';
import { APP_DATA , ADMIN } from '../helpers/constant';

export async function seedData() {
  try {
    let appData = await getAppData();
    let projects = appData?.projects;
    let users = appData?.users;

    let isAdminThere = users?.find(user => user.role === ADMIN);
    let data = {};

    if (!projects?.length) {
      data.projects = [DEFAULT_PROJECT];
      let projectId = DEFAULT_PROJECT.id;

      data.tasks = [{ ...DEFAULT_TASK, projectId }];
    }

    if (!isAdminThere) {
      data.users = [DEFAULT_ADMIN];
    }

    if (!projects?.length) {
      const jsonValue = JSON.stringify(data);

      await AsyncStorage.setItem(APP_DATA, jsonValue);
    }
  } catch (error) {
    console.log('ee', error)
  }
}
