import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { SensorItem } from "../../types";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const SensorCard = ({ sensor }: { sensor: SensorItem }) => (
  <Grid item xs={12} sm={6} md={4} key={sensor.id}>
    <Card
      component={Link}
      to={`/sensor-${sensor.id}`}
      sx={{
        p: 3,
        width: "100%",
        height: "100%",
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {sensor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {sensor.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" endIcon={<ArrowForwardIcon />}>
          View detail
        </Button>
      </CardActions>
    </Card>
  </Grid>
);
