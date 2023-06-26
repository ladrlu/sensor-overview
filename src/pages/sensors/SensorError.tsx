import { Link, useRouteError } from "react-router-dom";
import LinkMUI from "@mui/material/Link";
import { Button, Typography } from "@mui/material";

export const SensorError = () => {
  const error = useRouteError();
  return (
    <>
      <Typography variant="h4">
        Error: {(error as ErrorEvent).message}
      </Typography>
      <Button variant="contained" to="/" component={Link} sx={{ mt: 3 }}>
        Choose sensor from the list
      </Button>
    </>
  );
};
