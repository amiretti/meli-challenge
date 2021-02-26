import { render, screen } from '@testing-library/react';
import Errors from './Errors';

test('Renderiza Errors', () => {
  render(<Errors />);
  const errorElement = screen.getByTestId("custom-errors");
  expect(errorElement).toBeInTheDocument();
});