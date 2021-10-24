function energyConservation() {
    //Calls the AddNavBar function to add the nav bar onto the html file
    RenderEnergyConservationPage()
}

function RenderEnergyConservationPage(){
    //Load the main div
    let mainDivE = document.getElementById("main");

    //Creates a div where information about purpose of page will be stored
    let pagePurpose = document.createElement("div")
    pagePurpose.classList.add("pagePurposeDiv");

    //Update the text and add the pagePurpose div to the mainDivE
    pagePurpose.innerHTML += 'This page is dedicated to giving energy conservation tips to <br>';
    pagePurpose.innerHTML += 'anyone who wants to reduce their energy usage to save money and <br>';
    pagePurpose.innerHTML += 'aid in reducing global warming.';
    mainDivE.appendChild(pagePurpose);

    
    //let logoImage = document.createElement("img");
    //logoImage.classList.add("logo_image")
    //logoImage.src = "files/Header_no_background.png";
    //navBarHeader.appendChild(logoImage);
}

navbar()
RenderEnergyConservationPage()
