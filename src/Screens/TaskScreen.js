import React from 'react';

import Task from '../components/Task';

const TaskScreen = () => {
  const data = [
    { name: 'QuantumSphere', description: 'Exploring the boundaries of quantum computing and its applications.' },
    { name: 'PixelQuest', description: 'Embark on a pixelated adventure through a retro-inspired gaming world.' },
    { name: 'StellarEdge', description: 'A cutting-edge platform for space exploration and interstellar research.' },
    { name: 'CodeWave', description: 'Riding the waves of innovative coding solutions for the modern era.' },
    { name: 'ByteBlaze', description: 'Igniting the digital realm with lightning-fast data processing and analysis.' },
  ];

  return (
    <Task data={data} />
  )
}

export default TaskScreen;
