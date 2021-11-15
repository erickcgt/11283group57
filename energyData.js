function energyData() {
    //Calls the AddNavBar function to add the nav bar onto the html file
    RenderEnergyDataPage()
}

function RenderEnergyDataPage(){
    //Load the main div
    let mainDivE = document.getElementById("main");
   
    //Code to add image onto our page
    let renewableSources = document.createElement("img");
    renewableSources.classList.add("con_image")
    renewableSources.src = "files/renewableSources.png";
    mainDivE.appendChild(renewableSources);

    //Code to add image onto our page
    let floridaStatus = document.createElement("img");
    floridaStatus.classList.add("con_image")
    floridaStatus.src = "files/FloridaStatus.png";
    mainDivE.appendChild(floridaStatus);
}

navbar()
RenderEnergyDataPage()