import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Renderiza Header', async () => {
  render(<Header />);
  const headerElement = screen.getByTestId("custom-header");
  expect(headerElement).toBeInTheDocument();
});

test('Renderiza Searchbox dentro de Header', async () => {
    render(<Header />);
    const inputNode = screen.getByPlaceholderText('Nunca dejes de buscar');
    expect(inputNode).toBeInTheDocument();
  });