import AppBarMUI from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMUI position="static">
        <Toolbar variant="dense">
          <FmdGoodIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div">
            Sensor Overview
          </Typography>
        </Toolbar>
      </AppBarMUI>
    </Box>
  );
}
