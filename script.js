const makeChange = (c) => {
  // your name here
	// Convert string to number if needed
  c = parseInt(c);
  
  // Calculate quarters (25 cents each)
  const q = Math.floor(c / 25);
  c = c % 25;  // Update c to the remainder
  
  // Calculate dimes (10 cents each)
  const d = Math.floor(c / 10);
  c = c % 10;  // Update c to the remainder
  
  // Calculate nickels (5 cents each)
  const n = Math.floor(c / 5);
  c = c % 5;   // Update c to the remainder
  
  // Calculate pennies (1 cent each)
  const p = c;  // Whatever is left is pennies
  
  // Return the result as an object
  return {
    q: q,
    d: d,
    n: n,
    p: p
  };
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
