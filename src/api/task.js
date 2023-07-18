import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAppData } from "./app";
import { getProjectById } from './project';
import { APP_DATA } from "../helpers/constant";
import { stringifyIt } from "../helpers/utils";

export async function getTasks() {
  let { tasks } = await getAppData();
  let allTask = await Promise.all(tasks.map(taskWithProject));

  return allTask;
}

export async function addTask(data) {
  try {
    let appData = await getAppData();

    appData?.task?.push({ ...data, id: uuid.v4() });
    await AsyncStorage.setItem(APP_DATA, stringifyIt(appData));

    return {
      success: true,
      message: 'Task added'
    }
  } catch (error) {
    return {
      success: false,
      message: error.toString()
    }
  }
}

export async function taskWithProject(task) {
  let project = await getProjectById(task.projectId);

  return { ...task, project };
}

export async function getAllTaskByProjectId(projectId) {
  let { tasks } = await getAppData();

  let taskByProjectId = tasks.filter(task => task.projectId === projectId);

  return taskByProjectId;
}
