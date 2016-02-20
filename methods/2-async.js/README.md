# async.js

Execute the login flow using [async.js](https://github.com/caolan/async), one of the most depended on libraries in all of node.js. In this case, we'll be leveraging both its `series()` and `parallel()` functions to complete our flow.

## Pros

* Eliminates callback hell, no more nesting
* Very mature and powerful module
* multiple means of controlling flow
* Errors abort, pass through to final callback

## Cons

* easy to forget callbacks
* still nesting callbacks in some cases
* Not a standard, there's no next step
* Tough to share variables across functions
* waterfall can be confusing, particularly if you don't know APIs well
