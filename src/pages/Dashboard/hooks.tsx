import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../redux/types';

export const useDashboard = () => {
  const [initialisingDashboard, setInitialisingDashboard] = useState(true);
};
