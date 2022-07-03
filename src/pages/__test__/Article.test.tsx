import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import Article from '../Article';

test('First question of article show successfully', () => {
  render(<Article />);
  const firstQuestion = screen.getByText(/apa itu stunting/i);
  expect(firstQuestion).toBeInTheDocument();
});