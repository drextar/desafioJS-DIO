let valor1 = parseFloat(gets());
let valor2 = parseFloat(gets());
let valor3 = parseFloat(gets());
let valor4 = parseFloat(gets());
let valor5 = parseFloat(gets());
let valor6 = parseFloat(gets());

let i = parseFloat(0)
if (Math.sign(valor1) >= 1) {
  i++
} 
if (Math.sign(valor2) >= 1) {
  i++
}
if (Math.sign(valor3) >= 1) {
  i++
} 
if (Math.sign(valor4) >= 1) {
  i++
} 
if (Math.sign(valor5) >= 1) {
  i++
} 
if (Math.sign(valor6) >= 1) {
  i++
} 

console.log(`${i} valores positivos`)