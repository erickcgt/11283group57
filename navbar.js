//Function that will be called from main.js file to load navbar
function navbar() {
    //Calls the AddNavBar function to add the nav bar onto the html file
    AddNavBar()
}

function AddNavBar() {
    //Load the main div
    let mainDiv = document.getElementById("main");

    //Creates a header element where the nav will go
    let navBarHeader = document.createElement("header")
    navBarHeader.classList.add("nav_bar_header");

    //Creates the basic nav element for the navbar
    let nav = document.createElement("nav");

    let logoImage = document.createElement("img");
    logoImage.classList.add("logo_image")
    logoImage.src = "files/Header_no_background.png";
    navBarHeader.appendChild(logoImage);

    //Creates the UL that is needed to add things into the nav bar
    let navUList = document.createElement("ul");
    navUList.classList.add("nav_bar_items");


    //This section is to create the first button link that will be in the navbar (it is called Heatmap)
    let li1 = document.createElement("li");
    let a1 = document.createElement("a");
    let ulist = document.getElementById("nav_bar_items");

    a1.textContent = "Heatmap"; 
    //Link that this button will take you to but we don't have that page yet so we will do it later on.  
    a1.setAttribute('href', "main.html");
    li1.appendChild(a1);
    navUList.appendChild(li1);
    nav.appendChild(navUList);
    navBarHeader.appendChild(nav) 
    mainDiv.appendChild(navBarHeader);

    //====================================================================================
    //This section is to create the second button link that will be in the navbar (it is called Heatmap)
    let li2 = document.createElement("li");
    let a2 = document.createElement("a");

    a2.textContent = "Energy Data"; 
    //Link that this button will take you to but we don't have that page yet so we will do it later on.  
    a2.setAttribute('href', "energyData.html");
    li2.appendChild(a2);
    navUList.appendChild(li2);
    nav.appendChild(navUList);
    mainDiv.appendChild(nav);


    //=======================================================================
    //This section is to create the third button link that will be in the navbar (it is called Heatmap)
    let li3 = document.createElement("li");
    let a3 = document.createElement("a");

    a3.textContent = "Energy Conservation"; 
    a3.classList.add("a3")
    //Link that this button will take you to but we don't have that page yet so we will do it later on.   
    a3.setAttribute('href', "energyConservation.html");
    li3.appendChild(a3);
    navUList.appendChild(li3);
    nav.appendChild(navUList);
    mainDiv.appendChild(nav);


    //=======================================================================
    //This section is to create the third button link that will be in the navbar (it is called Heatmap)
    let li4 = document.createElement("li");
    let a4 = document.createElement("a");

    a4.textContent = "Sources"; 
    a4.classList.add("a4")
    //Link that this button will take you to but we don't have that page yet so we will do it later on.   
    a4.setAttribute('href', "sources.html");
    li4.appendChild(a4);
    navUList.appendChild(li4);
    nav.appendChild(navUList);
    mainDiv.appendChild(nav);


    console.log("hello")
  }

