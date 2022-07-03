import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import LandingPage from '../LandingPage';

test('App name show successfully', () => {
  render(<LandingPage />);
  const appName = screen.getByText(/mystuntingapp/i);
  expect(appName).toBeInTheDocument();
});
