var watch = require('node-watch');
const { exec } = require("child_process");


watch('./', { recursive: true, filter: f => !/node_modules|dist/.test(f) }, function(evt, name) {
  console.log('%s changed.', name);
  exec("npm run build", (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    if (stderr) {
      console.error(error);
      return;
    }
    console.log(stdout);
  });
});
