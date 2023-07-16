import uuid from 'react-native-uuid';

import { getAppData } from './app';
import { APP_DATA } from '../helpers/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { stringifyIt } from '../helpers/utils';

export async function getProjects() {
  let { projects } = await getAppData();

  return projects;
}

export async function getProjectById(id) {
  let projects = await getProjects();

  return projects
    .find(project => project.id === id);
}

export async function createProject(data) {
  try {
    let appData = await getAppData();

    appData?.projects?.push({ ...data, id: uuid.v4() })

    await AsyncStorage.setItem(APP_DATA, stringifyIt(jsonData));
  } catch (e) {
    // save error
  }
}

export async function updateProject(id, data) {
  try {
    let appData = await getAppData();

    let allProjects = appData?.projects?.map(project => project.id === id ? data : project);
    appData.projects = allProjects;

    await AsyncStorage.setItem(APP_DATA, stringifyIt(appData))
  } catch (error) {

  }
}

export async function deleteProject(id) {
  try {

  } catch (error) {

  }
}
