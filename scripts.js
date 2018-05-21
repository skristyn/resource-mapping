// TO DO:  ADD POP-UPS ON CLICK ON GREENWAYS, SET BUSINESS ICON IMAGES, SET COMMUNITY ICON IMAGES, 
// REMOVE CLOSED SCHOOLS, SET SHOWALL FUNCTION, FIND SANS SERIF FONT FOR NAV MENU, MAKE RESPONSIVE, 
// PUT FULL LOGO BACK FOR LARGE SCREEN SIZE, ADD PARAGRAPH ABOUT EII/NGA AND FINISH 'ABOUT' PAGE

var map = L.map('mapid').setView([42.35537, -83.00729], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(map);

// Global Variables
var mogoLocations=null;
var reccenterLocations = null;
var businessLocations = null;
var communityLocations = null;
var parkLocations = null;
var busLocations = null;
var schoolLocations = null;


var bballMarker = L.AwesomeMarkers.icon({
  prefix: 'ion-ios', //for Font Awesome, the prefix is 'fa'
  icon: 'basketball',
  markerColor: 'gray',
  iconColor: 'orange'
});

var bikeMarker = L.AwesomeMarkers.icon({
  prefix: 'ion-android', //for Font Awesome, the prefix is 'fa'
  icon: 'bicycle',
  markerColor: 'green',
  iconColor: 'white'
});

var schoolMarker = L.AwesomeMarkers.icon({
  prefix: 'fa', //for Font Awesome, the prefix is 'fa'
  icon: 'graduation-cap',
  markerColor: 'red',
  iconColor: 'white'
});

var libraryMarker = L.AwesomeMarkers.icon({
  prefix: 'fa', //for Font Awesome, the prefix is 'fa'
  icon: 'book',
  markerColor: 'purple',
  iconColor: 'white'
});

var storeMarker = L.AwesomeMarkers.icon({
  prefix: 'fa',
  icon: 'shopping-bag',
  markerColor: 'blue',
  iconColor: 'white'
});

var businessMarker = L.AwesomeMarkers.icon({
  prefix: 'fa',
  icon: 'building',
  markerColor: 'blue',
  iconColor: 'white'
});

var religousMarker = L.AwesomeMarkers.icon({
  prefix: 'ion-ios',
  icon: 'book',
  markerColor: 'purple',
  iconColor: 'white'
});

var pharmacyMarker = L.AwesomeMarkers.icon({
  prefix: 'fa',
  icon: 'medkit',
  markerColor: 'blue',
  iconColor: 'white'
});

var hospitalMarker = L.AwesomeMarkers.icon({
  prefix: 'fa',
  icon: 'h-square',
  markerColor: 'purple',
  iconColor: 'white'
});

var rehabilitationMarker = L.AwesomeMarkers.icon({
  prefix: 'fa',
  icon: 'h-square',
  markerColor: 'purple',
  iconColor: 'white'
});

var eldercareMarker = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'heart',
  markerColor: 'purple',
  iconColor: 'white'
});

var historicalhomeMarker = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'h-square',
  markerColor: 'purple',
  iconColor: 'white'
});

var gardenMarker = L.AwesomeMarkers.icon({
  prefix: 'ion-ios',
  icon: 'rose',
  markerColor: 'purple',
  iconColor: 'white'
});

var therapeuticMarker = L.AwesomeMarkers.icon({
  prefix: 'fa',
  icon: 'h-square',
  markerColor: 'purple',
  iconColor: 'white'
});

var youthservicesMarker = L.AwesomeMarkers.icon({
  prefix: 'fa',
  icon: 'h-square',
  markerColor: 'purple',
  iconColor: 'white'
});

var assistedlivingMarker = L.AwesomeMarkers.icon({
  prefix: 'fa',
  icon: 'h-square',
  markerColor: 'purple',
  iconColor: 'white'
});

var realtyMarker = L.AwesomeMarkers.icon({
  prefix: 'ion-ios', 
  icon: 'home',
  markerColor: 'blue',
  iconColor: 'white'
});

