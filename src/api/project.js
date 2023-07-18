import uuid from 'react-native-uuid';

import { getAppData } from './app';
import { APP_DATA } from '../helpers/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { stringifyIt } from '../helpers/utils';
import { getUserById } from './user';

export async function getProjects() {
  let { projects } = await getAppData();

  let newProjects = await Promise.all(projects.map(async project => {
    if (project?.members.length) {
     project.members = await Promise.all(project?.members.map(async id => await getUserById(id)));
    }

    return project;
  }))

  return projects;
}

export async function getProjectById(id) {
  let allProjects = await getProjects();

  let project = allProjects.find(project => project.id === id);

  let members = [];
  if (project?.members.length) {
    members = await Promise.all(project?.members.map(async member => await getUserById(member.id)));
  }

  return { ...project, members };
}

export async function createProject(data) {
  try {
    let appData = await getAppData();

    appData?.projects?.push({ ...data, id: uuid.v4() });

    await AsyncStorage.setItem(APP_DATA, stringifyIt(appData));
    return {
      success: true,
      message: 'Project created'
    };
  } catch (e) {
    console.log('error adding a project', e)
    return {
      success: false,
      message: e.toString()
    };
  }
}

export async function updateProjectById(id, data) {
  try {
    let appData = await getAppData();

    let allProjects = appData?.projects?.map(project => project.id === id ? data : project);
    appData.projects = allProjects;

    await AsyncStorage.setItem(APP_DATA, stringifyIt(appData));

    return {
      success: true,
      message: 'Project updated'
    };
  } catch (error) {
    return {
      success: false,
      message: error.toString()
    };
  }
}

export async function deleteProject(id) {
  try {

  } catch (error) {

  }
}
