# Test Driven Development Front End with React, Redux, Enzyme and Jest

## Introduction

[React](https://facebook.github.io/react/) is a UI library for writing components, and unit testing React components is much more organized.

Before we talk about Enzyme and Jest, we should define a few terms: Test runner, assertion library, and mocking library.

- **Test runner** — a tool that picks up files that  contain unit tests, executes them, and writes the test results to the  console or log files. Mocha and Jasmine are two popular test runners  used within the JavaScript community. You can read a comparison between  the two [here](https://www.codementor.io/javascript/tutorial/javascript-testing-framework-comparison-jasmine-vs-mocha).
- **Assertion library** — verifies the results of a test. Chai, Should, and Expect are examples of JavaScript assertion libraries.
- **Mocks** — used in unit testing a component. A  component under test has many dependencies. These dependencies are  usually replaced by stubs or mocks. Stubs simulate a dependent object.  Mocks offer an additional feature over stubs. With mocks, tests can be  written to verify if the component under test has called the mocks as  expected.
- **Mocking library** — facilitates the usage of mocks in unit testing. Sinon and TestDouble are commonly used JavaScript mocking libraries.

##  Enzyme

From the Enzyme documentation:

> Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

Enzyme is a library that wraps packages like React TestUtils, JSDOM  and CheerIO to create a simpler interface for writing unit tests. React  TestUtils has methods to render a react component into a document and  simulate an event. JSDOM is a JavaScript implementation of the DOM  (Document object model). DOM represents the tree structure of UI  components. CheerIO implements a subset of jQuery core and is used to  query the DOM. Enzyme wraps these libraries and provides a simple and  intuitive API for unit testing.

Enzyme is **not** a unit testing framework. It does not  have a test runner or an assertion library. It works with any test  runner and assertion library. In that way, it is not opinionated.

##  Jest

Quoting the Jest documentation:

> Jest is a JavaScript unit testing framework, used by Facebook to test services and React applications.

Jest is a framework and not a library. It comes with a test runner,  assertion library, and good mocking support. Jest is built on top of [Jasmine](http://jasmine.github.io/).

Jest has a novel way to test react components: **Snapshot testing**. With snapshot testing, the output of the current test run is compared  with the snapshot of the previous test run. If the output matches the  snapshot, the test passes.

##  Comparing Enzyme with Jest

As mentioned earlier, most developers who want to write unit tests  for a React application compare the two alternatives: Enzyme or Jest.  But in reality, this comparison is like comparing apples and oranges.  Enzyme is a testing library to render the react component into the DOM  and query the DOM tree. Jest is a unit testing framework and has a test  runner, assertion library, and mocking support. Enzyme and Jest is  complementary. **Enzyme can be used within Jest**.

However, there are valid reasons why developers compare the two.

- Both Enzyme and Jest are specifically designed to test React applications.
- Enzyme works only with React.
- Jest is more of a testing framework and can be used with non-react applications.
- Not many people use Jest outside of React applications. So, there is a tendency to compare the two.

That said, instead of comparing the two, this tutorial will show to  how to use Jest and Enzyme together to test React applications.

## Tutorial:

1. Create react app.


   ```npx create-react-app test-driven-development```

2. Clean up react app by deleting css files and service worker and making necessary changes in code after that.
   

3. Install required packages. **Do not install jest as its compatible version is installed with create-react-app already.**


   ```npm i enzyme enzyme enzyme-adapter-react-16 jest-enzyme```

4. Create setupTests.js in src folder.
   

5. 