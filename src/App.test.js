import { render, screen } from '@testing-library/react';
import App from './App';

test('Test if Atomize works', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reconnecttttt/i);
  expect(linkElement).toBeInTheDocument();
});
