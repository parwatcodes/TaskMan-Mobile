import { getAppData } from "./app";

import { getProjectById } from './project';
export async function getTasks() {
  let { tasks } = await getAppData();

  let allTask = tasks.map(taskWithProject);

  return allTask;
}

export async function taskWithProject(task) {
  let project = await getProjectById(task.projectId);

  return { ...task, project };
}
