var bars = d3.select("body")
             .selectAll("div")
             .data([4, 8, 15, 16, 20, 12]);
  
bars.enter().append("div")
    .style("background-color", "green")
    .style("height", function(d) { return d*20+"px"});

bars.exit().remove();