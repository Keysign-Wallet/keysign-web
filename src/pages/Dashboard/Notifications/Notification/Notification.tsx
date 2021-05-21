import React from 'react';
import { mergeClasses } from '../../../../utils/helpers';
import { ReactComponent as CloseSvg } from '../../../../assets/svgs/close.svg';
import { NotificationStyles } from './types';
import './Notification.scss';

const Notification: React.FC<{ show: boolean; onClose: () => void; styles: NotificationStyles }> = ({
  children,
  show,
  onClose,
  styles,
}) => (
  <div
    className={mergeClasses('Notification', [!show, 'Notification__disappear'])}
    style={{
      backgroundImage: styles.backgroundImage,
      borderColor: styles.borderColor,
      boxShadow: `1px 1px 16px -7px ${styles.theme}`,
    }}
  >
    <div className="Notification__icon" style={{ backgroundColor: styles.theme }}>
      <div>
        <styles.svg fill={styles.theme} />
      </div>
    </div>
    <div className="Notification__content">{children}</div>
    <button className="Notification__close_button" onClick={onClose}>
      <CloseSvg />
    </button>
  </div>
);

export default Notification;
