import React from 'react';
import Notification from './Notification';
import { NotificationType } from '../../../redux/Dashboard/types';
import './Notifications.scss';

const Notifications: React.FC<{ notifications: NotificationType[] }> = ({ notifications }) => (
  <div className="Notifications">
    {notifications.map(({ id, content, type }) => (
      <div key={id}>
        <Notification id={id} notificationType={type}>
          {content}
        </Notification>
      </div>
    ))}
  </div>
);

export default Notifications;
