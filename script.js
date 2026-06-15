// toggle for open close of sidebar


const toggleBtn = document.querySelector(".sidebar-toggle");

const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

    if (sidebar.classList.contains("collapsed")) {

        toggleBtn.textContent = "▶";

    } else {

        toggleBtn.textContent = "◀";

    }

});



// code of switching between various tabs in topbar

const explorerTab = document.getElementById("explorer-tab");
const screencastTab = document.getElementById("screencast-tab");
const shellTab = document.getElementById("shell-tab");
const audioTab = document.getElementById("audio-tab");
const configTab = document.getElementById("config-tab");

const explorerPage = document.getElementById("explorer-page");
const screencastPage = document.getElementById("screencast-page");
const shellPage = document.getElementById("shell-page");
const audioPage = document.getElementById("audio-page");
const configPage = document.getElementById("config-page");

function hideAllPages(){

    explorerPage.style.display = "none";
    screencastPage.style.display = "none";
    shellPage.style.display = "none";
    audioPage.style.display = "none";
    configPage.style.display = "none";

}

explorerTab.addEventListener("click", () => {

    hideAllPages();

    explorerPage.style.display = "block";

    clearActiveTabs();

    explorerTab.classList.add("active-tab");

});

shellTab.addEventListener("click", () => {

    hideAllPages();

    shellPage.style.display = "block";

    clearActiveTabs();

    shellTab.classList.add("active-tab");

});

audioTab.addEventListener("click", () => {

    hideAllPages();

    audioPage.style.display = "block";

    clearActiveTabs();

    audioTab.classList.add("active-tab");

});

configTab.addEventListener("click", () => {

    hideAllPages();

    configPage.style.display = "block";

    clearActiveTabs();

    configTab.classList.add("active-tab");

});

screencastTab.addEventListener("click", () => {

    hideAllPages();

    screencastPage.style.display = "block";

    clearActiveTabs();

    screencastTab.classList.add("active-tab");

});








// active tab highlight code

const tabs = document.querySelectorAll(".tool-tab");

function clearActiveTabs(){

    tabs.forEach(tab => {

        tab.classList.remove("active-tab");

    });

}


// code for shell input and output

const shellInput = document.querySelector(".shell-input");

shellInput.addEventListener("keydown", function(event){

    if(event.key === "Enter" && !event.shiftKey){

        event.preventDefault();

        console.log("Run Command");

    }

});

// mute button code -- highlight for every button class - toggle-btn

const toggleButtons =
document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active-control");

    });

});



// device card selection code change tabs

const deviceCards =
document.querySelectorAll(".device-card");

deviceCards.forEach(card => {

    card.addEventListener("click", () => {

        deviceCards.forEach(c => {

            c.classList.remove(
                "selected",
                "selected-online",
                "selected-offline"
            );

        });

        const status =
        card.dataset.status;

        card.classList.add("selected");

        if(status === "Online"){

            card.classList.add(
                "selected-online"
            );

        }else{

            card.classList.add(
                "selected-offline"
            );

        }


        document.getElementById(
            "selected-device-name"
        ).textContent =
        card.dataset.name;

        document.getElementById(
            "selected-device-info"
        ).textContent =
        card.dataset.ip +
        " • " +
        card.dataset.status;

    });

});

// search functionality for devices

const searchInput =
document.getElementById("device-search");

searchInput.addEventListener("input", () => {

    const searchText =
    searchInput.value.toLowerCase();

    const devices =
    document.querySelectorAll(".device-card");

    devices.forEach(device => {

        const deviceName =
        device.dataset.name.toLowerCase();

        const deviceIp =
        device.dataset.ip.toLowerCase();

        if(deviceName.includes(searchText) || deviceIp.includes(searchText)){

            device.style.display = "";

        }else{

            device.style.display = "none";

        }

    });

});



// file icon script 

document.querySelectorAll(".file-card").forEach(card => {

    const icon = card.querySelector(".file-icon");

    const fileName =
        card.querySelector(".file-name")
        .textContent
        .trim()
        .toLowerCase();

    icon.classList.add("material-symbols-outlined");

    // Folder = no extension
    if(!fileName.match(/\.[a-z0-9]+$/))
    {
        icon.textContent = "folder";
        icon.style.color = "#ffd54f";
        return;
    }

    // PDF
    if(fileName.endsWith(".pdf"))
    {
        icon.textContent = "picture_as_pdf";
        icon.style.color = "#ff5252";
    }

    // JSON
    else if(fileName.endsWith(".json"))
    {
        icon.textContent = "data_object";
        icon.style.color = "#ffb74d";
    }

    // Excel
    else if(
        fileName.endsWith(".xls") ||
        fileName.endsWith(".xlsx") ||
        fileName.endsWith(".csv")
    )
    {
        icon.textContent = "table_view";
        icon.style.color = "#4caf50";
    }

    // PowerPoint
    else if(
        fileName.endsWith(".ppt") ||
        fileName.endsWith(".pptx")
    )
    {
        icon.textContent = "slideshow";
        icon.style.color = "#ff7043";
    }

    // Word
    else if(
        fileName.endsWith(".doc") ||
        fileName.endsWith(".docx")
    )
    {
        icon.textContent = "description";
        icon.style.color = "#4285f4";
    }

    // Code
    else if(
        fileName.endsWith(".html") ||
        fileName.endsWith(".css") ||
        fileName.endsWith(".js") ||
        fileName.endsWith(".py") ||
        fileName.endsWith(".java") ||
        fileName.endsWith(".cpp")
    )
    {
        icon.textContent = "code";
        icon.style.color = "#ffd54f";
    }

    // Images
    else if(
        fileName.endsWith(".png") ||
        fileName.endsWith(".jpg") ||
        fileName.endsWith(".jpeg") ||
        fileName.endsWith(".svg") ||
        fileName.endsWith(".webp")
    )
    {
        icon.textContent = "image";
        icon.style.color = "#ab47bc";
    }

    // Videos
    else if(
        fileName.endsWith(".mp4") ||
        fileName.endsWith(".mkv") ||
        fileName.endsWith(".avi")
    )
    {
        icon.textContent = "movie";
        icon.style.color = "#e91e63";
    }

    // Audio
    else if(
        fileName.endsWith(".mp3") ||
        fileName.endsWith(".wav")
    )
    {
        icon.textContent = "audio_file";
        icon.style.color = "#26c6da";
    }

    // Zip
    else if(
        fileName.endsWith(".zip") ||
        fileName.endsWith(".rar") ||
        fileName.endsWith(".7z")
    )
    {
        icon.textContent = "folder_zip";
        icon.style.color = "#8d6e63";
    }

    // Default
    else
    {
        icon.textContent = "draft";
        icon.style.color = "white";
    }

});



// device card expansion 

document.querySelectorAll(".expand-arrow")
.forEach(arrow => {

    arrow.addEventListener("click", (e) => {

        e.stopPropagation();

        const card =
        arrow.closest(".device-card");

        card.classList.toggle("expanded");

    });

});








