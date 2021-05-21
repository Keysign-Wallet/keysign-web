import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Notification from './Notification';
import { getStyle } from './functions';
import { removeNotification } from '../../../../redux/Dashboard/actionCreators';
import { NotificationTypes } from '../../../../redux/Dashboard/types';

const NotificationContainer: React.FC<{ id: string; notificationType: NotificationTypes }> = ({
  id,
  children,
  notificationType,
}) => {
  const timeOut = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (show) {
      timeOut.current = setTimeout(() => {
        setShow(false);
        setTimeout(() => {
          dispatch(removeNotification(id));
        }, 300);
        return () => {
          clearTimeout(timeOut.current!);
        };
      }, 3000);
    }
  }, [dispatch, show, id]);

  const closeHandler = () => {
    setShow(false);
    setTimeout(() => {
      dispatch(removeNotification(id));
    }, 300);
  };

  return (
    <Notification show={show} onClose={closeHandler} styles={getStyle(notificationType)}>
      {children}
    </Notification>
  );
};

export default NotificationContainer;
