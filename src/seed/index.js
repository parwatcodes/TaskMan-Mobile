import { DEFAULT_ADMIN, DEFAULT_MEMBER, DEFAULT_PROJECT } from '../constants/data';

import { getAppData } from '../api/app';
import { APP_DATA } from '../constants';

export async function seedData() {
  try {
    let projects = getAppData()?.projects;
    let users = getAppData()?.users;

    let isAdminThere = users?.find(user => user.role === ADMIN);
    let data = {};

    if (!projects.length) {
      data.projects = [DEFAULT_PROJECT];
    }

    if (!isAdminThere) {
      data.users = [...data.users, DEFAULT_ADMIN];
    }

    if (!projects.length || !isAdminThere) {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem(APP_DATA, jsonValue);
    }
  } catch (error) {

  }
}
