var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%Y");
var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.Date); })
    .y(function(d) { return y(d.AnomalyT); });
// define the line
var valueline2 = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.Date); })
    .y(function(d) { return y(d.AnomalyT); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

function draw(data, country) {

  var data = data[country];

  // format the data
  data.forEach(function(d) {
      d.Date = d.Date;
      d.AnomalyT = +d.AnomalyT;
      d.Exports = +d.Exports;
  });

  // sort years ascending
  data.sort(function(a, b){
    return a["Date"]-b["Date"];
	})

  // Scale the range of the data
  x.domain([-1500,2000]);
  y.domain([d3.min(data, function(d) {
  return Math.min(d.AnomalyT); })-0.5
  ,
    d3.max(data, function(d) {
	  return Math.max(d.AnomalyT); })+0.5
  ]);

  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline)
      .style("stroke", "#CBD9DE")
      .style("stroke-width", 7)
      ;
  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline2)
      .style("stroke", "#6A9C92")
      .style("stroke-width", 2)
      ;
  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(5)
    );

  svg.append("text")
    .attr("transform",
          "translate(" + (width/2) + " ," +
                         (height + margin.top + 20) + ")")
                         .attr("y", 0 - margin.bottom)
                         .attr("x", 50 - margin.left)
    .style("text-anchor", "middle")
    .attr("dy", "1em")
    .text("Year");


  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y).ticks(5));

svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Temperature Anomaly (°C) Regarding 1950");

svg.append("circle")
    .attr("cx", 119)
    .attr("cy", 170)
    .attr("r", 12)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("Cold period in Zhou Dynasty:<br>Invasion of barbarians including Quanrong")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
    });

svg.append("circle")
    .attr("cx", 213)
    .attr("cy", 110)
    .attr("r", 12)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("Warm period of Warring States period:<br>No large scale invasions of nomadic tribes.")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});
svg.append("circle")
    .attr("cx", 326)
    .attr("cy", 110)
    .attr("r", 12)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("Cooling trend in early Han dynasty:<br>Wars between Han and Xiongnu.")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});
svg.append("circle")
    .attr("cx", 361)
    .attr("cy", 150)
    .attr("r", 12)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("Stablized warm peroid of Han dynasty:<br>The first golden age of Imperial China.")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});
svg.append("circle")
    .attr("cx", 435)
    .attr("cy", 210)
    .attr("r", 12)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("Cold period in 4th and 5th centuries:<br>Nomadic regioms in Yellow River valley (Sixteen Kingdoms and Northern Dynasties).")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});
svg.append("circle")
    .attr("cx", 530)
    .attr("cy", 125)
    .attr("r", 12)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("Warm period of Sui and Tang dynasties:<br>The second golden age of Imperial China.")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 660)
    .attr("cy", 325)
    .attr("r", 12)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("Significant temperature drop in 10th and 11th centuries:<br>Northern minorities including Shatuo, Khitan, Tangus, Jurchen and Mongols were constant threats to Chinese dynasties.")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 770)
    .attr("cy", 325)
    .attr("r", 12)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("The Little Ice Age of Ming and Qing dynasties: <br> Mongols and Manchus put pressure on Ming dynasty.")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 50)
    .attr("cy", 45)
    .attr("r", 12)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("Warm period in Shang dynasty: <br>The early development of Chinese civilization.")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 860)
    .attr("cy", 325)
    .attr("r", 12)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("Post-1850 global warming")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

}
//end of the draw function


// Get the data
d3.json("data/climatedata.json", function(error, data) {
  if (error) throw error;

  // trigger render
  draw(data, "Zhu Kezhen");
});
