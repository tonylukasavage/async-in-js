# async/await module

Execute the login flow using the developing EcmaScript standard `async` and `await` keywords. This is how **EVERYONE** will be writing asynchronous Javascript in a few years. And with a little preprocessing, you can have it **NOW** in most environments.

## Pros

* (almost) Standard
* Really easy to read
* Much less LOC
* Let's you write async code very much like sync
* Zero code nesting
* No need for intermediate generator functions like `co` (all under the hood)
* Works seamlessly with existing Promise APIs
* It's just freaking sweet

## Cons

* Unavailable (almost) anywhere without transpiler ([babel](http://babeljs.io/))
	* `react-native` supports async/await out of the box
* Still considered experimental, meaning that the final API could potential change non-trivially
* Like the Promise and `co` examples, it needs a little extra function-wrapping to work well with node.js

## Notes

* [babel-eslint](https://github.com/babel/babel-eslint) for eslinting babel code
