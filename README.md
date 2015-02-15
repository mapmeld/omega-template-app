# omega-template-app

Initial template app for Ωpm ("omega package manager"), using a Ωpm package

## Concept

Ωpm is an end-to-end JavaScript package manager with verified builds.

Concept: https://gist.github.com/mapmeld/7eb3b213358b55b74bdf

## Usage

### Future: Ωpm install

### Include omega-require and dependencies in app.js

```
// use regular require here
var Ω = require("omega-require");

// async SHA-checking require here
Ω("omega-sqrt", "9d8c2c54a2", function(err, mod) {

  var sqrt = mod.sqrt;

  console.log(sqrt(4));
  console.log(sqrt(9));
  console.log(sqrt(16));
  console.log(sqrt(25));
  console.log(sqrt(36));
});
```

Currently the SHA-check includes package.json, which changes on each npm install.

It will be necessary to either prevent updates or stop including package.json.

### Running the app
```
node app.js
2
3
4
5
6
```

## License

GPLv3+ License
