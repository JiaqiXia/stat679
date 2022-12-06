
// generates a random set of 10 numbers
let generator = d3.randomUniform();
let x = generator(10);
let center = [];
for (let i = 0; i < 10; i++) {
    center.push(generator(10))
  }
let center2 = [];
for (let i = 0; i < 10; i++) {
    center2.push(generator(10))
    }

d3.select("svg")
  .selectAll("circle")
  .data(center).enter()
  .append("circle")
  .attrs({
    r: 3,
    cx: d => d * 200,
    cy: 200,
    fill: "red"
  })

d3.select("svg")
  .selectAll("circle")
  .data(center2)
  .join("circle")
  .transition()
  .duration(1000)
  .attrs({
    cx: d => d * 200,
    cy: 200,
    r: 3,
    fill: "red"})
