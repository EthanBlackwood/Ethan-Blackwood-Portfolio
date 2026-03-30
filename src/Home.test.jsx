import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

//verify scroll behavior on navigate to home with and without hash
describe('Home Component Lifecycle', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it('scrolls to top on mount if no hash is present in the URL', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    );
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('scrolls to correct element if hash is present in the URL', () => {
    const mockElement = { scrollIntoView: vi.fn() };
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    render(
      <MemoryRouter initialEntries={['/#experience']}>
        <Home />
      </MemoryRouter>
    );

    expect(document.getElementById).toHaveBeenCalledWith('experience');
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
