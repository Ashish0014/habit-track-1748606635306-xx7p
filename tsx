import React from 'react';
import { Habit } from '../../types';

interface HabitListProps {
  habits: Habit[];
}

const HabitList: React.FC<HabitListProps> = ({ habits }) => {
  return (
    <ul>
      {habits.map((habit) => (
        <li key={habit.id}>{habit.name}</li>
      ))}
    </ul>
  );
};

export default HabitList;