import { useEffect, useState } from "react";

import { Loader } from "./components/loader/index";
import { getBaseData } from "./api/getBaseData";

import { Map } from "./components/status/Map";

function App() {
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    getBaseData().then((data) => {
      setData(data);
    });
  }, []);
  return Object.keys(data).length ? <Map /> : <Loader />;
}

export default App;
