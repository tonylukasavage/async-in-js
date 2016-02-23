# async.js

Execute the login flow using [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Pros

* Part of the ES6 spec
* Available in most Javascript environments
* Eliminates the need to structure APIs around an `err` object
* Stepping stone to future asynchronous coding improvements
* No worries about callback/variable shadowing

## Cons

* node.js core is callbacks, most modules as well. They are NOT planning to support Promises.
* Only an incremental improvement over async.js
* Potential overhead is introduced, not as simple as callbacks
* Only in node.js 4+

## Notes

* [Bluebird](https://github.com/petkaantonov/bluebird) is more full-featured, faster than native V8 promises