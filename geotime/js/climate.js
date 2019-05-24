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
    .curve(d3.curveCardinal)
    .x(function(d) { return x(d.Date); })
    .y(function(d) { return y(d.AnomalyT); });
// define the line
var valueline2 = d3.line()
    .curve(d3.curveCardinal)
    .x(function(d) { return x(d.Date); })
    .y(function(d) { return y(d.AnomalyT); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#tempCurve").append("svg")
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
  x.domain([-70,0]);
  y.domain([d3.min(data, function(d) {
  return Math.min(d.AnomalyT); })-0.5
  ,
    d3.max(data, function(d) {
	  return Math.max(d.AnomalyT); })+1.2
  ]);

  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline)
      .style("stroke", "#CBD9DE")
      .style("stroke-width", 7).style("fill", "none")
      ;
  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline2)
      .style("stroke", "#3590d6")
      .style("stroke-width", 2).style("fill", "none")
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
    .text("距今年代");


  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y).ticks(5));

svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("温度 (°C)");

svg.append("circle")
    .attr("cx", 199)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("古新世-始新世极热事件（PETM）")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 40)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("尤卡坦陨石撞击，恐龙灭绝")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 220)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("印度和欧亚大陆发生碰撞")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 240)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("早始新世温暖期（EECO）")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 449)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("南极洲形成冰盖")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 465)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("澳洲与南极洲分离")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 480)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("渐新世寒冷期")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 495)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("德雷克海峡形成")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 540)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("渐新世末升温（LOW）")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 525)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("安第斯和青藏高原的隆起加速，火山活动剧烈")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 655)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("哥伦比亚河洪流玄武岩")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 670)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("中新世中期温暖期（MMCO）")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 730)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("北半球形成冰盖")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 805)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#bdbdbd")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("巴拿马地峡闭合")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 820)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("第四纪冰期")
              .style("left", (d3.event.pageX) + "px")
              .style("top", (d3.event.pageY - 30) + "px");
          })
    .on("mouseout", function() {
          div.transition()
          .duration(500)
          .style("opacity", 0);
});

svg.append("circle")
    .attr("cx", 900)
    .attr("cy", 10)
    .attr("r", 8)
    .style("fill", "#CBD9DE")
    .style("opacity", 0.8)
    .on("mouseover", function() {
          div.transition()
              .duration(20)
              .style("opacity", 0.8);
          div	.html("全新世温暖期")
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
