
window.onload = insertDateTime;

//insert the date & time
function insertDateTime() {
    var oNow = new Date();
    var sDateTime = oNow.toLocaleString();
    var oTarget = document.getElementById('output');

    //make sure target is found
    if (!oTarget) return;

    //delete everything inside the target
    while (oTarget.firstChild) {
        oTarget.removeChild(oTarget.firstChild);
    }

    //use the date time string to create a new text node for the page
    var oNewText = document.createTextNode(sDateTime);

    //insert the new text into the span
    oTarget.appendChild(oNewText);
}