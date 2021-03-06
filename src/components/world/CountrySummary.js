import { dashboardCountKeys } from "../../constants/dashboard";
import {
  capitalizeFirst,
  numberWithCommas,
  getFormattedDate,
} from "../../utils";
import LeftArrow from "../../assets/leftArrow.svg";

export const CountrySummary = ({ data, country, goBack }) => {
  const { lastUpdate } = data;
  return (
    <div className="country-summary">
      <div className="left-country-summary">
        <button onClick={goBack}>
          <img src={LeftArrow} alt="Arrow" />
        </button>
        <div className="country-name">{country || "N/A"}</div>
        <div>
          {lastUpdate
            ? `As of ${getFormattedDate(lastUpdate)}`
            : "Not Available"}
        </div>
      </div>
      <div className="right-country-summary">
        {dashboardCountKeys.map((type) => {
          return (
            <div>
              <div>
                {data[type]?.value
                  ? numberWithCommas(data[type].value)
                  : "Not Available"}
              </div>
              <div className="count-type">{capitalizeFirst(type)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
