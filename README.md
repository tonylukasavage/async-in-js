# Asynchronous Programming: State of the Union

Code for Pittsburgh Javascript meetup on February 23, 2016.

## Requirements

* node.js 4+
* npm

These demos were tested and run on Mac OSX. There's no OS-specific code, so Windows and Linux should work as well, but YMMV.

## Running examples

```
npm install
```

## A Login Flow

Given a username and password, upon successful login I expect to get back a user model populated with lots of data.

1. Get user model
2. Compare password
3. Update the last login time
4. Attach multiple datasets in parallel to user model

## ES6/7

You'll notice LOTS of ES6 and ES7 (or whatever they're calling them today) code in these examples. It's important to note that these sample are all being tested against node.js 4+. So while that gives us [a lot of ES6 features](https://nodejs.org/en/docs/es6/), it is far from a complete list of the touted features in ES6. Here's a [complete list](https://kangax.github.io/compat-table/es6/) of what node.js and other JS engines do and do not support. In my opinion, the following are the most notable absences from the supported list for node.js, whose ES6 compatiblity is 100% contingent on what V8 supports, and they seems totally unwilling to deviate from this with polyfills:

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
