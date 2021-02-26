import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderiza App', async () => {
  render(<App />);
  const inputNode = screen.getByPlaceholderText('Nunca dejes de buscar');
  expect(inputNode).toBeInTheDocument();
});