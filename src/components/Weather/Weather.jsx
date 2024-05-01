import { useState } from "react";
import WeatherCard from "./WeatherCard";
import AreaSearch from "./AreaSearch";

function Weather() {
  const [search, setSearch] = useState();
  const [searchNow, setSearchNow] = useState(true);

  let handleSearch = () => {
    setSearchNow((prev) => !prev);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <AreaSearch
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <WeatherCard param={search} handleSearch={searchNow} />
    </div>
  );
}

export default Weather;
