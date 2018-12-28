import 'babel-polyfill';
import { add, salute, asyncFunction } from "./functions";


test("It should add 2 + 2", () => {
  const result = add(2, 2);
  expect(result).toBe(4);
  expect(result).toBeDefined();
  expect(result).not.toBeNull();
});

test("It should say hello", () => {
  const result = salute();
  expect(result).toBe("hello");
  expect(result).toBeDefined();
  expect(result).not.toBeNull();
});

test("It should get an async phrase using async/await", () => {
  const result = asyncFunction();
  expect(result).resolves.toBe("Async!");
  expect(result).resolves.toBeDefined();
  expect(result).resolves.not.toBeNull();
});
