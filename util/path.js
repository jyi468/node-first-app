const path = require('path');

// dirname returns directory name of a path
// process.mainModule.filename gives us file path that is responsible for our app running
// it will be 'C:\Users\jyi46\WebstormProjects\node-first-app\app.js'
// path.dirname() of the above would give us:
// 'C:\Users\jyi46\WebstormProjects\node-first-app'
console.log(path.dirname(process.mainModule.filename));
module.exports = path.dirname(process.mainModule.filename);
