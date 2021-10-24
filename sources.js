function sources() {
    //Calls the AddNavBar function to add the nav bar onto the html file
    RenderSourcesPage()
}

function RenderSourcesPage(){
    //Load the main div
    let mainDivS = document.getElementById("main");

    //Creates a div where information about purpose of page will be stored
    let sources = document.createElement("div")
    sources.classList.add("sources");

    //Update the text and add the pagePurpose div to the mainDivE
    sources.innerHTML += '1. https://www.nrdc.org/stories/easy-ways-save-energy-home?gclid=CjwKCAjw_L6LBhBbEiwA4c46uiVdU9MUhFpFBdRwUYFNcCEtlSbfdvy4hmRAJJBODPHJ9tfeGk8dqBoCx24QAvD_BwE <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '2. https://www.nrdc.org/stories/easy-ways-save-energy-home?gclid=CjwKCAjw_L6LBhBbEiwA4c46uiVdU9MUhFpFBdRwUYFNcCEtlSbfdvy4hmRAJJBODPHJ9tfeGk8dqBoCx24QAvD_BwE <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '3. https://www.eia.gov/state/?sid=FL <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '4. https://www.energysage.com/energy-efficiency/why-conserve-energy/cost-of-ee/ <br>';
    sources.innerHTML += '<br>';
    mainDivS.appendChild(sources);
}

navbar()
RenderSourcesPage()