# omega-template-app

[![Greenkeeper badge](https://badges.greenkeeper.io/mapmeld/omega-template-app.svg)](https://greenkeeper.io/)

Initial template app for Ωpm ("omega package manager"), using a Ωpm package

## Concept

Ωpm is a JavaScript package manager with verified builds. This means that the package
that you install on your computer is pure JavaScript, identical to the one created by
its developer, and installing it will not run any other scripts or compile additional
code. By using Ω in place of require, you can also verify the package is unchanged before
starting the server.

Original gist: https://gist.github.com/mapmeld/7eb3b213358b55b74bdf

## Usage

### Ωpm install

Use omegapm >= 0.0.2

```
npm install omegapm -g
omegapm install  # or Ωpm install
```

### Include omega-require and dependencies in app.js

```
// use regular require here
var Ω = require("omega-require");

// async SHA-checking for Ωpm modules
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
