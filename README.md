# React Recap

## Functional Components

### What are they?

Functional components are a way to create components in React. They are a function that returns JSX. They are also known as stateless components because they do not have state.

## useState

### What is it?

useState is a hook that allows us to use state in functional components. It returns an array with two values. The first value is the state variable and the second value is a function that allows us to update the state variable.

### How do we use it?

We use it by calling useState and passing in the initial value of the state variable. We then destructure the array that is returned into the state variable and the function that updates the state variable.

```javascript
const [stateVariable, setStateVariable] = useState(initialValue);
```

### Changing State

We change state by calling the function that updates the state variable and passing in the new value.

```javascript
setStateVariable(newValue);
```

## List and Keys

### What are they?

Lists are a way to display multiple items in React. Keys are a way to identify each item in the list. They are used by React to keep track of which items have changed, been added, or been removed.

### How do we use them?

We use them by mapping over an array of items and returning a component for each item. We then pass the item into the component as a prop. We also pass the key prop into the component and set it to the key of the item.

```javascript
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];
// Item component
const Item = ({ item }) => {
  return <div>{item.name}</div>;
};

// List component
const List = () => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
```

## Prop drilling

### What is it?

Prop drilling is when we pass props through multiple components to get to the component that needs the props.

### How do we use it?

We use it by passing props to a component and then passing those props to another component. We continue this until we get to the component that needs the props.

```javascript
const Component1 = ({ prop1 }) => {
  return <Component2 prop1={prop1} />;
};

const Component2 = ({ prop1 }) => {
  return <Component3 prop1={prop1} />;
};

const Component3 = ({ prop1 }) => {
  return <div>{prop1}</div>;
};
```

## JS Forms in React

### What are they?

JS Forms are a way to get input from the user. They are made up of inputs that the user can type into.

### How do we use them?

We use them by creating a form element and adding inputs to it. We then add an onChange event listener to each input and set the value of the input to a state variable. We also add an onSubmit event listener to the form and call a function that handles the submit.

```javascript
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
```

## useEffect

### What is it?

useEffect is a hook that allows us to run code when the component mounts, when the component updates, and when the component unmounts.

NOTE: useEffect only runs after the component has rendered. This means that the component will render twice on the first render.
And also useEffect runs after every render. This means that if we update the state variable in useEffect, it will cause an `infinite loop`. One way to fix this is to add a dependency array to useEffect. This will cause useEffect to only run when the state variable in the dependency array changes.

### How do we use it?

We use it by calling useEffect and passing in a function. We can also pass in a dependency array as a second argument.

```javascript
useEffect(() => {
  // Code to run
}, [dependency]);
```

## useRef

### What is it?

useRef is a hook that allows us to create a reference to a DOM element. We can then use this reference to access the DOM element.
It is a very special hook such that it does not cause the component to re-render when the value of the reference changes. And also the value of the reference persists between renders. This means that we can use it to store values that we want to persist between renders.

### How do we use it?

We use it by calling useRef and passing in the initial value of the reference. We then use the reference by passing it to the ref prop of a DOM element.

```javascript
const ref = useRef(initialValue);
<input ref={ref} />;
```

- One major usecase automatically focusing on an input when the component mounts.

```javascript
const ref = useRef(null);
useEffect(() => {
  ref.current.focus();
}, []);
<input ref={ref} />;
```
