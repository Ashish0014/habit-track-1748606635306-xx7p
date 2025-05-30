import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { Habit } from '../types';
import HabitList from '../components/Feature/HabitList';

const HomePage: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const { data, error } = await supabase.from('habits').select('*');
        if (error) {
          throw error;
        }
        if (data) {
          setHabits(data);
        }
      } catch (error) {
        console.error('Error fetching habits:', error.message);
      }
    };

    fetchHabits();
  }, []);

  return (
    <div>
      <h1>My Habits</h1>
      <HabitList habits={habits} />
    </div>
  );
};

export default HomePage;