function mousecontrol(d) {
    var html = "";

    html += "<div class=\"tooltip_kv\">";
    html += "<span class=\"tooltip_key\">";
    html += "Year";
    html += "</span>";
    html += "</div>";

    for (var i = 0; i < Object.keys(data[0]).length; i++) {
      html += "<div class=\"tooltip_kv\">";
      html += "<span class='tooltip_key2'>";
      html += Object.keys(data[0])[i];
      html += "</span>";
      html += "<span class=\"tooltip_value\">";
      html += valueFormat(dataMap[id_name_map[d.id]][Object.keys(data[0])[i]]);
      html += "";
      html += "</span>";
      html += "</div>";
    }
    $("#tooltip-container").html(html);
    var coordinates = d3.mouse(this);

    var map_width = $('.states-choropleth')[0].getBoundingClientRect().width;

    if (d3.event.layerX < map_width / 2) {
      d3.select("#tooltip-container")
        .style("top", (d3.event.layerY + 15) + "px")
        .style("left", (d3.event.layerX + 15) + "px");
    } else {
      var tooltip_width = $("#tooltip-container").width();
      d3.select("#tooltip-container")
        .style("top", (d3.event.layerY + 15) + "px")
        .style("left", (d3.event.layerX - tooltip_width - 30) + "px");
    }
}
