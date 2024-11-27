///.chingu_v52_project/v52-tier1-team-04/app/_tests_App.test.js
// UNIT - component behaves as expected given specific inputs (e.g. props)

import { render, screen } from '@testing-library/react';
import Page from './page';       // NOTE: match Path of what is being tested

test('renders headings with agnostic text content, from props', () => {
    const { debug } = render(<Page />);
    debug();                                    // debugs <Page /> in DOM

    const h1TextPresent = screen.getByRole('heading', { level: 1 })
    expect(h1TextPresent).toBeInTheDocument()
    expect(h1TextPresent).toHaveTextContent(/.+/); // text !empty

    const h3TextPresent = screen.getByRole('heading', { level: 3 })
    expect(h3TextPresent).toBeInTheDocument()
    expect(h3TextPresent).toHaveTextContent(/.+/); // text !empty

})