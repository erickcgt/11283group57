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

    //Code to add image onto our page
    let conservationImage = document.createElement("img");
    conservationImage.classList.add("con_image")
    conservationImage.src = "files/ConservationTips_ClearerText.png";
    mainDivE.appendChild(conservationImage);

    //Code where we can add tips for people to save energy
    let conservationTipsDiv = document.createElement("div")
    conservationTipsDiv.classList.add("consTipsDiv");

    conservationTipsDiv.innerHTML += 'The U.S. Department of Energy estimates that the typical household can save 25% on utility bills<br>';
    conservationTipsDiv.innerHTML += 'with energy efficiency measures, which amounts to over $2,200 annually. <br>';
    conservationTipsDiv.innerHTML += "Aside from tips provided in the image above, here are a few more tips for you to save energy: <br>";
    mainDivE.appendChild(conservationTipsDiv);
}

navbar()
RenderEnergyConservationPage()