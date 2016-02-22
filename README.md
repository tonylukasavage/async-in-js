# Asynchronous Programming: State of the Union

Code for Pittsburgh Javascript meetup on February 23, 2016. In the meetup we'll discuss the current state of asynchronous programming in Javascript, starting at callback hell and working all the way up to the not-yet-standard holy grail that is the async/await API.

## Example: A Login Flow

The following example "flow" is what all the Javascript in the [methods](methods) folders are implementing. To make this easy for everyone to run, the model operations and data retrieval are all mocked, either accepting callbacks as a final parameter, or returning a Promise if a callback is not provided.

> Given a username and password, allow a user to login and retrieve data.
>
> 1. Read a user model
> 2. Compare password to validate login
> 3. Update the last login time upon success
> 4. Attach multiple datasets in parallel to user model
> 5. Return the user model
>
> Steps 1-4 are all asynchronous.

## Requirements

* node.js 4+
* npm

These demos were tested and run on Mac OSX. There's no OS-specific code, so Windows and Linux should work as well, but YMMV.

## Running examples

The following is how you would run the `2-async.js` example.

```
npm install
./runner 2-async.js
```

Valid example names:

* `1-callbacks`
* `2-async.js`
* `3-promises`
* `4-co`
* `5-async-await`

## Testing and contributing

All preprocessing with babel and tests are run via `grunt`. This means if you make any changes to `5-async-await`, you'll need to run `grunt` to make sure it gets transpiled before attempting to run the example. Tests are run via [mocha](https://mochajs.org/) using [should](https://github.com/shouldjs/should.js) assertions.

```
npm install -g grunt-cli
npm test
```

## ES6/7

You'll notice LOTS of ES6 and ES7 (or whatever they're calling them today) code in these examples. It's important to note that these samples are all being tested against node.js 4+. So while that gives us [a lot of ES6 features](https://nodejs.org/en/docs/es6/), it is far from a complete list of the touted features in ES6. Here's a [complete list](https://kangax.github.io/compat-table/es6/) of what node.js and other JS engines do and do not support. In my opinion, the following are the most notable absences from the supported list for node.js, whose ES6 compatiblity is 100% contingent on what V8 supports, and they seems totally unwilling to deviate from this with polyfills:

* ES6 modules
```
import * from './someModule'
```
* default parameters
```
function foo(a=1,b=2) { return a + b; }
foo(); // returns 3
```
* rest parameters
```
function foo(a, b, ...c) { return a + b + c.reduce((d, e) => d + e); }
foo(1, 2, 3, 4, 5, 6); // returns 21
```
* spread operator
```
function foo(a, b, c) { return a + b + c; }
let bar = [1, 2, 3];
foo(...bar); // returns 6
```
* destructuring assignments
```
let [foo, bar] = [123, 456];
// foo === 123, bar === 456
```

## Links

* [callback hell](http://callbackhell.com/) - what it is and how to avoid it
* [async.js](https://github.com/caolan/async)
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [co](https://github.com/tj/co)
* [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
* [async/await functions](https://github.com/tc39/ecmascript-asyncawait)
* [denodeify](https://www.npmjs.com/package/denodeify) - for wrapping callback-based async code and making it return Promises
* [mz](https://www.npmjs.com/package/mz) - wrap node.js core APIs to return Promises
* [babel](http://babeljs.io/) - for transpiling `5-async-await` example
* [babel-plugin-transform-async-to-generator](https://babeljs.io/docs/plugins/transform-async-to-generator/) - for transpiling `5-async-await` example
* [node.js ES6 support](https://nodejs.org/en/docs/es6/)
* [ES6 full compatibility chart](https://kangax.github.io/compat-table/es6/)
* [mocha](https://mochajs.org/)
* [should](https://github.com/shouldjs/should.js)
