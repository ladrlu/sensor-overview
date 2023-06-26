import { Link, useLoaderData } from "react-router-dom";
import LinkMUI from "@mui/material/Link";

export interface SensorItem {
  id: string;
  name: string;
  description: string;
  coordinates: number[];
}

export const SensorList = () => {
  const sensors = useLoaderData();
  return (
    <span>
      {(sensors as SensorItem[]).map((sensor) => (
        <LinkMUI component={Link} to={`/sensor-${sensor.id}`} key={sensor.id}>
          {sensor.name}
        </LinkMUI>
      ))}
    </span>
  );
};

export const sensorsLoader = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/sensors`);
  if (!res.ok) {
    throw Error("Data not loaded");
  }
  return res.json();
};
