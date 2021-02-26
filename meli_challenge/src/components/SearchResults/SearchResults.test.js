import { render, screen } from '@testing-library/react';
import SearchResults from './SearchResults';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

test('Renderiza SearchResults', async () => {
  render(<SearchResults />);
  const searchResultsElement = await screen.findByTestId("search-result");
  expect(searchResultsElement).toBeInTheDocument();
});

test('Renderiza  Breadcrumbs dentro de Search Results', async () => {
    render(<Breadcrumbs />);
    const breadcrumbsElement = await screen.findByTestId("custom-breadcrumbs");
    expect(breadcrumbsElement).toBeInTheDocument();
  });