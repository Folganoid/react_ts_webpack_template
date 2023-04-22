import React from 'react';
import App from './App';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

describe('render App', () => {
  test('App test test', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const homeTitle = screen.getByText(/Home page/);
    expect(homeTitle).toBeInTheDocument();
    expect(screen.queryByText('2')).not.toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();

    const btnUp = screen.getAllByRole('button')[0] as HTMLButtonElement;
    const btnDown = screen.getAllByRole('button')[1] as HTMLButtonElement;
    await waitFor(async () => fireEvent.click(btnUp));
    await waitFor(async () => fireEvent.click(btnUp));
    await waitFor(async () => fireEvent.click(btnUp));
    await waitFor(async () => fireEvent.click(btnDown));

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });
});
