import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { SensorList, sensorsLoader } from "./pages/sensors/SensorList";
import { Sensor, sensorLoader } from "./pages/sensors/Sensor";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";
import { SensorError } from "./pages/sensors/SensorError";
import { SensorsError } from "./pages/sensors/SensorsError";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        index
        element={<SensorList />}
        loader={sensorsLoader}
        errorElement={<SensorsError />}
      />
      <Route
        path="/:id"
        element={<Sensor />}
        loader={sensorLoader}
        errorElement={<SensorError />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
