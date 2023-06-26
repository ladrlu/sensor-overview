import AppBarMUI from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { theme } from "../../theme";
import { Link } from "react-router-dom";
import LinkMUI from "@mui/material/Link";

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMUI position="static">
        <Toolbar variant="dense">
          <LinkMUI
            to="/"
            variant="h6"
            component={Link}
            sx={{
              color: theme.palette.primary.contrastText,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FmdGoodIcon sx={{ mr: 2 }} /> Sensor Overview
          </LinkMUI>
        </Toolbar>
      </AppBarMUI>
    </Box>
  );
}
