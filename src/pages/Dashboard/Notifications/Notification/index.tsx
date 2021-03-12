import React, { useEffect, useRef } from 'react';
import Notification from './Notification';

const NotificationContainer: React.FC = () => {
  const timeOut = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    timeOut.current = setTimeout(() => {}, 1000);
  }, []);

  return <Notification />;
};

export default NotificationContainer;
