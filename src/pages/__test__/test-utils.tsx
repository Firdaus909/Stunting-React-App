import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';

function AllProviders({ children }: { children?: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </ChakraProvider>
  );
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
