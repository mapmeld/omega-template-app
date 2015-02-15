// omega-template-app
// app.js

var Ω = require("omegapm-require");
Ω("omega-sqrt", "b640e772a9762cea6f3cd4edc1d272b7b4301ce9", function(err, mod) {
  if (err) {
    console.log(err);
  }

  var sqrt = mod.sqrt;

  console.log(sqrt(4));
  console.log(sqrt(9));
  console.log(sqrt(16));
  console.log(sqrt(25));
  console.log(sqrt(36));
});
