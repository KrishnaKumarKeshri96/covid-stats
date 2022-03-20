import { useEffect, useState } from "react";

import { getBaseData } from "./api/getBaseData";
import { getWorldData } from "./api/getWorldData";
import { getDailyData } from "./api/getDailyData";

import { Loader } from "./components/loader/index";

import { Map } from "./components/status/Map";

function App() {
  const [dashboardData, setDashboardData] = useState(null);
  const [worldData, setWorldData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const [dashboardData, worldData, dailyData] = await Promise.all([
        getBaseData(),
        getWorldData(),
        getDailyData(),
      ]);

      setWorldData(worldData);
      setDashboardData(dashboardData);
      setDailyData(dailyData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  if (!worldData || !dashboardData || !dailyData) return null;

  let data = {};
  worldData.forEach((currVal) => {
    if (!data[currVal.iso3]) {
      data[currVal.iso3] = {
        recovered: currVal.recovered,
        iso3: currVal.iso3,
        deaths: currVal.deaths,
        active: currVal.active,
        confirmed: currVal.confirmed,
        country: currVal.countryRegion,
      };
    } else {
      data[currVal.iso3] = {
        iso3: currVal.iso3,
        recovered: currVal.recovered + data[currVal.iso3].recovered,
        deaths: currVal.deaths + data[currVal.iso3].deaths,
        active: currVal.active + data[currVal.iso3].active,
        confirmed: currVal.confirmed + data[currVal.iso3].confirmed,
        country: data[currVal.iso3].country,
      };
    }
  });

  return <Map data={data} />;

  // return Object.keys(data).length ? <Map /> : <Loader />;
}

export default App;
