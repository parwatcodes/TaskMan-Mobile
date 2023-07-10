import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProjectList from '../components/ProjectList';
import { getProjects } from '../api/project';

const Stack = createNativeStackNavigator();

const ProjectListScreen = (props) => {
  const [projects, setProjects] = React.useState([]);

  const handleOnProjectClick = () => {
    props.navigation.navigate('Project Details');
  };

  React.useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(err => console.log(err));
  }, []);

  return (
    <ProjectList
      data={projects}
      handleOnProjectClick={handleOnProjectClick}
    />
  );
};

export default ProjectListScreen;
