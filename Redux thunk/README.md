1. Import the `useSelector` and `useDispatch` hooks from `react-redux`.
2. Create a function that uses the `useSelector` hook to get the state of the Redux store.
3. Create a function that uses the `useDispatch` hook to dispatch an action to the Redux store.
4. Call the `useSelector` and `useDispatch` hooks in the functional component.

Here is an example of how to use `useSelector` and `useDispatch` in React 18 with Redux:

```javascript
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleChange = (id, isCompleted) => {
    dispatch({ type: 'TODO_CHANGE', id, isCompleted })
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleChange(todo.id, !todo.isCompleted)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
```

In this example, the `TodoList` functional component uses the `useSelector` hook to get the `todos` state from the Redux store. The `useDispatch` hook is used to dispatch the `TODO_CHANGE` action to the Redux store.

The `useSelector` and `useDispatch` hooks are a more modern way to connect React components to Redux. They are more flexible and easier to use than the `connect` function.
