# co module

Execute the login flow using [co](https://github.com/tj/co). This leverages not only the `co` module, but also ES6 Promises and generators to write asynchronous code that is structured very much like synchronous code.

## Pros

* The closest thing to async/await that you can do right now without a transpiler
* Really easy to read
* Much less LOC
* Let's you write async code very much like sync
* Less code nesting than even promises alone

## Cons

* Uncaught errors go to the void of infinite troubleshooting. Remember to `catch()`.
* Can't use fat arrow functions to maintain lexical scope
* Non-returning Promises look kinda weird, yielding nothing
* You _must_ wrap all `co` code in a generator function
* Not standard

## Notes

* Quick generator crash course, reference MDN for this and all ES6/7 references