var childcareMarker = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'child',
  markerColor: 'purple',
  iconColor: 'white'
});

var busIcon = L.icon({
  iconUrl: 'images/bus-icon.png',
  iconSize: [20,21],
  iconAnchor: [16,16],
  popupAnchor: [0,-6]
});

var foodbanksIcon = L.AwesomeMarkers.icon({
  prefix: 'ion',
  icon: 'soup-can-outline',
  markerColor: 'purple',
  iconColor: 'white'
});

var parkIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'tree',
  markerColor: 'orange',
  iconColor: 'white'
});

var carwashIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'car',
  markerColor: 'blue',
  iconColor: 'white'
});

var restaurantIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'cutlery',
  markerColor: 'blue',
  iconColor: 'white'
});

var barberIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'scissors',
  markerColor: 'blue',
  iconColor: 'white'
});

var autorepairIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'wrench',
  markerColor: 'blue',
  iconColor: 'white'
});

var artIcon = L.AwesomeMarkers.icon({
  prefix: 'ion-android', 
  icon: 'color-palette',
  markerColor: 'blue',
  iconColor: 'white'
});

var bikeshopIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'bicycle',
  markerColor: 'blue',
  iconColor: 'white'
});

var gasIcon = L.AwesomeMarkers.icon({
  prefix: 'ion-ios',
  icon: 'speedometer',
  markerColor: 'blue',
  iconColor: 'white'
});

var fosterMarker = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'heart',
  markerColor: 'purple',
  iconColor: 'white'
});

var moneyIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'usd',
  markerColor: 'blue',
  iconColor: 'white'
});

var musicIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'music',
  markerColor: 'blue',
  iconColor: 'white'
});

var healthcareIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'plus-square',
  markerColor: 'purple',
  iconColor: 'white'
});

var communityIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'hand-rock-o',
  markerColor: 'purple',
  iconColor: 'white'
});

var humanservicesIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'male',
  markerColor: 'purple',
  iconColor: 'white'
});

var fireIcon = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'fire-extinguisher',
  markerColor: 'purple',
  iconColor: 'white'
});

var blockclubMarker = L.AwesomeMarkers.icon({
  prefix: 'fa', 
  icon: 'users',
  markerColor: 'purple',
  iconColor: 'white'
});

// Database Queries
var business_query = "SELECT businesses.name, businesses.description, businesses.the_geom FROM businesses, (SELECT * FROM neighborhoods WHERE nhood_name = 'Islandview' OR nhood_name= 'West Village' or nhood_name = 'Gratiot-Grand' or nhood_name = 'Elmwood Park') AS bus_i WHERE ST_Intersects(businesses.the_geom, bus_i.the_geom)"
var community_query = "SELECT community_resources.name, community_resources.description, community_resources.the_geom FROM community_resources, (SELECT * FROM neighborhoods WHERE nhood_name = 'Islandview' OR nhood_name= 'West Village' or nhood_name = 'Gratiot-Grand' or nhood_name = 'Elmwood Park') AS bus_i WHERE ST_Intersects(community_resources.the_geom, bus_i.the_geom)"
var park_query = "SELECT parks_islandview.name, parks_islandview.the_geom FROM parks_islandview, (SELECT * FROM neighborhoods WHERE nhood_name = 'Islandview' OR nhood_name= 'West Village' or nhood_name = 'Gratiot-Grand' or nhood_name = 'Elmwood Park') AS bus_i WHERE ST_Intersects(parks_islandview.the_geom, bus_i.the_geom)"
var reccenter_query = "SELECT reccenters.name, reccenters.address, reccenters.the_geom FROM reccenters, (SELECT * FROM neighborhoods WHERE nhood_name = 'Islandview' OR nhood_name= 'West Village' or nhood_name = 'Gratiot-Grand' or nhood_name = 'Elmwood Park') AS neighborhood_i WHERE ST_Intersects(reccenters.the_geom, neighborhood_i.the_geom)"
var bus_query = "SELECT bus_stops2.stop_name, bus_stops2.the_geom FROM bus_stops2, (SELECT * FROM neighborhoods WHERE nhood_name = 'Islandview' OR nhood_name= 'West Village' or nhood_name = 'Gratiot-Grand' or nhood_name = 'Elmwood Park') AS neighborhood_i WHERE ST_Intersects(bus_stops2.the_geom, neighborhood_i.the_geom)"
var mogo_query = "SELECT mogo.name, mogo.the_geom, mogo.docks FROM mogo, (SELECT * FROM neighborhoods WHERE nhood_name = 'Islandview' OR nhood_name= 'West Village' or nhood_name = 'Gratiot-Grand' or nhood_name = 'Elmwood Park') AS neighborhood_i WHERE ST_Intersects(mogo.the_geom, neighborhood_i.the_geom)"
var schools_query = "SELECT schools.sitename, schools.the_geom, schools.address, schools.status FROM schools, (SELECT * FROM neighborhoods WHERE nhood_name = 'Islandview' OR nhood_name= 'West Village' or nhood_name = 'Gratiot-Grand' or nhood_name = 'Elmwood Park') AS neighborhood_i WHERE ST_Intersects(schools.the_geom, neighborhood_i.the_geom)"
var greenways_query = "SELECT greenways.name, greenways.the_geom, greenways.type, greenways.status FROM greenways, (SELECT * FROM neighborhoods WHERE nhood_name = 'Islandview' OR nhood_name= 'West Village' or nhood_name = 'Gratiot-Grand' or nhood_name = 'Elmwood Park') AS neighborhood_i WHERE ST_Intersects(greenways.the_geom, neighborhood_i.the_geom)"

