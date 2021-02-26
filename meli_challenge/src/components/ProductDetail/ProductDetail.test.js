import { render, screen } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

test('Renderiza ProductDetail', async () => {
  render(<ProductDetail />);
  const detailElement = screen.getByText(/vendidos/i);
  expect(detailElement).toBeInTheDocument();
});

test('Renderiza Breadcrumbs dentro del detalle de producto', async () => {
    render(<Breadcrumbs />);
    const breadcrumbsElement = screen.getByTestId("custom-breadcrumbs");
    expect(breadcrumbsElement).toBeInTheDocument();
  });