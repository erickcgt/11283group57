function energyData() {
    //Calls the AddNavBar function to add the nav bar onto the html file
    RenderEnergyDataPage()
}

function RenderEnergyDataPage(){
    //Load the main div
    let mainDivE = document.getElementById("main");

    let pagePurpose = document.createElement("div")
    pagePurpose.classList.add("pagePurposeDiv");

    //Update the text and add the pagePurpose div to the mainDivE
    pagePurpose.innerHTML += 'This page is dedicated to providing visuals and analysis for Florida\'s <br>';
    pagePurpose.innerHTML += 'energy consumption and production data. This page has a chart that shows the <br>';
    pagePurpose.innerHTML += 'energy production breakdown in Florida according to power sources. <br>';
    pagePurpose.innerHTML += 'This page also contains visuals about renewable energy sources and it contains a <br>';
    pagePurpose.innerHTML += 'section that shows the conversion of the energy consumption and production to <br>';
    pagePurpose.innerHTML += 'monetary value. <br>';
    mainDivE.appendChild(pagePurpose);
   
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

    let monetary = document.createElement("div")
    monetary.classList.add("paragraphStyling");

    //Update the text and add the pagePurpose div to the mainDivE
    monetary.innerHTML += 'The total energy consumption in Florida is about 92,947,861 mWh per year. <br>';
    monetary.innerHTML += 'The total energy production in Florida is about 250,827,799 mWh per year. <br>';
    monetary.innerHTML += 'Based on the eia.gov website, the average retail price for energy in cents/kWh<br>';
    monetary.innerHTML += 'in Florida is 10.06. Considering this, the total monetary value of the energy <br>';
    monetary.innerHTML += 'consumed in a year in Florida is $9,350,554,816.60 and the monetary value of <br>';
    monetary.innerHTML += 'the energy produced in a year in Florida is $25,233,276,579.40 <br>';
    mainDivE.appendChild(monetary);

    let pieChart = document.createElement("img");
    pieChart.classList.add("con_image")
    pieChart.src = "files/PieChart.png";
    mainDivE.appendChild(pieChart);

    let spacing = document.createElement("div")
    spacing.classList.add("spacingDiv");

    mainDivE.appendChild(spacing);
}

navbar()
RenderEnergyDataPage()