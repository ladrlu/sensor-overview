import { Link, useRouteError } from "react-router-dom";

export const SensorError = () => {
  const error = useRouteError();
  return (
    <>
      <span>{(error as ErrorEvent).message}</span>
      <Link to="/">Choose sensor from the list</Link>
    </>
  );
};
