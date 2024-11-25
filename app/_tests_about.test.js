/// app/_tests_about.test.js
// UNIT - component behaves as expected given specific inputs (e.g. props)

import { render, screen } from '@testing-library/react';
import AboutPage from 'app/about/page';                  // NOTE: match Path of what is being tested

test('render About page with correct headings and links', () => {
    const { debug } = render(<AboutPage />)
    debug()                                             // debugs <AboutPage /> in DOM

    const h1TextPresent = screen.getByRole('heading', { level: 1 })
    expect(h1TextPresent).toBeInTheDocument()
    expect(h1TextPresent).toHaveTextContent(/.+/);      // text !empty

    const h3TextPresent = screen.getByRole('heading', { level: 3 })
    expect(h3TextPresent).toBeInTheDocument()
    expect(h3TextPresent).toHaveTextContent(/.+/);      // text !empty

})