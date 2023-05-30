// // function loadJSON() {
// //   fetch('peaks.json')
// //   .then(response => response.json())
// //   .then(data => {
// //     // Do something with the JSON data
// //     peaks = data;
// //   })
// //   .catch(error => {
// //     // Handle any errors that occur during the fetch
// //     console.error('Error:', error);
// //   });
// // }

// var peaks = '{}';

// document.addEventListener('DOMContentLoaded', function() {
//   // Your JavaScript code here
  
//   // fetch('peaks.json')
//   // .then(response => response.json())
//   // .then(data => {
//   //   // Do something with the JSON data
//   //   peaks = data;
//   // })
//   // .catch(error => {
//   //   // Handle any errors that occur during the fetch
//   //   console.error('Error:', error);
//   // });

//   const response = fetch("peaks.json");
//   const jsonData = response.json();
//   console.log(jsonData);

//   // console.log(peaks);
//   console.log('JSON loaded!');
// });

// const peaks = fetch("peaks.json")
//      .then(response => {
//          if (!response.ok) {
//              throw new Error(`HTTP error ${response.status}`);
//          }
//          return response.json();
//      });

// console.log(peaks)
// console.log(peaks['Mount Rainier'])
var peaks = '';
console.log(peaks);
var request = new XMLHttpRequest();
request.open('GET', 'peaks.json', true);
request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    peaks = JSON.parse(request.responseText);
    // Do something with the JSON data
    console.log(peaks);
  }
};
request.send();
console.log(peaks);

function showTooltip(evt, text) {
  let tooltip = document.getElementById("tooltip");
  let map = document.getElementById("container");
  let name = document.getElementById("peakbox_header");
  name.innerHTML = text;

  if (text == "Mount Washington") {
    tooltip.style.left = evt.pageX - map.offsetLeft - 550 + 'px';
    tooltip.style.top = evt.pageY - map.offsetTop - 60 + 'px';
  } else if (text == "Mount Mitchell") {
    tooltip.style.left = evt.pageX - map.offsetLeft - 325 + 'px';
    tooltip.style.top = evt.pageY - map.offsetTop - 20 + 'px';
  } else {
    tooltip.style.left = evt.pageX - map.offsetLeft + 20 + 'px';
    tooltip.style.top = evt.pageY - map.offsetTop - 20 + 'px';
  }


  // console.log(text);
  // console.log(peaks[text])

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
      cell2.innerHTML = peak.route;
    }

    let descrow = mytable.insertRow(-1);

    {
      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      let cell1 = descrow.insertCell(0);
      let cell2 = descrow.insertCell(1);

      // Add some text to the new cells:
      cell1.innerHTML = "Description:";
      cell2.innerHTML = peak.description;
    }
  }


  // var xmlhttps = new XMLHttpRequest();
  // xmlhttps.onreadystatechange = function () {
  //   if (this.readyState == 4 && this.status == 200) {
  //     var response = JSON.parse(this.responseText);
  //     console.log(response);
  //     console.log(response.elevation);
  //     document.getElementById("box-elevation").innerHTML = response.elevation;
  //     document.getElementById("box-prominence").innerHTML = response.prominence;
  //     document.getElementById("box-range").innerHTML = response.range;

  //     let mytable = document.getElementById("tooltip-table");

  //     if (response.route != "" && response.description != "" && mytable.rows.length == 3) {
  //       // Find a <table> element with id="myTable":

  //       // Create an empty <tr> element and add it to the 1st position of the table:
  //       let routerow = mytable.insertRow(-1);

  //       {
  //         // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  //         let cell1 = routerow.insertCell(0);
  //         let cell2 = routerow.insertCell(1);

  //         // Add some text to the new cells:
  //         cell1.innerHTML = "Route:";
  //         cell2.innerHTML = response.route;
  //       }

  //       let descrow = mytable.insertRow(-1);

  //       {
  //         // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  //         let cell1 = descrow.insertCell(0);
  //         let cell2 = descrow.insertCell(1);

  //         // Add some text to the new cells:
  //         cell1.innerHTML = "Description:";
  //         cell2.innerHTML = response.description;
  //       }

  //     }
  //   }
  // }
  // var getInfoScript = "info.php";
  // var url = getInfoScript.concat("?", text);
  // url = url.replace(/\s/g, '+')
  // //console.log(url);


  // xmlhttps.open("GET", url);
  // xmlhttps.send();

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