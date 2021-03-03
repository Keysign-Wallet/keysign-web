import React from 'react';
import { ReactComponent as Arrow } from '../../../assets/svgs/arrow.svg';
import './DashboardHeader.scss';

const DashboardHeader: React.FC<{ showBackButton: boolean; goBack: () => void; headerElement: JSX.Element | null }> = ({ showBackButton, goBack, headerElement }) => (

      <div className="DashboardHeader__top">
        <div className="DashboardHeader__top-left">
          {showBackButton && (
            <button className="DashboardHeader__back-button border-keysign-dark-grey" onClick={goBack}>
              <Arrow />
              <div className="text-keysign-dark">
                <b>Previous</b>
              </div>
            </button>
          )}
          {headerElement && headerElement}
        </div>
        <div className="keysign-default-border background-keysign-light DashboardHeader__total text-keysign-dark">
          <div className="total-caption">fiat equivalent</div>
          <div className="total-value">$345,876.908</div>
        </div>
      </div>
);

export default DashboardHeader;
