/// __tests__/_tests_requestForm.test.js
// UNIT - component behaves as expected given specific inputs (e.g. props)

import { render, screen, fireEvent } from '@testing-library/react';
import RequestForm from 'app/components/forms/RequestForm';                  // NOTE: match Path of what is being tested

// Reusable utility for testing field errors
function validateInputField(fieldName, invalidValue, expectedError) {
    const field = screen.getByLabelText(new RegExp(fieldName, 'i')); // Case-insensitive match
    fireEvent.change(field, { target: { value: invalidValue } }); // Simulate invalid input
    fireEvent.submit(screen.getByRole('button', { name: /submit/i })); // Trigger form submission
    expect(screen.getByText(expectedError)).toBeInTheDocument(); // Assert error is shown
}

// Test suite for RequestForm
describe('RequestForm validation tests', () => {
    // Render the component before each test
    beforeEach(() => {
        render(<RequestForm handleFormOnSubmit={jest.fn()} />);
    });

    // Parameterized tests for validating multiple fields
    const fields = [
        { name: 'last name', invalidValue: '', error: /last name is required/i },
        { name: 'first name', invalidValue: '', error: /first name is required/i },
        { name: 'social security', invalidValue: 'abcd', error: /field must be exactly 4 digits/i },
    ];

    it.each(fields)(
        'displays error for invalid input in "%s"',
        ({ name, invalidValue, error }) => {
            validateInputField(name, invalidValue, error);
        }
    );

    // Generic validation for error messages
    test('displays all error messages for empty submission', () => {
        fireEvent.submit(screen.getByRole('button', { name: /submit/i })); // Submit without filling fields
        const errors = screen.getAllByRole('alert'); // Collect all error messages
        expect(errors).toHaveLength(3); // Expect 3 errors
        errors.forEach((error) => {
            expect(error).toHaveTextContent(/.+/); // Non-empty text content
        });
    });

    // Snapshot testing for form state after submission
    test('matches snapshot with errors', () => {
        const { container } = render(<RequestForm handleFormOnSubmit={jest.fn()} />);
        fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
        expect(container).toMatchSnapshot(); // Snapshot includes form with error states
    });
});
