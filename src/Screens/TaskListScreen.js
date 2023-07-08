import React from 'react';

import TaskList from '../components/TaskList';

const TaskListScreen = () => {
  const data = [
    { name: 'QuantumSphere', description: 'Exploring the boundaries of quantum computing and its applications.', priority: 'low', assigneeName: 'Parwat Kunwar', startDate: '12-02-2023', status: 'todo' },
    { name: 'PixelQuest', description: 'Embark on a pixelated adventure through a retro-inspired gaming world.', priority: 'low', assigneeName: 'John Hopkins', startDate: '12-02-2023', status: 'done' },
    { name: 'StellarEdge', description: 'A cutting-edge platform for space exploration and interstellar research.', priority: 'medium', assigneeName: 'Kylian Orange', startDate: '12-02-2023',status: 'hold' },
    { name: 'CodeWave', description: 'Riding the waves of innovative coding solutions for the modern era.', priority: 'high', assigneeName: 'Robert Klepp', startDate: '12-02-2023',status: 'progress' },
    { name: 'ByteBlaze', description: 'Igniting the digital realm with lightning-fast data processing and analysis.', priority: 'high', assigneeName: 'Aergie Oplia', startDate: '12-02-2023', status: 'review' },
  ];

  return (
    <TaskList data={data} />
  );
};

export default TaskListScreen;
