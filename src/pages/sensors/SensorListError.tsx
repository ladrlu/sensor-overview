import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export const SensorListError = () => {
  const error = useRouteError();
  return (
    <Typography variant="h4">Error: {(error as ErrorEvent).message}</Typography>
  );
};
