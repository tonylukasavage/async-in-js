# streamline.js

Execute the login flow using [streamline.js](https://github.com/Sage/streamlinejs). It takes a fairly radical, non-standard approach to eliminating callback hell while requiring you to learn _zero_ control flow APIs. In the author's own words:

> Replace all callbacks by an underscore and write your code as if all functions were synchronous.

## Pros

* No control flow APIs to learn, just follow the advice above
* Makes code much more readable
* Removes unnecessary async code nesting
* Smallest LOC of any example
* No transpiler step to run, despite streamline.js applying transformations (though you'll never actually get to see the files)
* Has the ability to interoperate with callbacks and Promises

## Cons

* You need to use a special `_node` binary, or precompile your files
* Files that need to be streamlined must have the `._js` extension, not `.js`.
* This is a _weird_ API, very hard to grok initially, "non-standard" does not do it justice
* There is a performance overhead in the transformations and the fact that `_` is not actually a callback, but an instruction `the streamline.js`.
* Interaction with callbacks and Promises uses some very odd notation (`!_`)
* The stack traces can be a bit cryptic, depending on the underlying implementation (be it callbacks, fibers, generators, or await)
* It comes with built-in [drama](https://groups.google.com/forum/#!msg/nodejs/GB3leHT7dHI/oX4ULcWlhfIJ)
