# Asynchronous Programming: State of the Union

Code for Pittsburgh Javascript meetup on February 23, 2016.

## Example: A Login Flow

The following example "flow" is what all the Javascript in the [methods](methods) folders are implementing. To make this easy for everyone to run, the model operations and data retrieval are all mocked, either accepting callbacks as a final parameter, or returning a Promise if a callback is not provided.

> Given a username and password, allow a user to login and retrieve data.
>
> 1. Get user model
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

```
npm install
./runner 2-async.js
```

## Testing and contributing

All preprocessing with babel and tests are run via grunt

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
