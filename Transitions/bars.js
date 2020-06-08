var trans = d3.transition()
            .duration(2000)

var bars = d3.select("#chart") // note: we're using a different starting point
    .selectAll("div")
    .data([4, 8, 15, 16, 20, 12])

bars.enter().append("div")
    .text(function(d){ return d; })
    .style("height", function(d){ return d*20+"px" })

function randomsGenerator(){
    var nums = [];
    var size = Math.floor(Math.random()*20);

    for (var i = 0; i < size; i++){
        nums.push(Math.floor(Math.random()*20));
    }
    buildChart(nums);
}

function buildChart(newdata){
    var bars = d3.select("#chart")
                .selectAll("div")
                .data(newdata)
        bars.transition()
                .duration(2000)
                .text(function(d){ return d; })
                .style("height", function(d){ return d*20+"px" })
                .style("background-color", "blue")

    bars.enter().append("div")
        .transition()
        .duration(2000)
        .text(function(d){ return d; })
        .style("height", function(d){ return d*20+"px" })
        .style("background-color", "red");

    bars.exit().remove();

}
