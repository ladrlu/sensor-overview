import { Typography } from "@mui/material";
import { theme } from "../theme";

export const NotFound = () => (
  <>
    <Typography
      variant="h1"
      sx={{ color: theme.palette.primary.main, textAlign: "center" }}
      mt={5}
    >
      404
    </Typography>
    <Typography variant="h4" component="div" sx={{ textAlign: "center" }}>
      Page not Found
    </Typography>
  </>
);
