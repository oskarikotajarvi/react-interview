import React from 'react';
import ReactDOM from 'react-dom';
import {
  render,
  cleanup,
  fireEvent,
  getByTestId
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Bar from '../Bar';

afterEach(cleanup);

describe('Bar tests...', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Bar
        onSubmit={() => {
          return;
        }}
      />,
      div
    );
  });

  it('Renders the form correctly', () => {
    const { container } = render(
      <Bar
        onSubmit={() => {
          return;
        }}
      />
    );
    const input = getByTestId(container, 'bar-input');
    const label = getByTestId(container, 'bar-label');
    const submit = getByTestId(container, 'bar-submit');
    expect(input).toHaveTextContent('');
    expect(label).toHaveTextContent('Add new todo');
    expect(submit).toHaveTextContent('Submit');
    expect(input.value).toBe('');
  });

  it('Inputting a value to the input field changes input value', () => {
    const { container } = render(
      <Bar
        onSubmit={() => {
          return;
        }}
      />
    );
    const input = getByTestId(container, 'bar-input');
    const newTodoValue = 'Get the laundry';

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: newTodoValue } });
    expect(input.value).toBe(newTodoValue);
  });

  it('Submit button fires', () => {
    const { container } = render(
      <Bar
        onSubmit={() => {
          return;
        }}
      />
    );
    const input = getByTestId(container, 'bar-input');
    const submit = getByTestId(container, 'bar-submit');

    fireEvent.change(input, { target: { value: 'new Todo' } });
    expect(input.value).toBe('new Todo');
    fireEvent.click(submit);
    expect(input.value).toBe('');
  });

  it('Matches snapshot', () => {
    const tree = renderer
      .create(
        <Bar
          onSubmit={() => {
            return;
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
