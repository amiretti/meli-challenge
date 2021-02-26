import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import SearchBox from './SearchBox';

test('Renderiza SearchBox', async () => {
  render(<SearchBox />);
  const detailElement = screen.getByAltText(/botón de búsqueda/i);
  expect(detailElement).toBeInTheDocument();
});

test('Renderiza Searchbox 2', async () => {
    render(<SearchBox />);
    const inputNode = screen.getByPlaceholderText('Nunca dejes de buscar');
    expect(inputNode).toBeInTheDocument();
});

test('Funciona el formulario de búsqueda', async () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    const query = 'iphone';

    fireEvent.change(input, { target: { value: query}});
    fireEvent.click(button);

    global.window = { location: { pathname: null } };

    const urlParams = new URLSearchParams(global.window.location.search);
    const searchParam = urlParams.get('search');

    expect(searchParam).toEqual(query);
});