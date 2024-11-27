/// app/_tests_formRequest.test.js
// UNIT - component behaves as expected given specific inputs (e.g. props)

import { render, screen, fireEvent } from '@testing-library/react';
import RequestForm from 'app/components/forms/RequestForm';                  // NOTE: match Path of what is being tested
import { channel } from 'diagnostics_channel';

describe('RequestForm', () => {
    test('calls onSubmit with valid input', async () => {
        const { debug } = render(<RequestForm />)
        debug()                                             // debugs <FormRequest /> in DOM

        const handleSubmit = jest.fn();
        const { container } = render(
            <RequestForm handleFormOnSubmit={handleSubmit} />
        )
        //Select fields and input values
        const textField1 = container.querySelector('input[name="textField1"]');
        const textField2 = container.querySelector('input[name="textField2"]');
        const textField3 = container.querySelector('input[name="textField3"]');

        fireEvent.change(textField1, { target: { value: 'Smith' } })
        fireEvent.change(textField2, { target: { value: 'Will' } })
        fireEvent.change(textField3, { target: { value: '4566' } })

        //Submit the form
        fireEvent.submit(container.querySelector('form'))

        //Checks the handler is called with correct data
        expect(handleSubmit).toHaveBeenCalledWith(
            expect.objectContaining({
                textField1: "Smith",
                textField2: "Will",
                textField3: "4566"
            })
        )
    })
    test('displays error messages for invalid inputs', async () => {
        render(<RequestForm handleFormOnSubmit={jest.fn()} />);

        // Submit the form without filling inputs
        fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

        // Check for error messages
        expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/enter last four numbers of social security/i)).toBeInTheDocument();
    });

    test('displays error for invalid textField3 input (non-numeric)', async () => {
        const { container } = render(<RequestForm handleFormOnSubmit={jest.fn()} />);

        // Enter invalid input for textField3
        const textField3 = container.querySelector('input[name="textField3"]');
        fireEvent.change(textField3, { target: { value: 'abcd' } });

        // Submit the form
        fireEvent.submit(container.querySelector('form'));

        // Check specific error message
        expect(screen.getByText(/field must be exactly 4 digits/i)).toBeInTheDocument();
    });

    test('handles form submission errors gracefully', async () => {
        const mockSubmit = jest.fn(() => {
            throw new Error('Submission failed');
        });

        const { container } = render(<RequestForm handleFormOnSubmit={mockSubmit} />);

        // Fill the fields with valid data
        fireEvent.change(container.querySelector('input[name="textField1"]'), {
            target: { value: 'Smith' },
        });
        fireEvent.change(container.querySelector('input[name="textField2"]'), {
            target: { value: 'Will' },
        });
        fireEvent.change(container.querySelector('input[name="textField3"]'), {
            target: { value: '4566' },
        });

        // Attempt submission
        fireEvent.submit(container.querySelector('form'));

        // Check if the error message is shown (simulate UI behavior)
        expect(screen.getByText(/submission failed/i)).toBeInTheDocument();
    });

})
