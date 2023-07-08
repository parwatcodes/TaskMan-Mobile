import React from 'react';

import ProjectList from '../components/ProjectList';

const ProjectListScreen = () => {
  const data = [
    { name: 'QuantumSphere', description: 'Exploring the boundaries of quantum computing and its applications.', status: 'not-started' },
    { name: 'PixelQuest', description: 'Embark on a pixelated adventure through a retro-inspired gaming world.', status: 'on-going' },
    { name: 'StellarEdge', description: 'A cutting-edge platform for space exploration and interstellar research.', status: 'not-started' },
    { name: 'CodeWave', description: 'Riding the waves of innovative coding solutions for the modern era.', status: 'completed' },
    { name: 'ByteBlaze', description: 'Igniting the digital realm with lightning-fast data processing and analysis.', status: 'completed' },
  ];

  return (
    <ProjectList data={data} />
  );
};

export default ProjectListScreen;
