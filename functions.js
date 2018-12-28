export const add = (num1, num2) => num1 + num2;

export const salute = () => "hello";

const mockedAsyncFunction = () => new Promise((resolve, reject) => resolve("Async!"));

export const asyncFunction = async () => await mockedAsyncFunction();
