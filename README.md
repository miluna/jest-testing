# JavaScript Unit Tests using Jest and Babel
Sample project for JavaScript unit tests using Jest and Babel

## Basic test structure
Jest uses the **test()** method to create a unit test and **it will identify any file ended with .test.js as a Testing suite.**

**The test() method expects two arguments**, first is a representative **string** of the test and the second one is the actual **function that runs the test.**

Inside the second argument, where the test is actually happen, you will use the **expect()** method, which requires a single parameter **followed by an assertion method like .toBe() or .not.toBe()** where you insert the expected result as a parameter.

```js
test("It should say hello", () => {
  const result = salute();
  expect(result).toBe("hello");
  expect(result).toBeDefined();
  expect(result).not.toBeNull();
});

```


## Using ES6 syntax with Jest
To use ES6 syntax and async/await functions you need to install **Babel** as dev dependencies

```bash
npm i -D babel-core babel-jest babel-polyfill babel-preset-env
```

When you are about to use an async/await function you will need to **import polyfill prior to any other thing.**
```js
import 'babel-polyfill';
```
And once you call that async method, you need to use **.resolve** to let the promise be resolved.

```js
expect(result).resolves.toBeDefined();
```


## Expected output
Once dependencies have been installed. You can run the following command:
```bash
npm jest
```
If you have jest installed globally, you can simply use
```bash
jest
```

Expected output is:


```bash
 PASS  ./functions.test.js
  √ It should add 2 + 2 (8ms)
  √ It should say hello (1ms)
  √ It should get an async phrase using async/await (2ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        5.043s
Ran all test suites.
```
