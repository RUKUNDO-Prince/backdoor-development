const os = require('os');

// INFO ABOUT CURRENT USER 
const user = os.userInfo();
// console.log(user);

// SYSTEMS UPTIME IN SECONDS
// console.log(`The system's uptime is ${os.uptime} seconds`);

// MORE ABOUT OS
const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOs);