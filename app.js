// omega-template-app
// app.js

var Ω = require("omegapm-require");
Ω("omega-sqrt", "f8836fd69102395cb4737affc3591fab1deca8d6", function(err, mod) {
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
