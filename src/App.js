import { useEffect, useState } from "react";

import { Loader } from "./components/loader/index";
import { getBaseData } from "./api/getBaseData";

function App() {
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    getBaseData().then((data) => {
      setData(data);
    });
  }, []);
  return Object.keys(data).length ? <h1>Got Data</h1> : <Loader />;
}

export default App;
