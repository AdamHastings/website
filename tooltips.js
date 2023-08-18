
var peaks = '';
var request = new XMLHttpRequest();
request.open('GET', 'peaks.json', true);
request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    peaks = JSON.parse(request.responseText);
    // Do something with the JSON data
  }
};
request.send();

function showTooltip(evt, text) {
  let tooltip = document.getElementById("tooltip");
  let map = document.getElementById("container");
  let name = document.getElementById("peakbox_header");
  name.innerHTML = text;
  name.style.padding = "10px";


  if (text == "Mount Washington") {
    tooltip.style.left = evt.pageX - map.offsetLeft - 450 + 'px';
    tooltip.style.top = evt.pageY - map.offsetTop - 60 + 'px';
  } else if (text == "Mount Mitchell") {
    tooltip.style.left = evt.pageX - map.offsetLeft - 325 + 'px';
    tooltip.style.top = evt.pageY - map.offsetTop - 20 + 'px';
  } else {
    tooltip.style.left = evt.pageX - map.offsetLeft + 20 + 'px';
    tooltip.style.top = evt.pageY - map.offsetTop - 20 + 'px';
  }

  peak = peaks[text]  
  
  document.getElementById("box-elevation").innerHTML = peak.elevation;
  document.getElementById("box-prominence").innerHTML = peak.prominence;
  document.getElementById("box-range").innerHTML = peak.range;

  let mytable = document.getElementById("tooltip-table");
  if (peak.route != "" && peak.description != "" && mytable.rows.length == 3) {
    // Find a <table> element with id="myTable":

    // Create an empty <tr> element and add it to the 1st position of the table:
    let routerow = mytable.insertRow(-1);

    {
      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      let cell1 = routerow.insertCell(0);
      let cell2 = routerow.insertCell(1);

      // Add some text to the new cells:
      cell1.innerHTML = "Route:";
      cell1.style.textAlign = "right";
      cell1.style.verticalAlign = "top";
      cell1.style.paddingRight = "10px";
      cell2.innerHTML = peak.route;
      // cell2.style.textAlign = "justify";
    }

    let descrow = mytable.insertRow(-1);

    {
      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      let cell1 = descrow.insertCell(0);
      let cell2 = descrow.insertCell(1);

      // Add some text to the new cells:
      cell1.innerHTML = "Note:";
      cell1.style.textAlign = "right";
      cell1.style.verticalAlign = "top";
      cell1.style.paddingRight = "10px";
      cell2.innerHTML = peak.description;
      // cell2.style.textAlign = "justify";
    }
  }

  tooltip.style.display = "block";
}

function hideTooltip() {
  let mytable = document.getElementById("tooltip-table");
  if (mytable.rows.length > 3) {
    mytable.deleteRow(-1);
    mytable.deleteRow(-1);
  }

  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
  document.getElementById("box-elevation").innerHTML = "";
  document.getElementById("box-prominence").innerHTML = "";
  document.getElementById("box-range").innerHTML = "";
}

function splitIntoNewline(s) {
  const MAX_CHARS = 50;
  var i = 0;
  while (i < s.length) {

  }
}