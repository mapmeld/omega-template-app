// omega-template-app
// app.js

var Ω = require("omegapm-require");
Ω("omega-sqrt", "0ea700bf2a7cf9a3cfc8c33e0823735de922d944", function(err, mod) {
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
