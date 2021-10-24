function energyConservation() {
    //Calls the AddNavBar function to add the nav bar onto the html file
    RenderEnergyConservationPage()
}

function RenderEnergyConservationPage(){
    //Load the main div
    let mainDivE = document.getElementById("main");

    //Creates a header element where the nav will go
    let pagePurpose = document.createElement("div")
    pagePurpose.classList.add("pagePurposeDiv");

    //let logoImage = document.createElement("img");
    //logoImage.classList.add("logo_image")
    //logoImage.src = "files/Header_no_background.png";
    //navBarHeader.appendChild(logoImage);

    pagePurpose.innerHTML += 'This page is for energy conservation ';
    mainDivE.appendChild(pagePurpose);
}

navbar()
RenderEnergyConservationPage()
