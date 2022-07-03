import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import Nutrition from '../Nutrition';

test('Search button show successfully', () => {
  render(<Nutrition />);
  const searchBtn = screen.getByRole('button');
  expect(searchBtn).toBeInTheDocument();
});
