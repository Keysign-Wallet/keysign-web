import React from 'react';
import Notification from './Notification';
import './Notifications.scss';

const Notifications: React.FC = () => (
  <div className="Notifications">
    <Notification />
    <Notification />
    <Notification />
    <Notification />
  </div>
);

export default Notifications;
