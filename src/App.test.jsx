import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Application Smoke Test', () => {
  it('renders the core navigation without crashing', () => {
    render(<App />);
    const elements = screen.getAllByText(/Software Engineer/i);
    expect(elements[0]).toBeInTheDocument();
  });
});
