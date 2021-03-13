import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../../redux/types';
import Notifications from './Notifications';

const NotificationsContainer: React.FC = () => {
  const { notifications } = useSelector((state: ApplicationStore) => state.dashboard);
  return <Notifications notifications={notifications} />;
};

export default NotificationsContainer;
