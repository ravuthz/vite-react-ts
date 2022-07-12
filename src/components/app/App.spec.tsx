import { cleanup, render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import App from './App';

describe('<App />', () => {
  afterEach(cleanup);

  test('renders', () => {
    render(<App />);
    const page: HTMLElement = screen.getByTestId('App');
    expect(page).toBeDefined();
    expect(screen.getByText('Hello Vite + React!')).toBeDefined();
  });
});
