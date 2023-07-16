import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ADMIN, MEMBER, APP_DATA } from "../helpers/constant";
import { stringifyIt } from "../helpers/utils";
import { getAppData } from "./app";

export async function getUsers() {
  let { users } = await getAppData();

  return users;
}

export async function getMembers() {
  let users = await getUsers();
  let members = users
    .filter(user => user.role === MEMBER);

  return members;
}

export async function getAdmins() {
  let users = await getUsers();
  let admins = users.filter(user => user.role === ADMIN);

  return admins;
}

export async function addUser(data) {
  try {
    let appData = await getAppData();

    appData?.users?.push({ ...data, id: uuid.v4() });
    await AsyncStorage.setItem(APP_DATA, stringifyIt(appData));
  } catch (error) {
    console.log('err', error)
  }
}

export async function getUserById(id) {
  let users = await getUsers();
  let user = users.find(user => user.id === id);

  return user;
}

export async function updateUserById(id, data) {
  try {
    let appData = await getAppData();

    let allUsers = appData?.users?.
      map(user => user.id === id ? data : user);

    appData.users = allUsers;

    await AsyncStorage.setItem(APP_DATA, stringifyIt(app));
  } catch (error) {

  }
}

export function deleteMemberById(id) {

}
