import { getAppData } from "./app";
import { getProjectById } from './project';

export async function getTasks() {
  let { tasks } = await getAppData();
  let allTask = await Promise.all(tasks.map(taskWithProject));

  return allTask;
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
