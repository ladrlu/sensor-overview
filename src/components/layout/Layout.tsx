import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import { Box, Container } from "@mui/material";
import { theme } from "../../theme";

export const Layout = () => (
  <Box sx={{ background: theme.palette.grey[100], minHeight: "100vh" }}>
    <AppBar />
    <Container component="main" sx={{ pt: 6, pb: 3 }}>
      <Outlet />
    </Container>
  </Box>
);
