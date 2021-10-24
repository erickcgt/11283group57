//heatmap() connects to map api and loads window
function heatmap(){
  // Create the script tag, set the appropriate attributes, add apiKey
  var script = document.createElement('script');
  const apiKey = "AIzaSyBitaA2w27vZXgPIR7mb3SHaYm0SB2GS1M"
  script.src = 'https://maps.googleapis.com/maps/api/js?key='+apiKey+'&callback=initMap';
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
  mapDiv.style.height = "400px"
  mapDiv.style.width = "400px"
  mapDiv.style.position = "relative"
  mapDiv.style.margin = "0 auto"
  mapDiv.style.top = "80px"
  map = new google.maps.Map(mapDiv, {
  center: {lat: 27.6648, lng: -82.9},
  zoom: 6
  });
  //placeholder data
  json = {
    "counties":
    [
      {
        "name": "Miami", 
        "coordinates": "(25.7617, 80.2)"
      },
      {
        "name": "Gainesville", 
        "coordinates": "(29.65, 82.32)"
      }
    ]
  }
  counties = new Map()
  for (i in json.counties){
    countyObj = new County(json.counties[i])
    counties.set(countyObj.name, countyObj)
  }
  console.log(counties)
  //heatmap
  /*
  heatMapData = [
    {}
  ]
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatMapData
  });
  heatmap.setMap(map);
  */
  //append to main
  mainDiv.appendChild(mapDiv)
  console.log("heatmap() called")
}


//County Class
class County {
  //constructor
  constructor(json) {
    this.name = json.name;
    this.coordinates = json.coordinates;
    this.radius = calculateRadius(json.squareft);
    this.consumption = json.consumption;
    this.production = json.production;
    this.population = json.population;
    //to do: add other relevant data
  }
}
//calculate heatmap node radius from square feet of county
function calculateRadius(squareft){
  //to do: function body
  return 5
}