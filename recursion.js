// Factorial function using recursion
function factorial(n) {
    if (n === 0) {
      return 1; // Base case: factorial of 0 is 1
    } else {
      return n * factorial(n - 1); // Recursive case: n times factorial of (n - 1)
    }
  }
  
  console.log(factorial(5));
  
