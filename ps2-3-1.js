
// generates a random set of 10 numbers
let generator = d3.random();
let x = generator(10);

d3.select("svg")
  .selectAll("circle")
  .data(center).enter()
  .append("circle")
  .attrs({
    r: 3,
    cx: d => d * 200,
    cy: 200,
    fill: "black"
  })
