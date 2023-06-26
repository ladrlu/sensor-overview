import { useLoaderData, Params } from "react-router-dom";

import { Paper, Typography } from "@mui/material";
import { SensorItem } from "../../types";
import { GoBack } from "../../components/navigation/GoBack";
import { SensorMap } from "../../components/sensor/SensorMap";

export const Sensor = () => {
  const sensor = useLoaderData();
  const sensorItem = sensor as SensorItem;

  return (
    <>
      <GoBack sx={{ mb: 2 }}>Go back to the list</GoBack>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h3" component="h1">
          {sensorItem.name}
        </Typography>
        <Typography variant="h5" component="h2" mt={2}>
          Coordinates:
        </Typography>
        <Typography variant="body1" component="div" mb={2}>
          <strong>lat:</strong> {sensorItem.coordinates[1]} <br />
          <strong>long:</strong> {sensorItem.coordinates[0]}
        </Typography>
        <SensorMap coordinates={sensorItem.coordinates} />
      </Paper>
    </>
  );
};

export const sensorLoader = async ({ params }: { params: Params }) => {
  const { id } = params;
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/sensors/${id?.replace("sensor-", "")}`
  );
  if (!res.ok) {
    throw Error("Data not loaded");
  }
  return res.json();
};
