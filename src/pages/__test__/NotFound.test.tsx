import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import NotFound from '../NotFound';

test('Not found page show successfully', () => {
  render(<NotFound />);
  const notFound = screen.getByText(/Halaman Tidak Ditemukan/i);
  expect(notFound).toBeInTheDocument();
});
