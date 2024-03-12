document.getElementById("calculateButton").addEventListener("click", function() {
  
    var ovenTemp = parseFloat(document.getElementById("ovenTemp").value);
    var ovenTime = parseFloat(document.getElementById("ovenTime").value);

    if (isNaN(ovenTemp) || isNaN(ovenTime)) {
        document.getElementById("airTemp").textContent = "Please enter valid values.";
        document.getElementById("airTime").textContent = "Please enter valid values.";
        document.getElementById("errorType").textContent = "";
        document.getElementById("resultContainer").style.display = "none"; // Hiding calculated result 
       
    return;
    }

    // calculating new air fyer time and temp
    var newTemp = ovenTemp -25;
    var newTime = ovenTime *.80; 

    var airTemp = newTemp.toFixed(0);
    var airTime = newTime.toFixed(0);

    document.getElementById("airTemp").textContent = "Air Fry Temp: " + airTemp + " °f";
    document.getElementById("airTime").textContent = "Air Fry Time: " + airTime + " minutes";
    document.getElementById("errorType").textContent = errorType;
    document.getElementById("resultContainer").style.display = "block"; // Showing calculated result
});