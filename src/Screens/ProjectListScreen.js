import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useIsFocused } from '@react-navigation/native';

import ProjectList from '../components/ProjectList';
import { getProjects } from '../api/project';

const ProjectListScreen = (props) => {
  const [projects, setProjects] = React.useState([]);
  const isFocused = useIsFocused();

  const handleOnProjectClick = (project) => {
    props.navigation.navigate('Project Details', { project });
  };

  React.useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(err => console.log(err));
  }, [isFocused]);

  return (
    <ProjectList
      {...props}
      data={projects}
      handleOnProjectClick={handleOnProjectClick}
    />
  );
};

export default ProjectListScreen;
