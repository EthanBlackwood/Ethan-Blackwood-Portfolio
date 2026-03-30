import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
//verify scrolled to top on logo click

describe('Navigation Component', () => {
  it('scrolls to top when the logo is clicked', async () => {
    window.scrollTo = vi.fn();
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const logoLink = screen.getByRole('link', { name: /Ethan Blackwood/i });
    await user.click(logoLink);

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
