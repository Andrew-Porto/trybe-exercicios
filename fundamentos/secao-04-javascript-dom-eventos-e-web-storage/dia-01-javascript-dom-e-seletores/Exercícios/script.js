const header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(0, 176, 105)";

const sectionsEmergencyHeaders =
  document.getElementsByClassName("emergency-tasks")[0];
sectionsEmergencyHeaders.style.backgroundColor = "rgb(255, 159, 132)";

const sectionsEmergency = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < sectionsEmergency.length; index += 1) {
  sectionsEmergency[index].style.backgroundColor = "rgb(165, 0, 243)";
}

const sectionsNoEmergency =
  document.getElementsByClassName("no-emergency-tasks")[0];
sectionsNoEmergency.style.backgroundColor = "rgb(249, 219, 94)";

const sectionsNoEmergencyHeaders = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < sectionsNoEmergencyHeaders.length; index += 1) {
  sectionsNoEmergencyHeaders[index].style.backgroundColor = "rgb(35, 37, 37)";
}

const footer = document.getElementById("footer-container"); 
footer.style.backgroundColor = "rgb(0, 53, 51)";
