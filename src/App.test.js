import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SACCO Staff Dashboard title', () => {
  render(<App />);
  const titleElement = screen.getByText(/SACCO Staff Dashboard/i); // Adjust to your app's title
  expect(titleElement).toBeInTheDocument();
});
