// ======================================================

// PART 1: Create the Earthquake Visualisation

// ======================================================

// STEP 1: Create a Map and Add a Tile Layer

// ----------------------------------------------------

// Creating the map object with worldCopyJump, minZoom, and maxBounds options
let myMap = L.map("map", {
    center: [20.0, 0.0],
    zoom: 2.5,
    worldCopyJump: true,
    minZoom: 2.5,
    maxBounds: [
        [-60, -180], // Southwest coordinates
        [70, 150]    // Northeast coordinates
    ]
});

// Base layers
var cartoDBLight = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(myMap);

var osmStandard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


// ----------------------------------------------------

// STEP 2: Fetch Earthquake Data and Add Markers

// ----------------------------------------------------

// Create a layer group for earthquakes
var earthquakeLayer = L.layerGroup();

// Define the URL for the USGS GeoJSON feed for all earthquakes in the past 7 days
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Fetch the earthquake data using D3
d3.json(queryUrl).then(function(data) {
  // Log the fetched data to the console for verification
  console.log("Fetched Data:", data);

  // Check if the data is in the correct format
  if (!data || !data.features) {
    console.error("Invalid data format:", data);
    return;
  }

  // Log the first feature to verify the structure
  console.log("First Feature:", data.features[0]);

  // Add GeoJSON layer to the earthquakeLayer once the data is fetched
  L.geoJSON(data, {
    // Create circle markers for each earthquake
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
        radius: feature.properties.mag * 4, // Marker size based on magnitude
        fillColor: getColor(feature.geometry.coordinates[2]), // Marker color based on depth
        color: "#000", // Black border for visibility
        weight: 1, // Border thickness
        opacity: 1, // Border opacity
        fillOpacity: 0.5 // Fill opacity
      });
    },
    // Bind a popup to each marker with additional information
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3>Magnitude: " + feature.properties.mag + "</h3><hr><p>Location: " + feature.properties.place + "</p><p>Depth: " + feature.geometry.coordinates[2] + " km</p>");
    }
  }).addTo(earthquakeLayer); // Add the GeoJSON layer to the earthquakeLayer

  // Add the earthquakeLayer to the map
  earthquakeLayer.addTo(myMap);

}).catch(function(error) {
  console.error("Error fetching data:", error);
});

// Function to get color based on depth
function getColor(depth) {
  return depth > 90 ? '#320A5A' :
         depth > 70 ? '#732673' :
         depth > 50 ? '#BD3843' :
         depth > 30 ? '#DA4545' :
         depth > 10 ? '#ff9999' :
                      '#ffbf80';
}

// ======================================================

// PART 2: Add Plate Boundaries Layer

// ======================================================

// STEP 1: Create a GeoJSON layer for plate boundaries

// ----------------------------------------------------

// Create a layer group for plate boundaries
var plateBoundaryLayer = L.layerGroup();

// Fetch the plate boundary data using D3
d3.json("Resources/PB2002_boundaries.json").then(function(data) {
  // Log the fetched data to the console for verification
  console.log("Plate Boundaries Data:", data);

  // Check if the data is in the correct format
  if (!data || !data.features) {
    console.error("Invalid plate boundary data format:", data);
    return;
  }

  // Add GeoJSON layer to the plateBoundaryLayer once the data is fetched
  L.geoJSON(data, {
    style: function (feature) {
      return {
        color: "black",
        weight: 2
      };
    }
  }).addTo(plateBoundaryLayer); // Add the GeoJSON layer to the plateBoundaryLayer

  // Add the plateBoundaryLayer to the map
  plateBoundaryLayer.addTo(myMap);

}).catch(function(error) {
  console.error("Error fetching plate boundaries data:", error);
});

// ----------------------------------------------------

// STEP 2: Add Layer Control

// ----------------------------------------------------

// Define baseMaps and overlayMaps
var baseMaps = {
  "CartoDB Light": cartoDBLight,
  "OpenStreetMap": osmStandard
  };

var overlayMaps = {
  "Earthquakes": earthquakeLayer,
  "Plate Boundaries": plateBoundaryLayer
};

// Add layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

// ----------------------------------------------------

// STEP 3: Adding a legend to the map

// ----------------------------------------------------

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),
      grades = [-10, 10, 30, 50, 70, 90],
      labels = [];

  div.innerHTML += '<strong>Depth (km)</strong><br>';

  // Loop through our depth intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
      grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }

  return div;
};

legend.addTo(myMap);
