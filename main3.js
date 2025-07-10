// main3.js

// Import default (User) and named (validateEmail) exports
import User from './user.js';
import { validateEmail } from './user.js';

// Create User instance
const user = new User('Alice');
console.log(user.getInfo());

// Validate sample email
const email = 'alice@example.com';
console.log(`Is "${email}" a valid email?`, validateEmail(email));
