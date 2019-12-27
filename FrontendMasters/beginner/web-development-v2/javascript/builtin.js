exports.run = () => {
  console.log('Built in');

  const sentence = 'tHis IS mY NaMe';
  console.log(sentence.toLowerCase());

  console.log(Math.round(4.1)); // Returns a supplied numeric expression rounded to the nearest integer.
  console.log(Math.floor(4.1)); // Returns the greatest integer less than or equal to its numeric argument.
  console.log(Math.ceil(4.5)); // Returns the smallest integer greater than or equal to its numeric argument.

  console.log(sentence.substr(0, 4)); // tHis
  console.log(sentence.substring(0, 4)); // tHis
};
