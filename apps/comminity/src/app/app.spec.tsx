import { cleanup, getByText, render, waitFor } from '@testing-library/react';
import React from 'react';
import App from './app';

describe('App', () => {
  afterEach(() => {
    // if (global['fetch'] != null){
    //   delete global['fetch'];
    // }
    
    cleanup();
  });

  it('should render successfully', async () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => ([{"title":"Todo 1"},{"title":"Todo 2"}]),
    });

    const { baseElement } = render(<App />);
    await waitFor(() => getByText(baseElement, 'Todo 1'));
  });
});
