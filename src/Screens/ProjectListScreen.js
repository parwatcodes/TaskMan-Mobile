import React from 'react';

import ProjectList from '../components/ProjectList';
import { getProjects } from '../api/project';

const ProjectListScreen = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(err => console.log(err))
  });

  return (
    <ProjectList data={projects} />
  );
};

export default ProjectListScreen;
