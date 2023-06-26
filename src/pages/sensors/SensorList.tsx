import { useLoaderData } from "react-router-dom";
import { SensorItem } from "../../types";
import { Grid, Typography } from "@mui/material";
import { SensorCard } from "../../components/sensor/SensorCard";

export const SensorList = () => {
  const sensors = useLoaderData();
  return (
    <>
      <Typography variant="h3" component="h1">
        Sensor List
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1, width: "100%" }}>
        {(sensors as SensorItem[]).map((sensor) => (
          <SensorCard sensor={sensor} key={sensor.id} />
        ))}
      </Grid>
    </>
  );
};

export const sensorsLoader = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/sensors`);
  if (!res.ok) {
    throw Error("Data not loaded");
  }
  return res.json();
};
