// main2.js

import readline from 'readline';

// Create a terminal input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for input
rl.question('Enter a word to capitalize: ', async (inputWord) => {
  // Dynamically import the module only when needed
  const utils = await import('./stringUtils.js');
  
  const result = utils.capitalize(inputWord);
  console.log('Capitalized word:', result);

  rl.close(); // Close input stream
});