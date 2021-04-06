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

d3.select("#filter-btn").on("click", runClick);

buildTable(tableData);



