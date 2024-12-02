// app/components/forms/RequestForm.tsx

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


const genericSchema = yup.object({
    textField1: yup
        .string()
        .required("Last name")
        .test(
            "is-different-from-te1tField2",
            "Last and first names cannot be the same",
            function (value) {
                return value !== this.parent.textField2     //Compare against other text field
            }
        )
        .trim()
        .min(2, "Text field must be at least 2 characters")
        .max(50, "Text field must be less than 50 characters"),
    textField2: yup
        .string()
        .required("First name")
        .test(
            "is-different-from-textField1",
            "First name is required.",
            function (value) {
                return value !== this.parent.textField1
            }
        )
        .trim()
        .min(2, "Text field must be at least 2 characters")
        .max(50, "Text field must be less than 50 characters"),
    textField3: yup
        .string()
        .required("Enter last four numbers of social security")
        .matches(/^\d{4}$/, "Field must be exactly 4 digits")       //NOTE: \d is equivalent to [0-9]
        .test(
            "is-number",
            "Values must be numbers 0-9",
            (value) => typeof value === "number"

        )
})

const testData = {
    textField1: "Smith",
    textField2: "Will",         //Dynanic
    textField3: "4566",
}
const { handleSubmit, register, watch } = useForm({
    resolver: yupResolver(genericSchema),
});
const formContentState = watch()
console.log(formContentState)





// Documentation: https://github.com/jquense/yup?tab=readme-ov-file#typescript-integration

const residentSchema = yup.object({     //defines an object, any object, that will use the contents of the Yup program
    /* below, deconstruct the object, 
    (that is: show specific details of what the user needs to see)
    key:values, <- structure of every "deconstructed"/pulled-out detail (the properties people usually sees in forms)
    don't forget the  : or the , at the end
    
    name:value.a string, 
    last_4_ssn:value.a number, 
    birthday:value.a date, <- date
    address:value.a string, 
    address:value.a string, 
    phone:value.a number, 
    etc
    
    */


});



// Each field needs a name and type
// Common types: string(), number(), date()
// Add validation with chained methods: .required(), .email(), .min(), .max()
// Format: key:value
// Every key needs colon, vlaue field definition ends with a comma
// Error messages are optional but helpful for users
/*
Example validations:

birthday: yup.date()
    .required('Birthday is required')
    .max(new Date(), 'Birthday cannot be in the future'),

zipCode: yup.string()
    .matches(/^\d{5}$/, 'Must be exactly 5 digits')
    .required('ZIP code is required')
*/
