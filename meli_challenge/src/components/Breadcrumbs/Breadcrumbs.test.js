import { render, screen } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';

test('Renderiza Breadcrumbs', () => {
  render(<Breadcrumbs />);
  const breadcrumbsElement = screen.getByTestId("custom-breadcrumbs");
  expect(breadcrumbsElement).toBeInTheDocument();
});