// Function to remove all layers
function removeAllLayers() {
  if(map.hasLayer(businessLocations)){
    map.removeLayer(businessLocations);
  };
  if(map.hasLayer(communityLocations)){
    map.removeLayer(communityLocations);
  };
  if(map.hasLayer(parkLocations)){
    map.removeLayer(parkLocations);
  };
  if(map.hasLayer(reccenterLocations)){
    map.removeLayer(reccenterLocations);
  };
  if(map.hasLayer(busLocations)){
    map.removeLayer(busLocations);
  };
  if(map.hasLayer(schoolLocations)){
    map.removeLayer(schoolLocations);
  };
  if(map.hasLayer(mogoLocations)){
    map.removeLayer(mogoLocations);
  };
  if(map.hasLayer(busLocations)){
    map.removeLayer(busLocations);
  };
  if(map.hasLayer(greenwaysGroup)){
    map.removeLayer(greenwaysGroup);
  };
};

function showCommunity(){
  map.setView(new L.LatLng(42.355813, -83.007668), 15);
  $.getJSON("https://islandviewcentral.carto.com/api/v2/sql?format=GeoJSON&q="+community_query, function(data) {
    communityLocations = L.geoJson(data,{
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b>' + feature.properties.name + '</b><br /><em>' + feature.properties.description + '</em></p>');
        layer.cartodb_id=feature.properties.cartodb_id;
      }, pointToLayer: function (feature, latlng) {
        if (feature.properties.description == "religious organization"){
          var marker = L.marker(latlng,{icon: religousMarker});
        } else if (feature.properties.description == "hospital"){
          var marker = L.marker(latlng,{icon: hospitalMarker});
        } else if (feature.properties.description == "rehabilitation"){
          var marker = L.marker(latlng,{icon: rehabilitationMarker});
        } else if (feature.properties.description == "elder care" || feature.properties.description == "foster care" || feature.properties.description == "assisted living community" || feature.properties.description == "assisted living"){
          var marker = L.marker(latlng,{icon: eldercareMarker});
        } else if (feature.properties.description == "historical home"){
          var marker = L.marker(latlng,{icon: historicalhomeMarker});
        } else if (feature.properties.description == "community garden"){
          var marker = L.marker(latlng,{icon: gardenMarker});
        } else if (feature.properties.description == "non-profit, therapeutic community"){
          var marker = L.marker(latlng,{icon: therapeuticMarker});
        } else if (feature.properties.description == "block club"){
          var marker = L.marker(latlng,{icon: blockclubMarker});
        } else if (feature.properties.description == "youth services"){
          var marker = L.marker(latlng,{icon: youthservicesMarker});
        } else if (feature.properties.description == "assisted living"){
          var marker = L.marker(latlng,{icon: assistedlivingMarker});
        } else if (feature.properties.description == "childcare"){
          var marker = L.marker(latlng,{icon: childcareMarker});
        } else if (feature.properties.description == "healthcare"){
          var marker = L.marker(latlng,{icon: healthcareIcon});
        } else if (feature.properties.description == "fire department"){
          var marker = L.marker(latlng,{icon: fireIcon});
        } else if (feature.properties.description == "human services" || feature.properties.description == "youth services"){
          var marker = L.marker(latlng,{icon: humanservicesIcon});        
        } else if (feature.properties.description == "food bank"){
          var marker = L.marker(latlng,{icon: foodbanksIcon});
        } else if (feature.properties.description == "community advocacy" || feature.properties.description == "community development"){
          var marker = L.marker(latlng,{icon: communityIcon});
        } else {
          var marker = L.marker(latlng,{icon: bballMarker});
        };
        return marker;
      }
    }).addTo(map);
  });
};


