import React from "react";

import { capitalizeFirst, numberWithCommas } from "../../utils";
import { dashboardCountKeys } from "../../constants/dashboard";

export const Dashboard = (props) => {
  const { data } = props;
  return (
    <div className="dashboard-counts">
      {dashboardCountKeys.map((dashboardCountKey) => {
        return (
          <div>
            <div className="dashboard-count-label">
              {capitalizeFirst(dashboardCountKey)}
            </div>
            <div className="dashboard-count-value">
              {numberWithCommas(data[dashboardCountKey].value)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
