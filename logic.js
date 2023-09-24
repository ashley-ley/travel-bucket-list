// Create a map object 
let myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3
});

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Add list of countries on your travel bucket list 
// Country data
let countries = [
    {
      name: "Italy",
      location: [41.872, 12.567],
      population: 56000000
    },
    {
      name: "Brazil",
      location: [-14.2350, -51.925],
      population: 214000000
    },
    {
      name: "Switzerland",
      location: [46.818, -8.227],
      population: 8703000
    },
    {
      name: "Ireland",
      location: [53.412, -8.243],
      population: 5033000
    },
    {
      name: "Canary Islands",
      location: [28.291, -16.6291],
      population: 2207000
    },
    {
      name: "Greece",
      location: [39.074, 21.824],
      population: 10640000
    },
    {
      name: "Thailand",
      location: [15.870, 100.992],
      population: 71600000
    },
    {
      name: "Australia",
      location: [-25.274, 133.775],
      population: 25690000
    },
    {
      name: "Singapore",
      location: [1.352, 103.819],
      population: 5454000
    },
    {
      name: "Iceland",
      location: [64.963, -19.020],
      population: 372520
    },
    {
      name: "Netherlands",
      location: [52.132, 5.291],
      population: 17530000
    },
    {
      name: "New Zealand",
      location: [-42.866, 172.729],
      population: 5123000
    },
    {
      name: "Australia",
      location: [-25.274, 133.775],
      population: 25690000
    },
    {
      name: "Ireland",
      location: [52.912, -9.225],
      population: 5033000
    },
    {
      name: "Cambodia",
      location: [13.014, 104.229],
      population: 16590000
    },
    {
      name: "Austria",
      location: [47.516231, 14.550072],
      population: 8956000
    },
    {
      name: "Hong Kong",
      location: [22.396, 114.109],
      population: 7413000
    },
    {
      name: "Germany",
      location: [51.165, 10.451],
      population: 83000000
    },
    {
      name: "Ecuador",
      location: [-0.847, -78.846],
      population: 17800000
    },
    {
      name: "Canada",
      location: [52.287, -88.690],
      population: 38250000
    }
  ];

let houseMarkers = []
let houseCircles = []

for (let i = 0; i < countries.length; i++) {
  let marker = L.marker(countries[i].location).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>Population: ${countries[i].population.toLocaleString()}`);
  houseMarkers.push(marker);
}

for (let i = 0; i < countries.length; i++) {
  let circle = L.circle(countries[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: getColor(countries[i].population),
      radius: markerSize(countries[i].population)
  }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>Population: ${countries[i].population.toLocaleString()}</h3>`).addTo(myMap);
  houseCircles.push(circle);
};

function markerSize(population) { 
  return Math.sqrt(population) * 50;
};

function getColor(population) {
  return population <= 5000000 ? "yellow" :
          population <= 10000000 ? "orange" :
          population <= 25000000 ? "green" :
          population <= 50000000 ? "blue":
                                    "violet";
}

let markersGroup = L.layerGroup(houseMarkers);
let circlesGroup = L.layerGroup(houseCircles);

let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

let baseMaps = {
  Street: street,
  Topography: topo
};

let overlayMaps = {
  "Bucket List Countries": markersGroup,
  "Population Density": circlesGroup
}

L.control.layers(baseMaps, overlayMaps).addTo(myMap);





  