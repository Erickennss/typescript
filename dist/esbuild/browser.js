"use strict";
(() => {
  // src/main.ts
  function greet(person) {
    return "Hello " + person;
  }
  console.log(greet("TypeScript"));

  // src/browser.ts
  window.greet = greet;
})();
