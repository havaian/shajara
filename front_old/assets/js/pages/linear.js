var treeData = {
    name: "Usmonov Abdumalik",
    children: [
        {
            name: "A",
            children: [
                { name: "A1" },
                { name: "A2" },
                { name: "A3" },
                { name: "A4" },
                {
                    name: "C",
                    children: [
                        { name: "C1" },
                        {
                            name: "D",
                            children: [
                                { name: "D1" }, 
                                { 
                                    name: "D2", 
                                    children: [
                                        { name: "A1" },
                                        { name: "A2" },
                                        { name: "A3" },
                                        { name: "A4" },
                                        {
                                            name: "C",
                        
                                            children: [
                                                { name: "C1" },
                                                {
                                                    name: "D",
                                                    children: [{ name: "D1" }, { name: "D2" }],
                                                },
                                            ],
                                        },
                                    ],
                                }
                            ],
                        },
                    ],
                },
            ],
        },
        { name: "Z" },
        {
            name: "B",
            children: [{ name: "B1" }, { name: "B2" }, { name: "B3" }],
        },
    ],
};

var margin = { top: 20, right: 90, bottom: 30, left: 90 },
    width = ($("#chart_wrapper").width() * 2) - margin.left - margin.right,
    height = ($("#chart_wrapper").height() * 2) - margin.top - margin.bottom;
var svg = d3
    .select("#chart_wrapper")
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var i = 0,
    duration = 750,
    root;
var treemap = d3.tree().size([height, width]);
root = d3.hierarchy(treeData, function (d) {
    return d.children;
});
root.x0 = height;
root.y0 = width;
root.children.forEach(collapse);

update(root);
function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

function update(source) {
    var treeData = treemap(root);
    var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);
    nodes.forEach(function (d) {
        d.y = d.depth * 180;
    });
    var node = svg.selectAll("g.node").data(nodes, function (d) {
        return d.id || (d.id = ++i);
    });
    var nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on("click", click);
    nodeEnter
        .attr("class", "node")
        .attr("r", 1e-6)
        .style("fill", "#fff");
    nodeEnter
        .append("rect")
        .attr("rx", function (d) {
            if (d.parent) return d.children || d._children ? 50 : 0;
            return 0;
        })
        .attr("ry", function (d) {
            if (d.parent) return d.children || d._children ? 50 : 0;
            return 0;
        })
        .attr("stroke-width", "1")
        .attr("stroke", "#000")
        .attr("pointer-events", function (d) {
            if (d.parent) return d.children || d._children ? "all" : "none";
            return 0;
        })
        .attr("x", 0)
        .attr("y", -10)
        .attr("width", "150")
        .attr("height", "75px");

    nodeEnter
        .append("text")
        .attr("pointer-events", function (d) {
            if (d.parent) return d.children || d._children ? "all" : "none";
            return 0;
        })
        .style("fill", "#000")
        .attr("dy", "7")
        .attr("x", "30")
        .attr("text-anchor", function (d) {
            return "middle";
        })
        .attr("align-text", function (d) {
            return "center";
        })
        .text(function (d) {
            return d.data.name;
        });

    var nodeUpdate = nodeEnter.merge(node);

    nodeUpdate
        .transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")";
        });
    var nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();
    nodeExit.select("rect").style("opacity", 1e-6);
    nodeExit.select("rect").attr("stroke-opacity", 1e-6);
    nodeExit.select("text").style("fill-opacity", 1e-6);
    var link = svg.selectAll("path.link").data(links, function (d) {
        return d.id;
    });
    var linkEnter = link
        .enter()
        .insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = { x: source.x0, y: source.y0 };
            return diagonal(o, o);
        });
    var linkUpdate = linkEnter.merge(link);
    linkUpdate
        .transition()
        .duration(duration)
        .attr("d", function (d) {
            return diagonal(d, d.parent);
        });
    var linkExit = link
        .exit()
        .transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return diagonal(o, o);
        })
        .remove();
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
    function diagonal(s, d) {
        path = `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`;

        return path;
    }
    function click(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        update(d);
    }
}