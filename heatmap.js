//heatmap() connects to map api and loads window
function heatmap(){
  //create toggle button and mouseclick functionality
  toggleButton();
  // Create the script tag, set the appropriate attributes, add apiKey
  var script = document.createElement('script');
  const apiKey = "AIzaSyBitaA2w27vZXgPIR7mb3SHaYm0SB2GS1M";
  script.src = 'https://maps.googleapis.com/maps/api/js?key='+apiKey+'&libraries=visualization&callback=initMap';
  script.async = true;

  // Attach your callback function to the `window` object
  window.initMap = function() {
    // JS API is loaded and available
    CreateHeatmap('consumption')
  };

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
}

//creates toggle button and its functionality
function toggleButton(){
  //html for toggle button
  mainDiv = document.getElementById('main')
  container = document.createElement('div')
  container.id = 'toggleContainer'
  container.classList.add('consumption')
  button = document.createElement('div')
  button.id = 'toggleButton'
  circle = document.createElement('div')
  circle.id = 'toggleCircle'
  text = document.createElement('span')
  text.id = 'toggleText'
  text.innerHTML = 'Showing Consumption Data'
  //css for toggle button
  container.style.zIndex = '3'
  container.style.width = '750px'
  container.style.position = 'relative'
  container.style.left = '50%'
  container.style.top = '75px'
  container.style.transform = 'translate(-50%, 0%)'
  button.style.width = '80px'
  button.style.height = '40px'
  button.style.background = 'red'
  button.style.position = 'relative'
  button.style.borderRadius = '30px'
  button.style.padding = '3px'
  button.style.border = '2px solid black'
  button.style.cursor = 'pointer'
  button.style.transition = 'all 300ms ease-in-out'
  circle.style.width = '30px'
  circle.style.height = '30px'
  circle.style.margin = '0'
  circle.style.background = '#fff'
  circle.style.borderRadius = '50%'
  circle.style.transition = 'all 300ms ease-in-out'
  circle.style.border = '2px solid darkgrey'
  text.style.position = 'absolute'
  text.style.bottom = '0'
  text.style.left = '90px'
  text.style.fontSize = 'xx-large'
  text.style.color = '#e7e7e7'
  text.style.transition = 'all 300ms ease-in-out'
  //append to main html
  button.appendChild(circle)
  container.appendChild(button)
  container.appendChild(text)
  mainDiv.appendChild(container)
  //toggle button click eventlistener
  button.addEventListener('click', toggle)
}
//toggle between heatmaps
function toggle(){
  container = document.getElementById('toggleContainer')
  //if toggle is set to consumption
  if (container.classList.contains('consumption')){
    //switch to production
    container.classList.remove('consumption')
    container.classList.add('production')
    //change UI of toggle button
    button = document.getElementById('toggleButton')
    button.style.background = 'greenyellow'
    circle = document.getElementById('toggleCircle')
    circle.style.marginLeft = '40px'
    text = document.getElementById('toggleText')
    text.innerHTML = 'Showing Production Data'
    //change heatmap
    CreateHeatmap('production')
  }
  else{
    //switch to production
    container.classList.remove('production')
    container.classList.add('consumption')
    //change UI of toggle button
    button = document.getElementById('toggleButton')
    button.style.background = 'red'
    circle = document.getElementById('toggleCircle')
    circle.style.marginLeft = '0px'
    text.innerHTML = 'Showing Consumption Data'
    //change heatmap
    CreateHeatmap('consumption')
  }
}
//CreateHeatmap()
function CreateHeatmap(status){
  console.log('CreateHeatmap() called')
  mainDiv = document.getElementById('main')
  //clear preexisting map if there is one
  oldMap = document.getElementById('map')
  if (oldMap != null){
    mainDiv.removeChild(oldMap)
  }
  //basic map
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
  //POPULATING MAP WINDOW
  heatMapData = []
  counties = new Map()
  for (county of consumptionData){
    //heatmap data
    countyObj = new County(county)
    currLocation = new google.maps.LatLng(countyObj.coordinates[0], countyObj.coordinates[1])
    currWeight = countyObj.population/2700794
    currRadius = countyObj.area
    dataPoint = {location: currLocation, weight: currWeight}
    heatMapData.push(dataPoint)
    //marker data
    var markerColor
    if (status == 'consumption'){
      markerColor = 'red'
    }
    else{
       markerColor = 'greenyellow'
    }
    marker = new google.maps.Marker({
      position: currLocation,
      map,
      title: countyObj.name,
    });
    marker.setIcon({
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5,
        fillColor: markerColor,
        fillOpacity: 1.0,
        strokeWeight: 3
    })
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
