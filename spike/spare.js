"scripts": {
  "start": "node ./local_modules/swagger-repo/run.js",
  "build": "node ./local_modules/swagger-repo/bin/swagger-repo build -o web_deploy",
  "test": "node ./local_modules/swagger-repo/bin/swagger-repo validate",
  "gh-pages": "node ./local_modules/swagger-repo/bin/swagger-repo gh-pages"
},
