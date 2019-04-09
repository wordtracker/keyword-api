if (process.env.PORT) { 
  port = process.env.PORT
} else { 
  port = 8080
}

var execSync = require('child_process').execSync;
var cmd = "./local_modules/swagger-repo/bin/swagger-repo.js serve -p " + port;

var options = {
  encoding: 'utf8'
};

console.log(execSync(cmd, options));