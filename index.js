// Bài 1
let i = 10;
let f = 20.5;
let b = true;
let s = "Hà Nội";
document.write(
	`i = ${i}
  <br />    
  f = ${f} 
  <br /> 
  b = ${b}
  <br />  
  s = ${s} 
  <br />`
);
// Bài 2
let width = 20;
let height = 10;
let area = width * height;
document.write(`Area = ${area} <br />`);
// Bài 3
showNumbers();
function showNumbers() {
	let value_a = prompt("Input numer a");
	let value_b = prompt("Input number b");
	if (value_a % value_b) {
		alert(`a ko chia het cho b`);
	} else {
		alert("a chia het cho b");
	}

	document.write(`Number a = ${value_a} and number b = ${value_b} `);
}
