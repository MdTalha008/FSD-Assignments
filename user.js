// user.js

// Default export: User class
export default class User {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `User Name: ${this.name}`;
  }
}

// Named export: validateEmail function
export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
