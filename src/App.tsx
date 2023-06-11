import React, { useState } from "react";
import {
  getBodies,
  getAllBodyPositions,
  getBodyPosition,
  getStarChart,
  getMoonPhase,
} from "./Components/utils/http/http";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, SolarSystemPage, SolarSystemBodyPage } from "./Components/pages/indexPg";
import { NavBar } from "./Components/UI/indexUI";
import { useAppSelector } from "./App/hooks";
import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./App/store";

const App = () => {
  // const [path, setPath] = useState("/hahaha");
  const title = useAppSelector((state) => state.solarSystem.title);
  const description = useAppSelector((state) => state.solarSystem.description);
  console.log("title: ", title);
  console.log("description: ", description);
  const handleButton = async () => {
    const starChartObject = {
      style: "default",
      observer: {
        latitude: 51.51,
        longitude: 0.13,
        date: "2023-06-04",
      },
      view: {
        type: "constellation" as const,
        parameters: {
          constellation: "ori",
        },
      },
    };

    // use as const to fix String/Literal type error issue
    const moonPhaseObject = {
      format: "png" as const,
      style: {
        moonStyle: "sketch" as const,
        // "backgroundStyle": "stars",
        // "backgroundColor": "red",
        // "headingColor": "white",
        // "textColor": "red"
      },
      observer: {
        latitude: 6.56774,
        longitude: 79.88956,
        date: "2020-11-01",
      },
      view: {
        type: "portrait-simple" as const,
        orientation: "south-up" as const,
      },
    };

    // const starChart = await getStarChart(starChartObject);
    // const moonPhase = await getMoonPhase(moonPhaseObject);
    // console.log(starChart.data.imageUrl);
    // console.log(moonPhase.data.imageUrl);
  };
  return (
    <>
      <NavBar />
      <button onClick={handleButton}>Click Here to activate API</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solarSystem" element={<SolarSystemPage />} />
        <Route
          path={`/solarSystem/:id`}
          element={<SolarSystemBodyPage title={title} description={description} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
