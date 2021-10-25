//heatmap() connects to map api and loads window
function heatmap(){
  // Create the script tag, set the appropriate attributes, add apiKey
  var script = document.createElement('script');
  const apiKey = "AIzaSyBitaA2w27vZXgPIR7mb3SHaYm0SB2GS1M"
  script.src = 'https://maps.googleapis.com/maps/api/js?key='+apiKey+'&libraries=visualization&callback=initMap';
  script.async = true;

  // Attach your callback function to the `window` object
  window.initMap = function() {
    // JS API is loaded and available
    LoadHeatmap()
  };

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
}

//LoadHeatmap() manipulates map window
function LoadHeatmap(){
  //basic map
  mainDiv = document.getElementById('main')
  mapDiv = document.createElement('div')
  mapDiv.id = 'map'
  mapDiv.style.height = "550px"
  mapDiv.style.width = "750px"
  mapDiv.style.position = "relative"
  mapDiv.style.margin = "0 auto"
  mapDiv.style.top = "80px"
  map = new google.maps.Map(mapDiv, {
  center: {lat: 28.1, lng: -84.2},
  zoom: 6.7
  });
  //PLACEHOLDER DATA TO BE REPLACED BY JSON FROM DATABASE
  json = {
    "counties":
    [
      {
        "name": "Miami-Dade County", 
        "coordinates": "25.55, -80.63",
        "population": "2700794"
      },
      {
        "name": "Alachua County", 
        "coordinates": "29.65, -82.32",
        "population": "269043"
      },
      {
        "name": "Orange County", 
        "coordinates": "28.48, -81.25",
        "population": "1145956"
      }
    ]
  }
  //POPULATING MAP WINDOW
  heatMapData = []
  counties = new Map()
  for (i in json.counties){
    //heatmap data
    countyObj = new County(json.counties[i])
    currLocation = new google.maps.LatLng(countyObj.coordinates[0], countyObj.coordinates[1])
    currWeight = countyObj.population/2700794
    dataPoint = {location: currLocation, weight: currWeight}
    heatMapData.push(dataPoint)
    //marker data
    new google.maps.Marker({
      position: currLocation,
      map,
      title: countyObj.name,
    });
    //store in hashmap
    counties.set(countyObj.name, countyObj)
  }
  //heatmap
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatMapData,
    radius: 60
  });
  heatmap.setMap(map);
  
  //append to main
  mainDiv.appendChild(mapDiv)
  console.log("heatmap() called")
}

//County Class
class County {
  //constructor
  constructor(json) {
    this.name = json.name;
    let coordinatesArr = json.coordinates.split(", ")
    this.coordinates = [parseFloat(coordinatesArr[0]), parseFloat(coordinatesArr[1])]
    this.radius = calculateRadius(json.squareft)
    this.population = parseInt(json.population)
    this.consumption = json.consumption;
    this.production = json.production;
    this.population = json.population;
    //to do: add other relevant data
  }
  setMarker(marker){
    this.marker = marker
  }
}
//calculate heatmap node radius from square feet of county
function calculateRadius(squareft){
  //to do: function body
  squareft = parseInt(squareft)
  return 5
}