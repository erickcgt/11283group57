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
    pagePurpose.innerHTML += 'This page is dedicated to providing energy conservation tips to <br>';
    pagePurpose.innerHTML += 'those who want to reduce their energy usage to save money as well as <br>';
    pagePurpose.innerHTML += 'improve their ecological footprint.';
    mainDivE.appendChild(pagePurpose);

    //Code to add image onto our page
    let energyConDef = document.createElement("img");
    energyConDef.classList.add("con_image")
    energyConDef.src = "files/energyConDef.png";
    mainDivE.appendChild(energyConDef);

    //Code to add image onto our page
    let conservationImage = document.createElement("img");
    conservationImage.classList.add("con_image")
    conservationImage.src = "files/ConservationTips_ClearerText.png";
    mainDivE.appendChild(conservationImage);    

    //Code to add image onto our page
    let energyBenefits = document.createElement("img");
    energyBenefits.classList.add("con_image")
    energyBenefits.src = "files/energyConBenefits.png";
    mainDivE.appendChild(energyBenefits);    

    //Code to add image onto our page
    let savingMoneyStatImage = document.createElement("img");
    savingMoneyStatImage.classList.add("con_image")
    savingMoneyStatImage.src = "files/saveMoneyStatistic.png";
    mainDivE.appendChild(savingMoneyStatImage);
}

navbar()
RenderEnergyConservationPage()