// Function to Filter Businesses
function showBusinesses(){
  map.setView(new L.LatLng(42.355813, -83.007668), 15);
  $.getJSON("https://islandviewcentral.carto.com/api/v2/sql?format=GeoJSON&q="+business_query, function(data) {
    businessLocations = L.geoJson(data,{
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b>' + feature.properties.name + '</b><br /><em>' + feature.properties.description + '</em></p>');
        layer.cartodb_id=feature.properties.cartodb_id;
      }, pointToLayer: function (feature, latlng) {
        if (feature.properties.description == "Business"){
          var marker = L.marker(latlng,{icon: businessMarker});
        } else if (feature.properties.description == "Store"){
          var marker = L.marker(latlng,{icon: storeMarker});
        } else if (feature.properties.description == "Barber Shop/Salon"){
          var marker = L.marker(latlng,{icon: barberIcon});
        } else if (feature.properties.description == "Restaurant"){
          var marker = L.marker(latlng,{icon: restaurantIcon});
        } else if (feature.properties.description == "Car Wash"){
          var marker = L.marker(latlng,{icon: carwashIcon});
        } else if (feature.properties.description == "Auto Repair"){
          var marker = L.marker(latlng,{icon: autorepairIcon});
        } else if (feature.properties.description == "Art"){
          var marker = L.marker(latlng,{icon: artIcon});
        } else if (feature.properties.description == "Bike Shop"){
          var marker = L.marker(latlng,{icon: bikeshopIcon});
        } else if (feature.properties.description == "Gas Station"){
          var marker = L.marker(latlng,{icon: gasIcon});
        } else if (feature.properties.description == "Realty"){
          var marker = L.marker(latlng,{icon: realtyMarker});
        } else if (feature.properties.description == "Money / Banking"){
          var marker = L.marker(latlng,{icon: moneyIcon});        
        } else if (feature.properties.description == "Music"){
          var marker = L.marker(latlng,{icon: musicIcon});
        } else if (feature.properties.description == "Pharmacy"){
          var marker = L.marker(latlng,{icon: pharmacyMarker});
        } else {
          var marker = L.marker(latlng,{icon: bballMarker});
        };
        return marker;
      }
    }).addTo(map);
  });
};


// Function to Filter transportation
function showTransport(){
  map.setView(new L.LatLng(42.355813, -83.007668), 15);
  $.getJSON("https://islandviewcentral.carto.com/api/v2/sql?format=GeoJSON&q="+bus_query, function(data) {
    busLocations = L.geoJson(data,{
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b>' + feature.properties.stop_name + '</b> bus stop</p>');
        layer.cartodb_id=feature.properties.cartodb_id;
      }, pointToLayer: function (feature, latlng) {
        var marker = L.marker(latlng,{icon: busIcon});
        return marker;
      }
    }).addTo(map);
  });

  $.getJSON("https://islandviewcentral.carto.com/api/v2/sql?format=GeoJSON&q="+mogo_query, function(data) {
    mogoLocations = L.geoJson(data,{
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b>' + feature.properties.name + ' MOGO station</b><br /><em>' + feature.properties.docks + ' bikes</em></p>');
        layer.cartodb_id=feature.properties.cartodb_id;
      }, pointToLayer: function (feature, latlng) {
        var marker = L.marker(latlng,{icon: bikeMarker});
        return marker;
      }
    }).addTo(map);
  });
};

