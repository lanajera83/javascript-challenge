// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(tableData);

  var filteredData = tableData.filter(file => file.datetime === inputValue);

  console.log(filteredData);

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values

  var date = filteredData.map(i => i.datetime);
  //var city = filteredData.map(i => i.city);
  //var state =
  //var country =
  //var shape = 
  //var duration = 
  //var comment = 

  // Then, select the unordered list element by class name
  var list = d3.select(".summary");

  // remove any children from the list to
  //list.html("");

  // append stats to the list
  //list.append("th").text(date);
  //list.append("th").text(city);
  //list.append("li").text(`Mode: ${mode}`);
  //list.append("li").text(`Variance: ${variance}`);
  //list.append("li").text(`Standard Deviation: ${standardDeviation}`);
  displayData(date);
});
