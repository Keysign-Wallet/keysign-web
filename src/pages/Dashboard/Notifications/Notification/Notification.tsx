import React from 'react';
import { ReactComponent as CloseSvg } from '../../../../assets/svgs/close.svg';
import { ReactComponent as CheckSvg } from '../../../../assets/svgs/check.svg';
import './Notification.scss';

const Notification: React.FC = () => (
  <div className="Notification">
    <div className="Notification__icon">
      <div>
        <CheckSvg />
      </div>
    </div>
    <div className="Notification__content">Copied to clipboard</div>
    <button className="Notification__close_button">
      <CloseSvg />
    </button>
  </div>
);

export default Notification;