// Function to filter fun and recreation
function showFun(){
  map.setView(new L.LatLng(42.355813, -83.007668), 15);
  
  $.getJSON("https://islandviewcentral.carto.com/api/v2/sql?format=GeoJSON&q="+park_query, function(data) {
    parkLocations = L.geoJson(data,{
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b>' + feature.properties.name + '</b></p>');
        layer.cartodb_id=feature.properties.cartodb_id;
      }, pointToLayer: function (feature, latlng) {
        var marker = L.marker(latlng,{icon: parkIcon});
        return marker;
      }  
    }).addTo(map);
  });

  $.getJSON("https://islandviewcentral.carto.com/api/v2/sql?format=GeoJSON&q="+reccenter_query, function(data) {
    reccenterLocations = L.geoJson(data,{
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b>' + feature.properties.name + '</b><br /><em>' + feature.properties.address +  '</em></p>');
        layer.cartodb_id=feature.properties.cartodb_id;
      }, pointToLayer: function (feature, latlng) {
        var marker = L.marker(latlng,{icon: bballMarker});
        return marker;
      }
    }).addTo(map);
  }); 
};

// Function to filter fun and recreation
function showSchools(){
  map.setView(new L.LatLng(42.355813, -83.007668), 15);
  
  $.getJSON("https://islandviewcentral.carto.com/api/v2/sql?format=GeoJSON&q="+schools_query, function(data) {
    schoolLocations = L.geoJson(data,{
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b>' + feature.properties.sitename + '</b><br /><em>' + feature.properties.address + '</em></p>');
        layer.cartodb_id=feature.properties.cartodb_id;
      }, pointToLayer: function (feature, latlng) {
        var marker = L.marker(latlng,{icon: schoolMarker});
        return marker;
      }
    }).addTo(map);
  });
};

// Function to add all items to map
// Get CartoDB selection as GeoJSON and Add to Map
function showAll(){
  showSchools();
  showGreenways('green');
  showFun();
  showTransport();
  showBusinesses();
  showCommunity();
};

// Run showAll function automatically when document loads
//$( document ).ready(function() {
//  showAll();
//});

  // Run function automatically when document loads
  $( document ).ready(function() {
    showAll();
  });


/*
var marker = L.marker([42.335015, -82.999320]).addTo(map);

var polygon = L.polygon([
    [42.336650, -83.000348],
    [42.333379, -82.998298],
    [42.333439, -83.003880]
]).addTo(map);

var popup = L.popup()
    .setLatLng([42.335015, -83.00250])
    .setContent("Excellent Sunset Viewing")
    .openOn(map);
*/

var pointA = new L.LatLng(42.34708541,-83.00177263);
var pointB = new L.LatLng(42.3537876,-82.99114649);
var pointC = new L.LatLng(42.36303587,-82.97903594);
var pointD = new L.LatLng(42.36697013,-82.97060324);
var pointF = new L.LatLng(42.369180, -82.964902);
var pointE = new L.LatLng(42.37006925,-82.95882961);
var pointG = new L.LatLng(42.37093097,-82.94919211);
var pointH = new L.LatLng(42.370939, -82.949258);
var pointList1 = [pointA, pointB, pointC, pointD, pointF, pointE, pointG, pointH];

var greenway1 = new L.Polyline(pointList1, {
    color: '#EE7600',
    weight: 6,
    opacity: 0.5,
    smoothFactor: 1
});

