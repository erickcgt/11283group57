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
  mainDiv = document.getElementById('main')
  mapDiv = document.createElement('div')
  mapDiv.id = 'map'
  mapDiv.style.height = "400px"
  mapDiv.style.width = "400px"
  mapDiv.style.position = "relative"
  mapDiv.style.margin = "0 auto"
  map = new google.maps.Map(mapDiv, {
  center: {lat: 27.6648, lng: -82.9},
  zoom: 6
  });

  mainDiv.appendChild(mapDiv)
  console.log("heatmap() called")
}
