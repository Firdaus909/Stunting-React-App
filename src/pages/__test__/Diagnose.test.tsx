import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import Diagnose from '../Diagnose';

test('Title of the page show successfully', () => {
  render(<Diagnose />);
  const title = screen.getByText(/cek stunting/i);
  expect(title).toBeInTheDocument();
});
