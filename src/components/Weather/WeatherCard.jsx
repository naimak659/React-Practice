import React, { useEffect, useMemo, useState } from "react";
import { mImages } from "./IconData";

function WeatherCard({ param = "bangladesh", handleSearch }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState("");
  const [icon, setIcon] = useState();

  function math(temp) {
    return (temp - 273.5).toFixed(1);
  }

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeatherData(res);
        setIcon(res.weather[0].main);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.toString());
        setLoading(false);
      });
  }, [handleSearch]);

  useEffect(() => {
    let localTime = new Date(weatherData?.dt * 1000);

    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setTime(localTime.toLocaleDateString("en-US", options));
  }, [weatherData]);

  function icons() {
    let cusIcon = "";
    if (icon == "Clouds") {
      cusIcon = mImages.Clouds;
    } else if (icon == "Clear") {
      cusIcon = mImages.Clear;
    } else if (icon == "Rain") {
      cusIcon = mImages.Rain;
    } else if (icon == "Drizzle") {
      cusIcon = mImages.Drizzle;
    } else if (icon == "Mist") {
      cusIcon = mImages.Mist;
    } else if (icon == "Snow") {
      cusIcon = mImages.Snow;
    } else if (icon == "Wind") {
      cusIcon = mImages.Wind;
    } else if (icon == "Haze") {
      cusIcon = mImages.Haze;
    }
    return cusIcon;
  }

  return loading ? (
    <div>Loading ...</div>
  ) : (
    <div className="w-96">
      <div className=" flex items-center justify-center ">
        <div className="shadow-2xl flex flex-col bg-white dark:bg-zinc-900 rounded p-4 w-full max-w-xs ">
          <div className="font-bold text-xl">{weatherData?.name}</div>
          <div className="text-sm text-gray-500 dark:text-zinc-400">{`${time}`}</div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-full text-indigo-400 w-24 h-24">
            {/* <img
              className="select-none"
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={icon}
            /> */}
            {icons()}
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">
              {math(weatherData?.main?.temp)}
            </div>
            <div className="flex flex-col items-center ml-6">
              <div>{weatherData?.weather[0]?.main}</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-gray-500 dark:text-zinc-300">
                  {`${math(weatherData?.main?.temp_max)}°C`}
                </span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down"></i>
                </span>
                <span className="text-sm font-light text-gray-500 dark:text-zinc-300">
                  {`${math(weatherData?.main?.temp_min)}°C`}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500 dark:text-zinc-300">
                {`${weatherData?.wind?.speed.toFixed(1)}km/h`}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500 dark:text-zinc-300">
                {`${weatherData?.main?.humidity}%`}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500 dark:text-zinc-300">
                {`${(weatherData?.visibility / 1000).toFixed(1)}km`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