var pointA = new L.LatLng(42.34272639,-83.00678273);
var pointB = new L.LatLng(42.35334293514131,-83.01248073577882);
var pointC = new L.LatLng(42.36360759,-83.01923793);
var pointD = new L.LatLng(42.3695975,-83.02330719);
var pointE = new L.LatLng(42.38155759,-83.0310456);
var pointList2 = [pointA, pointB, pointC, pointD, pointE];

var greenway2 = new L.Polyline(pointList2, {
    color: '#EE7600',
    weight: 6,
    opacity: 0.5,
    smoothFactor: 1
});

var pointA = new L.LatLng(42.37789658,-83.02869217);
var pointB = new L.LatLng(42.37523708,-83.03600732);
var pointC = new L.LatLng(42.37065772,-83.04850058);
var pointD = new L.LatLng(42.36856559,-83.04712644);
var pointE = new L.LatLng(42.36775847,-83.04937225);
var pointList3 = [pointA, pointB, pointC, pointD, pointE];

var greenway3 = new L.Polyline(pointList3, {
    color: '#EE7600',
    weight: 6,
    opacity: 0.5,
    smoothFactor: 1
});

var pointA = new L.LatLng(42.33010668,-83.03196775);
var pointB = new L.LatLng(42.33048544,-83.03219529);
var pointC = new L.LatLng(42.33151981,-83.02863256);
var pointD = new L.LatLng(42.33395592,-83.02402831);
var pointE = new L.LatLng(42.33450021,-83.0190914);
var pointF = new L.LatLng(42.33551951,-83.01911973);
var pointG = new L.LatLng(42.33846244,-83.01077501);
var pointN = new L.LatLng(42.339129, -83.010843);
var pointM = new L.LatLng(42.339644, -83.009668);
var pointH = new L.LatLng(42.33927706,-83.0090684);
var pointI = new L.LatLng(42.34133437,-83.00962268);
var pointJ = new L.LatLng(42.34175391,-83.00731944);
var pointK = new L.LatLng(42.34119837,-83.00640112);
var pointL = new L.LatLng(42.34725611,-82.9971962);
var pointList4 = [pointA, pointB, pointC, pointD, pointE, pointF, pointG, pointN, pointM, pointH, pointI, pointJ, pointK, pointL];

var greenway4 = new L.Polyline(pointList4, {
    color: '#EE7600',
    weight: 6,
    opacity: 0.5,
    smoothFactor: 1
});

var pointA = new L.LatLng(42.333236, -83.026580);
var pointB = new L.LatLng(42.354210, -83.040510);
var pointC = new L.LatLng(42.37675066, -83.05582671);
var pointList5 = [pointA, pointB, pointC];

var greenway5 = new L.Polyline(pointList5, {
    color: '#EE7600',
    weight: 6,
    opacity: 0.5,
    smoothFactor: 1
});

var greenwaysGroup = new L.LayerGroup();
greenwaysGroup.addLayer(greenway1);
greenwaysGroup.addLayer(greenway2);
greenwaysGroup.addLayer(greenway3);
greenwaysGroup.addLayer(greenway4);
greenwaysGroup.addLayer(greenway5);

// TO REMOVE LAYER GROUP:  greenwaysGroup.clearLayers();

function showGreenways(linecolor) {
  greenway1.setStyle({color: linecolor});
  greenway2.setStyle({color: linecolor});
  greenway3.setStyle({color: linecolor});
  greenway4.setStyle({color: linecolor});
  greenway5.setStyle({color: linecolor});
  greenwaysGroup.addTo(map);
}

// Event Listeners
$('button[value=all]').click(function(){
  removeAllLayers();
  showAll();
});

$('button[value=businesses]').click(function(){
  removeAllLayers();
  showBusinesses();
});

$('button[value=community]').click(function(){
  removeAllLayers();
  showCommunity();
});

$('button[value=fun]').click(function(){
  removeAllLayers();
  showFun();
  showGreenways('#fe6d35');
});

$('button[value=transportation]').click(function(){
  removeAllLayers();
  showTransport();
  showGreenways('green');
});
$('button[value=school]').click(function(){
  removeAllLayers();
  showSchools();
});

// javascript for Resources page accordion menu
var acc = document.getElementsByClassName("resourceheader");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}