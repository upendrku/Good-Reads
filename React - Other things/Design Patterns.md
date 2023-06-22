# Here are some of the design patterns used in React, with examples, explanations, and code:

- **Component Composition:** Component composition is a pattern where smaller, reusable components are combined together to build more complex UIs. It promotes modularity and reusability by breaking down the UI into smaller, self-contained pieces.

```jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>
}

function Card({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

function CardWithButton({ title, content, buttonLabel, onButtonClick }) {
  return (
    <Card title={title} content={content}>
      <Button label={buttonLabel} onClick={onButtonClick} />
    </Card>
  )
}
```

- **Presentational and Container (Dumb and Smart) Components:** This pattern separates the presentational aspects of a component from its container aspects. The presentational component is responsible for rendering the UI, while the container component is responsible for managing the state and fetching data.

```jsx
// Presentational component
const Button = ({ onClick }) => <button onClick={onClick}>Click me</button>

// Container component
const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button onClick={() => setCount(count + 1)} />
      <p>The count is: {count}</p>
    </div>
  )
}
```

- **Higher-Order Components (HOCs):** This pattern allows you to reuse code and functionality across multiple components. A HOC is a function that takes a component as an input and returns a new component with the HOC's functionality added to it.

```jsx
const withCounter = (Component) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0,
      }
    }

    handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      })
    }

    render() {
      return (
        <Component
          {...this.props}
          count={this.state.count}
          onClick={this.handleClick}
        />
      )
    }
  }

  return WithCounter
}

const Button = withCounter(Button)
```

- **Render Props:** This pattern allows you to pass a function to a component as a prop, and the component will then render the output of the function. This can be used to pass dynamic content to a component, or to customize the rendering of a component.

```jsx
const TextInput = ({ label, value, onChange }) => (
  <input type="text" placeholder={label} value={value} onChange={onChange} />
)

const CustomTextInput = ({ label, value, onChange }) => {
  const renderInput = () => {
    return <TextInput label={label} value={value} onChange={onChange} />
  }

  return renderInput()
}
```

- **Hooks:** Hooks are a new feature in React 16.8 that allow you to use state and other React features without writing a class component. Hooks are a powerful way to write more concise and reusable code.

```jsx
const useCounter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return { count, incrementCount }
}

const App = () => {
  const { count, incrementCount } = useCounter()

  return (
    <div>
      The count is: {count}
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}
```
