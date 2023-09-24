# Interactive Map with Toggleable Layers

This repository contains the code and resources to create an interactive map using Leaflet.js. The map allows users to toggle between different views, including street and topography base layers, and overlay layers for displaying "Bucket List Countries" and "Population Density" data.

## Features

- Toggle between street and topography base maps.
- Display a layer showing "Bucket List Countries" on the map.
- Display a layer representing "Population Density" with color-coded markers.
- Interactive popups with additional information for each location.

## Files Included

- `index.html`: The main HTML file that renders the map and includes the required JavaScript and CSS files.
- `logic.js`: JavaScript file responsible for configuring the map, adding base layers, overlay layers, and popups.
- `style.css`: CSS file for custom styling of the map and popups.
- `data.js` (optional): If needed, a separate JavaScript file for storing and managing data.

## Usage

1. Clone or download this repository to your local machine.

2. Open `index.html` in a web browser to view the interactive map.

3. Use the layer control in the top-right corner of the map to toggle between base map views (street and topography) and overlay layers ("Bucket List Countries" and "Population Density").

4. Click on map markers or features to view popups with additional information.

## Dependencies

- [Leaflet.js](https://leafletjs.com/): A leading open-source JavaScript library for interactive maps.
- [OpenStreetMap](https://www.openstreetmap.org/): Used for base map tiles.
- [OpenTopoMap](https://opentopomap.org/): Used for topography base map tiles (optional).
