import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import Schedule from '../Schedule';

test('Schedule heading text show successfully', () => {
  render(<Schedule />);
  const headingTxt = screen.getByText(/jadwal imunisasi/i);
  expect(headingTxt).toBeInTheDocument();
});
