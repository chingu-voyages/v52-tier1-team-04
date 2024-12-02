/// app/adminDash/adminHome/page.tsx
// UNIT - component behaves as expected given specific inputs (e.g. props)

import { render, screen } from '@testing-library/react';
import Dashboard from 'app/dashboard/page';

test('renders Dashboard with headings and containers', () => {
    const { debug } = render(<Dashboard />);
    debug()

    const p1TextPresent = screen.getByRole('paragraph', { level: 1 })
    expect(p1TextPresent).toBeInTheDocument()
    expect(p1TextPresent).toHaveTextContent(/.+/);

    const p2TextPresent = screen.getByRole('paragraph', { level: 2 })
    expect(p2TextPresent).toBeInTheDocument()
    expect(p2TextPresent).toHaveTextContent(/.+/);
});