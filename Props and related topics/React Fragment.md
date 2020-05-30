[TOC]

## React Fragment

Fragments let you group a list of children without adding extra nodes (usually we use div) to the DOM.

```react
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
      {/* OR <> */}
        <td>Hello</td>
        <td>World</td>
      {/* OR </> */}      
      </React.Fragment>
    );
  }
}
```

### Keyed Fragments

```react
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

`key` is the only attribute that can be passed to `Fragment`. In the future, we may add support for additional attributes, such as event handlers.

## Props in JSX

[You can find this helpful to get entire idea of Props](https://reactjs.org/docs/jsx-in-depth.html#props-in-jsx)

### defaultProps

In child component Card, defaultProps can be declared as follows:

```react
import React from "react"

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}

Card.defaultProps = {
    cardColor: "blue",
    height: 100,
    width: 100
}

export default Card
```

In class components,

Child component Greeting.js

```react
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}
```

```react
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};
```

Reference: defaultProps use this [react document ](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values) link.

## PropTypes

[Use this link.](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values)