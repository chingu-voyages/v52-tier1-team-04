/// app/components/navbar.tsx
// INTEGRATION - interaction between NavBar and page components

import { render, screen } from '@testing-library/react';
import NavBar from 'app/components/common/navbar.tsx';

test('renders Admin Dashboard with headings and containers', () => {
    const { debug } = render(<NavBar />);
    debug()

    const p1TextPresent = screen.getByRole('paragraph', { level: 1 })
    expect(p1TextPresent).toBeInTheDocument()
    expect(p1TextPresent).toHaveTextContent(/.+/);

    const p2TextPresent = screen.getByRole('paragraph', { level: 2 })
    expect(p2TextPresent).toBeInTheDocument()
    expect(p2TextPresent).toHaveTextContent(/.+/);
});