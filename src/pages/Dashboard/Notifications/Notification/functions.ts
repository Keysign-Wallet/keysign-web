import { NotificationTypes } from '../../../../redux/Dashboard/types';
import { ReactComponent as CheckSvg } from '../../../../assets/svgs/check.svg';
import { ReactComponent as InfoSvg } from '../../../../assets/svgs/information.svg';
import { NotificationStyles } from './types';

export const getStyle = (notificationType: NotificationTypes): NotificationStyles => {
  switch (notificationType) {
    case NotificationTypes.INFORMATIONAL:
      return {
        backgroundImage: 'linear-gradient(#d5e9f5, #dfedf5, #d5e9f5)',
        borderColor: '#26a4ed',
        svg: InfoSvg,
        theme: '#4287f5',
      };
    default:
      return {
        backgroundImage: 'linear-gradient(rgb(231, 245, 231), rgb(226, 236, 226), rgb(231, 245, 231))',
        borderColor: 'rgb(126, 189, 126)',
        // for this to work, set fill="current" stroke="current" in the svg path
        svg: CheckSvg,
        theme: 'rgb(64, 187, 64)',
      };
  }
};
