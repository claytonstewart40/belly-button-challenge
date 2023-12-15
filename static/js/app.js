//Use the D3 library to read in samples.json from the URL:
//https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url).then(function(data){
   

for(let i = 0; i < data.names.length; i++)

    console.log(data.names[i])
//next is dropdown activity notes
});

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.


// Use sample_values as the values for the bar chart.

// Use otu_ids as the labels for the bar chart.

// Use otu_labels as the hovertext for the chart.

//dropdownMenu.addEventListener('change', updateChart);

// Function to update the chart based on the selected ID
// function updateChart() {
//     let selectedId = dropdownMenu.value;
//     let newData = getDataForId(selectedId);
//     // Use newData to update the chart using Plotly or any other plotting library
//     // Plotly.newPlot(...) or any chart rendering logic should go here
// }

// // Function to get data for a particular ID (e.g., 'ID 1')
// function getDataForId(selectedId) {
//     // Logic to filter sample_values, otu_ids, and otu_labels based on the selected ID
//     // Use sample_values for bar chart values
//     // Use otu_ids for bar chart labels
//     // Return an object or array with the filtered data
// }

// // Use Plotly or any other charting library to create the initial chart
// // Initial chart creation should use the initialData returned from getDataForId('ID 1')
// // Plotly.newPlot(...) or any chart rendering logic for the initial chart creation
// // Include hoverinfo in Plotly's trace settings to use otu_labels as hovertext

// //dropdown menu
// // Initializes the page with a default plot
// function init() {
//     // Use D3 to select the dropdown menu
//     let dropdownMenu = d3.select("#selDataset");
//     let dataset = dropdownMenu.property("value");
    