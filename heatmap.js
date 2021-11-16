//global variables
var maxPopulation = 0;
var maxProduction = 0;
var consumptionMap;
var productionMap;
var stateConsumption = 0;
var stateProduction = 0;
//global variables: production by source
var stateBiomass = 0;
var stateCoal = 0;
var stateHydroelectric = 0;
var stateNaturalgas = 0;
var stateNuclear = 0;
var stateCHP = 0;
var statePetroleum = 0;
var stateSolar = 0;
var stateWind = 0;
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
    //global variables
    consumptionMap = mapConsumptionData()
    productionMap = mapProductionData()
    CreateHeatmap('consumption')
    console.log("State Consumption: " + stateConsumption + ' mWh per year')
    console.log("State Production (Net Summer Capacity): " + stateProduction + ' mWh')
    console.log('stateBiomass: ' + Math.trunc(stateBiomass))
    console.log('stateCoal: ' + Math.trunc(stateCoal))
    console.log('stateHydroelectric: ' + Math.trunc(stateHydroelectric))
    console.log('stateNaturalgas: ' + Math.trunc(stateNaturalgas))
    console.log('stateNuclear: ' + Math.trunc(stateNuclear))
    console.log('stateCHP: ' + Math.trunc(stateCHP))
    console.log('statePetroleum: ' + Math.trunc(statePetroleum))
    console.log('stateSolar: ' + Math.trunc(stateSolar))
    console.log('stateWind: ' + Math.trunc(stateWind))
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
  container.style.zIndex = '0'
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
//create map<county_name, consumption_county_obj> from consumption JSON
function mapConsumptionData(){
  consumptionMap = new Map()
  for (county of consumptionData){
    countyObj = new ConsumptionCounty(county)
    consumptionMap.set(countyObj.name, countyObj)
    if (countyObj.population > maxPopulation) {
      maxPopulation = countyObj.population
    }
  }
  //return map to store in global variable
  return consumptionMap
}
//create map<county_name, production_county_obj> from production JSON
function mapProductionData(){
  productionMap = new Map()
  for (county of productionData){
    if (Object.keys(county).length == 10){
      countyObj = new ProductionCounty(county)
      productionMap.set(countyObj.name, countyObj)
      if (countyObj.totalProduction > maxProduction) {
        maxProduction = countyObj.totalProduction
      }
    }
  }
  //return map to store in global variable
  return productionMap
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
  countyJSON = status === 'consumption' ? consumptionMap.values() : productionMap.values();
  for (county of countyJSON){
    //heatmap data
    var currObj
    if (status === 'consumption'){
      currObj = consumptionMap.get(county.name)
      currWeight = currObj.population/maxPopulation
      currCoordinates = currObj.coordinates
      currLocation = new google.maps.LatLng(currCoordinates[0], currCoordinates[1])
      currTitle = currObj.title
    } else{
      currObj = productionMap.get(county.name)
      currWeight = currObj.totalProduction/maxProduction + 0.01 //weights cannot be 0 in googlemaps api
      currCoordinates = consumptionMap.get(county.name).coordinates
      currLocation = new google.maps.LatLng(currCoordinates[0], currCoordinates[1])
      currTitle = currObj.title
    }
    dataPoint = {location: currLocation, weight: currWeight}
    heatMapData.push(dataPoint)
    //marker data
    var markerColor
    if (status === 'consumption'){
      markerColor = 'red'
    }
    else{
       markerColor = 'greenyellow'
    }
    marker = new google.maps.Marker({
      position: currLocation,
      map,
      title: currTitle,
    });
    marker.setIcon({
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5,
        fillColor: markerColor,
        fillOpacity: 1.0,
        strokeWeight: 3
    })
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

//ConsumptionCounty Class
class ConsumptionCounty {
  //constructor
  constructor(json) {
    this.name = json.name;
    let coordinatesArr = json.coordinates.split(", ")
    this.coordinates = [parseFloat(coordinatesArr[0]), parseFloat(coordinatesArr[1])]
    this.population = parseInt(json.population)
    this.consumption = json.consumption;
    this.production = json.production;
    this.population = json.population;
    //avg people per household = 2.53, avg monthly consumption per household = 893, /1000 to convert to mWh from kWh
    let consumptionEstimate = Math.trunc(this.population/2.53 * 893 * (12 / 1000)).toLocaleString()
    stateConsumption += Math.trunc(this.population/2.53 * 893 * (12 / 1000))
    let population = Number(this.population).toLocaleString()
    this.title = this.name.toUpperCase() + '\n'
                + 'Consumption: ' + consumptionEstimate + ' mWh Per Year'
                + '\n' + 'Population: ' + population;
  }
}
//ProductionCounty class
class ProductionCounty {
  //constructor
  constructor(json) {
    this.name = json['name'];
    this.biomass = parseFloat(json['biomass production'])
    this.coal = parseFloat(json['coal production'])
    this.hydroelectric = parseFloat(json['hydroelectric production'])
    this.naturalgas = parseFloat(json['natural gas production'])
    this.nuclear = parseFloat(json['nuclear production'])
    this.chp = parseFloat(json['chp production'])
    this.petroleum = parseFloat(json['petroleum production'])
    this.solar = parseFloat(json['solar production'])
    this.wind = parseFloat(json['wind production'])
    this.totalProduction = 0.0
    //store totals
    stateBiomass += this.biomass;
    stateCoal += this.coal;
    stateHydroelectric += this.hydroelectric;
    stateNaturalgas += this.naturalgas;
    stateNuclear += this.nuclear;
    stateCHP += this.chp;
    statePetroleum += this.petroleum;
    stateSolar += this.solar;
    stateWind += this.wind;
    //count Total production
    for (var property in this){
      if (property === 'name'){continue;}
      if (property === 'totalProduction'){continue;}
      this.totalProduction += this[property]
    }
    this.totalProduction = Math.trunc(this.totalProduction)
    stateProduction += this.totalProduction
    this.title = this.name.toUpperCase() + '\n' +
              'Biomass Production: ' + this.biomass.toLocaleString() + ' mWh'+ '\n' +
              'Coal Production: ' + this.coal.toLocaleString() + ' mWh' + '\n' +
              'HydroElectric Production: ' + this.hydroelectric.toLocaleString() + ' mWh'+ '\n' +
              'Natural Gas Production: ' + this.naturalgas.toLocaleString() + ' mWh'+ '\n' +
              'Nuclear Production: ' + this.nuclear.toLocaleString() + ' mWh'+ '\n' +
              'CHP Production: ' + this.chp.toLocaleString() + ' mWh' + '\n' +
              'Petroleum Production: ' + this.petroleum.toLocaleString() + ' mWh'+ '\n' +
              'Solar Production: ' + this.solar.toLocaleString() + ' mWh'+ '\n' +
              'Wind Production: ' + this.wind.toLocaleString() + ' mWh'+ '\n' +
              '=Total Production (Net Summer Capacity): ' + this.totalProduction.toLocaleString() + ' mWh';
    ;
  }
}
