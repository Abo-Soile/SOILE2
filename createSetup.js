#!/usr/bin/env node

const readline = require('readline');
const fs = require('filesystem');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUsername() {
  return new Promise((resolve) => {
    rl.question('Enter username: ', (username) => {
      resolve(username);
    });
  });
}

function promptPassword() {
  return new Promise((resolve) => {
    rl.question('Enter password: ', (password) => {
      resolve(password);
    });
  });
}

function promptConfirmPassword() {
  return new Promise((resolve) => {
    rl.question('Confirm password: ', (confirmPassword) => {
      resolve(confirmPassword);
    });
  });
}

async function main() {
  const username = await promptUsername();
  const password = await promptPassword();
  const confirmPassword = await promptConfirmPassword();

  // Check if password matches the confirmation
  while (password !== confirmPassword) {
    console.log('Password confirmation does not match. Please try again.');
    const newPassword = await promptPassword();
    const newConfirmPassword = await promptConfirmPassword();
    password = newPassword;
    confirmPassword = newConfirmPassword;
  }

  // Output the entered username and password
  const setup_json = { 
                        adminuser: username,
                        adminpassword:password
                    }
  fs.writeFileSync('backend/src/soile_resources/setup.json', JSON.stringify(setup_json))
  rl.close();
}

main();