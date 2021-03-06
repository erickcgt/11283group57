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
    sources.innerHTML += 'References <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '1. https://www.nrdc.org/stories/easy-ways-save-energy-home?gclid=CjwKCAjw_L6LBhBbEiwA4c46uiVdU9MUhFpFBdRwUYFNcCEtlSbfdvy4hmRAJJBODPHJ9tfeGk8dqBoCx24QAvD_BwE <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '2. https://www.nrdc.org/stories/easy-ways-save-energy-home?gclid=CjwKCAjw_L6LBhBbEiwA4c46uiVdU9MUhFpFBdRwUYFNcCEtlSbfdvy4hmRAJJBODPHJ9tfeGk8dqBoCx24QAvD_BwE <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '3. https://www.eia.gov/state/?sid=FL <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '4. https://www.energysage.com/energy-efficiency/why-conserve-energy/cost-of-ee/ <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '5. https://taraenergy.com/blog/your-guide-to-understanding-energy-conservation/ <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '6. https://www.conserve-energy-future.com/whyconserveenergy.php/ <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '7. https://www.bhhclv.com/7-reasons-to-conserve-energy// <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '8. https://www.poweredtemplate.com <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '9. https://www.slidescarnival.com <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '10. https://www.ijirae.com/volumes/Vol2/iss4/34.APAE10052.pdf <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '11. https://www.eia.gov/energyexplained/renewable-sources/ <br>';
    sources.innerHTML += '<br>';
    sources.innerHTML += '12.https://www.eia.gov/state/analysis.php?sid=FL <br>';
    sources.innerHTML += '<br>';
    mainDivS.appendChild(sources);

    let spacing = document.createElement("div")
    spacing.classList.add("spacingDiv");

    mainDivS.appendChild(spacing);
}

navbar()
RenderSourcesPage()