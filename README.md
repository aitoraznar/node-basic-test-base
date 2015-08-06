A basic node project with jasmine testing
=================

### Instructions
* *node .* To launch the app, see the results in the terminal.
* *grunt test* To launch jasmine tests
* *grunt dev* To start developing with jshint and jasmine testing


Base example:
```js
var john = new Person("John", "Box");
console.log(john.name);
// should equal "John Box"
john.name = "John Travolta";
console.log(john.lastName);
// should equal "Travolta"
console.log(john.firstName);
// should equal "John"
```


### License ISC

Copyright (c) 2015, Aitor Aznar Álvarez renaitor@gmail.com

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
