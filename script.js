/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

   
   const data = {
     labels: [20, 22, 25, 27, 30, 32, 35, 37, 40, 45, 50, 55, 60],
     datasets: [
      {
       label: 'Employer K 73,500',
       data: [35,50, 75, 100, 125, 150, 175, 200,225, 250, 275, 300,325],
       backgroundColor: [
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)'
       ],
       borderColor: [
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)',
          'rgb(0,0,128,1)'
       ],
       borderWidth: 1,
     },
     {
       label: 'Employee K 52,500',
       data: [35,50, 75, 100, 125, 150, 175, 200,225, 250, 275, 300,325],
       backgroundColor: [
          'rgb( 51, 97, 255,1)',
          'rgb( 51, 97, 255,1)',
          'rgb( 51, 97, 255,1)',
          'rgb( 51, 97, 255,1)',
          'rgb( 51, 97, 255,1)',
          'rgb( 51, 97, 255,1)',
          'rgb( 51, 97, 255,1)'
       ],
       borderColor: [
          'rgb(51, 97, 255,1)',
          'rgb(51, 97, 255,1)',
          'rgb(51, 97, 255,1)',
          'rgb(51, 97, 255,1)',
          'rgb(51, 97, 255,1)',
          'rgb(51, 97, 255,1)',
          'rgb(51, 97, 255,1)'
       ],
       borderWidth: 1,
     },
     {
       label: 'Total interest K 217,313',
       data: [35,50, 75, 100, 125, 150, 175, 200,225, 250, 275, 300,325],
       backgroundColor: [
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)'
       ],
       borderColor: [
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)',
          'rgb(51, 230, 255,1)'
       ],
       borderWidth: 1,
     },
     
      ]
   };



   // Options for the chart
 

   // Get the canvas element
   const ctx = document.getElementById('myChart').getContext('2d');

   // Create the bar chart
   const stackedBar = new Chart(ctx, {
   type: 'bar',
   data: data,
   options: {
       scales: {
           x: {
             stacked : true,
             ticks : {
               maxTicksLimit : 7
             }
           },
           
           y: {
               stacked: true
           }
       }
     }
   }
);



// //PieChart


const data1 = [
  { label: 'Category 2', value: 22 },
  { label: 'Category 1', value: 78 },
  
 
];

// Colors for the doughnut chart segments
const colors = [ 'rgb(132, 225, 212)', 'rgb(0, 158, 96)'];

// Function to draw the doughnut chart
function drawDoughnutChart() {
  const canvas = document.getElementById('doughnutChartCanvas');
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(canvas.width, canvas.height) / 2 - 10; // Add some padding
  const innerRadius = radius / 2; // Set the inner radius to create the doughnut effect

  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  let startAngle = 0;
  let endAngle = 0;

  data1.forEach((item, index) => {
      const sliceAngle = (item.value / totalValue) * 2 * Math.PI;
      endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true); // Draw inner arc
      ctx.closePath();

      ctx.fillStyle = colors[index];
      ctx.fill();

      // // Draw the label near the slice
      // const textAngle = startAngle + sliceAngle / 2;
      // const textX = centerX + (innerRadius + (radius - innerRadius) / 2) * Math.cos(textAngle);
      // const textY = centerY + (innerRadius + (radius - innerRadius) / 2) * Math.sin(textAngle);
      // ctx.fillStyle = '#000';
      // ctx.textAlign = 'center';
      // ctx.font = '14px Arial';
      // ctx.fillText(item.label, textX, textY);

      startAngle = endAngle;
  });

  // Write some text in the center of the doughnut chart
  ctx.fillStyle = '#000';
  ctx.textAlign = 'center';
  ctx.font = '20px Arial';
  ctx.fillText('90%', centerX, centerY);
}

// Call the function to draw the chart when the page loads
window.onload = drawDoughnutChart;