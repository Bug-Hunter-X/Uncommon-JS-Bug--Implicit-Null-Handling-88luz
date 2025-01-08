function foo(a, b) {
  // Using optional chaining and nullish coalescing
  const aVal = a ?? 0; 
  const bVal = b ?? 0;
  return aVal + bVal; 
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined, 10)); // Output: 10
console.log(foo(null, undefined)); //Output: 0