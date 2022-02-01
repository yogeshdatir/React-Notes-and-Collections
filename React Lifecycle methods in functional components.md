# React Lifecycle methods in functional components

### Lifecycle of a react component: 

1. Initial Render or Mount
2. Update
3. Unmount

[**<u>Code Available here</u>**](https://codesandbox.io/s/simple-counter-for-lifecycle-demo-gzxfw?file=/src/components/PureComponentDemo/PureComponent.tsx)

## We will look into only those lifecycle methods which are used in most of the scenarios. Some of the methods are termed as rarely used in [React documentation](https://reactjs.org/docs/react-component.html#the-component-lifecycle) and advised to use them lightly.

1. Initial Render or Mount

   ```react
   // Merge of componentDidMount and componentDidUpdate
   useEffect(() => {
     console.log("This is mounted or updated.");
   });
   ```

   In this variant of useEffect, the message will be printed when the component is mounted and every time the component state or props is updated.
   
2. Update

   ```react
   // Equivalent of componentDidMount
     useEffect(() => {
       console.log("This is mounted only not updated.");
     }, []);
   ```

   In this variant, message will be printed only once in the component's life cycle and that is after component is mounted.

   ```react
   // Merge of componentDidMount and componentDidUpdate but only for given dependency
     useEffect(() => {
       console.log("This is mounted or count state updated.");
     }, [count]);
   ```

   In this variant, message will be printed when the component is mounted and every time the count state is changed.

   

3. Unmount

   ```react
   // Equivalent of componentWillUnmount
     useEffect(() => {
       return () => {
         console.log("This is unmounted.");
       };
     }, []);
   ```

   If we don't want any side effect to happen on component mounting or updating but only when component is being unmounted, then we can use this variant.

   

## Controlling re-renders: <u>Pure Components</u>

One of the ways to control the re-rendering of a component is using React.memo() method.

React.memo uses memoization. It **shallowly** compares the previous props with current props to determine if the props are changed. If they are changed, then the component is re-rendered. This is equivalent of **<u>Pure Component</u>** in react class components.
We can provide the custom comparator to the React.memo as well to customize the comparison.

PureComponent.tsx

```react
import React from "react";

const RegularComponent = (props: any) => {
  console.log("***Pure component is rendered***");
  return <p>Pure Component = {props.name.firstName}</p>;
};

const PureComponent = React.memo(RegularComponent);

export {PureComponent};
```

​	OR with comparator:

```react
import React from "react";

const PureComponent = React.memo(
  (props: any) => {
    console.log("***Pure component is rendered***");
    return <p>Pure Component = {props.name.firstName}</p>;
  },
  (prevProps, nextProps) => {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
    if (prevProps.name.firstName === nextProps.name.firstName) return true;
    return false;
  }
);

export { PureComponent };
```



RegularComponent.tsx


```react
import React from "react";

const RegularComponent = (props: any) => {
  console.log("***Regular component is rendered***");

  return <p>Regular Component = {props.name.firstName}</p>;
};

export default RegularComponent;
```



ParentComponent.tsx

```react
import React, { useState } from "react";
import {PureComponent} from "./PureComponent";
import RegularComponent from "./RegularComponent";

const ParentComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<{ firstName: string }>({
    firstName: "Yogesh"
  });

  console.log("*****Parent component is rendered*****");

  return (
    <>
      <p>Parent Component</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        count = {count}
      </button>
      <button
        onClick={() => {
          setName({ firstName: "YPD" });
        }}
      >
        change name
      </button>
      <RegularComponent name={name} />
      <PureComponent name={name} />
    </>
  );
};

export default ParentComponent;
```



References:

Simple scenario:
[React.memo](https://youtu.be/bZeBToIqaR4)

For more scenarios to control re-renders of a component, use following video:
[How to use memo in React to Optimize Renders](https://youtu.be/o-alRbk_zP0)

Also, before using memoization, read: 
[Before you use memo](https://dmitripavlutin.com/use-react-memo-wisely/)

[Some overview about react lifecycle methods](https://www.educba.com/react-lifecycle/)

