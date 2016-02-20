# callbacks

Execute the login flow using basic callbacks. No bells or whistles here, just straight-up nested callbacks til we're done executing asynchronous code.

## Pros

* Requires no dependencies
* Works in any asynchronous environment

## Cons

* So horribly ugly and hard to read
* Makes for unscalable code
* variable shadowing, particularly with `err`
* Parallelizing callbacks sucks
* Generally a great sign that you don't know how to write quality asynchronous code
