# Sensor Overview

This is a test project with a frontend created with React, and a backend simulated using `json-server`. The application uses [React Router](https://reactrouter.com/) for routing, [Material-UI](https://mui.com/) for UI components, and [OpenLayers](https://openlayers.org/) for map rendering.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your local machine.

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/ladrlu/sensor-map.git
   cd sensor-map
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

3. Start the frontend:

   ```
   yarn start
   ```

   The frontend should now be running at [http://localhost:3000](http://localhost:3000).

4. In a new terminal, start the backend:

   ```
   yarn json-server --watch data/db.json --port 8000
   ```

   The backend should now be running at [http://localhost:8000](http://localhost:8000).

## Using the Application

Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

## Project Structure

- `src`: This directory contains all the frontend source code written in React.
- `data`: This directory contains `db.json` which is used by `json-server` to mock a backend API.
