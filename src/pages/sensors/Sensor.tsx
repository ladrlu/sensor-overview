import { useLoaderData, Params } from "react-router-dom";
import { SensorItem } from "./SensorList";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const Sensor = () => {
  const sensor = useLoaderData();
  const sensorItem = sensor as SensorItem;

  return (
    <>
      <Breadcrumbs lastCrumb={sensorItem.name} />
      <span>Sensor {sensorItem.name}</span>
    </>
  );
};

export const sensorLoader = async ({ params }: { params: Params }) => {
  const { id } = params;

  const res = await fetch(
    `http://localhost:8000/sensors/${id?.replace("sensor-", "")}`
  );

  if (!res.ok) {
    throw Error("Data not loaded");
  }
  return res.json();
};
