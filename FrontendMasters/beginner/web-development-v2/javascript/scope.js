exports.run = () => {
  const A = 'A';
  let F;

  function doStuff(B) {
    console.log(B); // works, B parameter is still in scope
    const C = 'C';
    let H = 'H';
    if (1 + 1 === 2) {
      const D = 'D';
      H = 'something else';
    }
    // console.log(D); // does not work, D was declared in that if statement block
    console.log(H); // works, H was declared outside the if statement
    F = 'F';
  }

  let E = 0;
  while (E < 3) {
    E++;
    console.log(A); // works, the outer block (called the global scope) is still in scope
    const G = 'G';
  }
  // 'A'
  // 'A'
  // 'A'
  console.log(E); // 3 // works, E was declared outside the while loop
  // console.log(G);  // does not work, declared inside the while loop and it's over

  doStuff('B'); // 'B', 'something else'
  // console.log(B); // undefined // does not work, the B parameter expires after the function call
  // console.log(C); // undefined // does not work, C was declared inside the function and the function is over
  console.log(F); // 'F' // works, F was declared in the global scope
};
