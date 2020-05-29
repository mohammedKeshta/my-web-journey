console.log("D3.JS Initializations");

const PARAGRAPHS = document.getElementsByTagName("p");

// Normal JS
for (let i = 0; i < PARAGRAPHS.length; i++) {
  const paragraph = PARAGRAPHS.item(i);
  paragraph.style.setProperty("color", "blue", null);
}

// With D3js
d3.selectAll("p").transition().style("color", () => {
  return `hsl(${Math.random() * 360},100%,50%)`;
});
d3.select("body").attr("style", "background-color:black");

d3.select("body")
  .data([10, 20, 30, 40, 50])
  .enter()
  .append("p")
  .text((txt) => `I am paragraph number ${txt}`)
  .style("font-size", (fs) => fs + "px")
  .style("color", "white");
