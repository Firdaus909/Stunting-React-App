import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import Nutrition from '../Nutrition';
import userEvent from '@testing-library/user-event';

test('Search button show successfully', () => {
  render(<Nutrition />);
  const searchBtn = screen.getByRole('button');
  expect(searchBtn).toBeInTheDocument();
});

test('Search input work successfully', async () => {
  render(<Nutrition />);
  const searchInput = screen.getByRole('textbox');

  await userEvent.type(searchInput, 'Rice Bowl', { delay: 1 });
  expect(searchInput).toHaveValue('Rice Bowl');
});
