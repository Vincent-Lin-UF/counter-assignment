// Import necessary React Testing Library helpers
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Counter component
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

test('renders counter message', () => {
  // Verify that the Counter message renders correctly
  const cntMessage = screen.getByText(/Counter/i);
  expect(cntMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Verify the initial counter value is 0
  const cntVal = screen.getByTestId('count'); // Matches `data-testid="count"`
  expect(cntVal).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Simulate clicking the "+" button and verify the count increments
  const incButton = screen.getByText('+'); // Matches button text " + "
  const cntVal = screen.getByTestId('count'); // Matches `data-testid="count"`

  fireEvent.click(incButton);
  expect(cntVal).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Simulate clicking the "-" button and verify the count decrements
  const decButton = screen.getByText('-'); // Matches button text " - "
  const cntVal = screen.getByTestId('count'); // Matches `data-testid="count"`

  fireEvent.click(decButton);
  expect(cntVal).toHaveTextContent('-1');
});
