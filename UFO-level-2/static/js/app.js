// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// function to build the table
function buildTable(data){
    tbody.html("");
    data.forEach(function(ufoData) {
        console.log(ufoData);
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]) {
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
          });
    })
}

// button for multiper filters
var button = d3.select("#filter-btn");
button.on("click", function(){
    tbody.html("");

    // variables for filters
    var dateTime = d3.select("#datetime").property("value");
    var country = d3.select("#country").property("value");
    var state = d3.select("#state").property("value");
    var city = d3.select("#city").property("value");
    var shape = d3.select("#shape").property("value");
    var filteredData = tableData;
    
    // print input
    console.log(city);

    // using the filter variables
    if (dateTime) {
        filteredData = filteredData.filter( x => x.dateTime === dateTime);
    }
    if (dateTime) {
        filteredData = filteredData.filter( x => x.dateTime === dateTime);
    }


})

// click function
function runClick(){
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    if(date){
        filterData = filterData.filter(x => x.datetime === date);
    }
    console.log(filterData);
    buildTable(filterData);
}

buildTable(tableData);



