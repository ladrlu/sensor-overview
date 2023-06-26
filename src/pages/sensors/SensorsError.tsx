import { useRouteError } from "react-router-dom";

export const SensorsError = () => {
  const error = useRouteError();
  return <span>{(error as ErrorEvent).message}</span>;
};
