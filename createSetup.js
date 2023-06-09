#!/usr/bin/env node

// Intentionally only using node internal functionality.

const fs = require('fs');


function prompt(question, hideInput) {
    return new Promise((resolve) => {
        process.stdout.write(question);
        if(hideInput)
        {
            process.stdin.setRawMode(true);
            const inputBuffer = [];    
            process.stdin.on('data', function onData(data) {                
                const char = data.toString();            
                if (char === '\n' || char === '\r') {
                  process.stdout.write('\n');
                  process.stdin.pause();
                  process.stdin.removeListener('data', onData);
                  resolve(inputBuffer.join(''));
                } else if (char === '\u0003') {
                  process.stdout.write('\n');
                  process.stdin.pause();
                  process.stdin.removeListener('data', onData);                  
                  process.exit();
                } else if (char === '\u007f') {
                    inputBuffer.pop();                    
                    process.stdout.clearLine();                    
                    process.stdout.cursorTo(0);                    
                    process.stdout.write(question + '*'.repeat(inputBuffer.length));
                } else {
                  inputBuffer.push(char);
                  process.stdout.write('*');
                }
              });
        }
        else{
            process.stdin.on('data', (data) => {
                const string = data.toString();   
                    resolve(string.trim());          
                });
        }
    
        process.stdin.resume();
      });
    }
  
  async function main() {
    const username = await prompt('Enter username: ');
    var password = await prompt('Enter password: ', true);
    var confirmPassword = await prompt('Confirm password: ', true);
  
    // Check if password matches the confirmation
    while (password !== confirmPassword || (password.length < 10)) {
      if(password.length < 10)
      {
        console.log("Password must be at least 10 characters long")
      }
      else
      {
        console.log('Password confirmation does not match. Please try again.');
      }
      const newPassword = await prompt('Enter password: ', true);
      const newConfirmPassword = await prompt('Confirm password: ', true);
      password = newPassword;
      confirmPassword = newConfirmPassword;
    }
  // Output the entered username and password
  const setup_json = { 
                        adminuser: username,
                        adminpassword:password
                    }
  fs.writeFileSync('backend/src/soile_resources/setup.json', JSON.stringify(setup_json))
}

main().catch((error) => {
    console.error('An error occurred:', error);
    process.exit(1);
  });