import { SwipeableDrawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GraphCard } from "../components/GraphCard";
import {
  doneWokroutsSelector,
  workoutSelector,
} from "../features/workout/workout.slice";
import { Workout } from "../features/workout/workout.types";

export const Progress = () => {
  const workouts = useSelector(doneWokroutsSelector);
  const [data, setData] = useState([]);
  const aggregateData = (workouts: Workout[]) =>
    workouts.map((workout) => ({
      ...workout,
      day: workout.date.split("/")[0],
    }));

  useEffect(() => {
    setData(aggregateData(workouts));
  }, [workouts]);

  return (
    <div className="page" style={{gap: "0.5rem", display: 'flex', flexDirection: 'column'}}>
      <GraphCard
        data={data}
        title="Volume"
        yDataKey="volume"
        xDataKey="day"
      />
      <GraphCard
        data={data}
        title="Intensity"
        yDataKey="averageIntensity"
        xDataKey="day"
      />
      
      <GraphCard
        data={data}
        title="Max Intensity"
        yDataKey="maxIntensity"
        xDataKey="day"
      />
      
    </div>
  );
};
