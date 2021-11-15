function energyData() {
    //Calls the AddNavBar function to add the nav bar onto the html file
    RenderEnergyDataPage()
}

function RenderEnergyDataPage(){
    //Load the main div
    let mainDivE = document.getElementById("main");

    //Creates a div where information about purpose of page will be stored
    let pagePurpose = document.createElement("div")
    pagePurpose.classList.add("pagePurposeDiv");

    //Update the text and add the pagePurpose div to the mainDivE
    pagePurpose.innerHTML += 'This page is dedicated to...';
    mainDivE.appendChild(pagePurpose);

    //Code to add image onto our page
    let renewableSources = document.createElement("img");
    renewableSources.classList.add("con_image")
    renewableSources.src = "files/renewableSources.png";
    mainDivE.appendChild(renewableSources);
}

navbar()
RenderEnergyDataPage()