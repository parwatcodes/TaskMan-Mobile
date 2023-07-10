import { getAppData } from './app';

export async function getProjects() {
  let { projects } = await getAppData();

  return projects;
}

export async function getProjectById(id) {
  let projects = await getProjects();

  return projects
    .find(project => project.id === id);
}
