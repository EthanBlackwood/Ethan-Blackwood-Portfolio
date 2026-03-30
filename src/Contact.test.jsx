import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Contact from './Contact';

//test form api calls

globalThis.fetch = vi.fn();

describe('Contact Form Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('prevents multiple submissions and displays success state', async () => {
    const user = userEvent.setup();

    fetch.mockResolvedValueOnce({ ok: true });

    render(<Contact />);

    await user.type(screen.getByLabelText(/NAME/i), 'Test User');
    await user.type(screen.getByLabelText(/EMAIL/i), 'test@example.com');
    await user.type(screen.getByLabelText(/MESSAGE/i), 'Enterprise testing suite.');

    const submitButton = screen.getByRole('button', { name: /Submit/i });

    await user.click(submitButton);

    expect(submitButton).toHaveTextContent(/Submitting.../i);
    expect(submitButton).toBeDisabled();

    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('handles server errors properly', async () => {
    const user = userEvent.setup();

    vi.spyOn(window, 'alert').mockImplementation(() => {});

    fetch.mockResolvedValueOnce({ ok: false });

    render(<Contact />);
    await user.type(screen.getByLabelText(/NAME/i), 'Test User');
    await user.type(screen.getByLabelText(/EMAIL/i), 'test@test.com');
    await user.type(screen.getByLabelText(/MESSAGE/i), 'Fail test');
    await user.click(screen.getByRole('button', { name: /Submit/i }));

    expect(window.alert).toHaveBeenCalledWith('Oops! There was a problem submitting your form.');
  });

  it('handles network disconnect properly', async () => {
    const user = userEvent.setup();
    vi.spyOn(window, 'alert').mockImplementation(() => {});

    fetch.mockRejectedValueOnce(new Error('Network error'));

    render(<Contact />);
    await user.type(screen.getByLabelText(/NAME/i), 'Test User');
    await user.type(screen.getByLabelText(/EMAIL/i), 'test@test.com');
    await user.type(screen.getByLabelText(/MESSAGE/i), 'Fail test');
    await user.click(screen.getByRole('button', { name: /Submit/i }));

    expect(window.alert).toHaveBeenCalledWith('Oops! Network error. Please try again.');
  });
});
