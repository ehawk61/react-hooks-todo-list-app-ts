import React from 'react';
import { render } from '@testing-library/react';
import TodoListApp from './components/todoListApp'

test('renders todo text box in form', () =>{
  const { getByTestId } = render(<TodoListApp />)
  const todoTextBox = getByTestId(/todo-list/i)
  expect(todoTextBox).toBeInTheDocument();
})
