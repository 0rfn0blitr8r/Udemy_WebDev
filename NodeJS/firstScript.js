const fs = require('fs');
console.log(fs);

for(let i = 0;i < 10; i++){
	console.log("HELLO FROM FIRST SCRIPT"); 
}

let dirName = process.argv[2] || 'NewDir';

fs.mkdirSync(dirName);
console.log(`${dirName} created`);