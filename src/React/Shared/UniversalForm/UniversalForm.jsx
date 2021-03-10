import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { isValidEmail } from '../../../common/utilities.js';
import API from '../../../common/API.js';

/* Components ---------------------------*/
import Button from './Button.jsx';
import FieldGroup from './FieldGroup/FieldGroup.jsx';

const UniversalForm = ({fields, apiURL, submitText}) => {

    const [theFields, theFieldsUpdate] = useState(fields);

    const handleFieldUpdate = (theUpdatedField) => {

        /* Validation ---------------------------*/
        const validation = theUpdatedField.validation;

        let errors = [];

        validation.forEach((val) => {
            switch (val) {
                case 'req':
                    if (theUpdatedField.value.length <1 ) {
                        errors.push(`The ${theUpdatedField.label} is required.`);
                    }
                    break;
                case 'email':
                    if (!isValidEmail(theUpdatedField.value)) {
                        errors.push(`The ${theUpdatedField.label} is not a valid email.`);
                    }
                    break;
                default:
                    return true;
            }
        });

        let validatedField = {
            ...theUpdatedField,
            errors: errors,
        }

        /* Update Fields ---------------------------*/
        const newFields = theFields.map((field) => {
            return (field.id === validatedField.id) ? validatedField : field;
        });

        /* Update State ---------------------------*/
        theFieldsUpdate(newFields);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // check have they passed validation
        const hasErrors = theFields.find(field => {
            return (field.errors && field.errors.length > 0);
        });

        if (!hasErrors) {
            console.log('Ready to Submit Data', theFields);

            API.post(apiURL, theFields).then((response) => {
                console.log('Success response', response);
            });
        }

    }

    return (
        <UniversalFormStyled 
            className='UniversalForm'
            onSubmit={ handleFormSubmit }
        >
            {
                theFields.map((theField, idx) => {
                    console.log('theFields', theFields);

                    return <FieldGroup 
                                key={ idx }
                                id={ theField.id } 
                                theFields={ theFields } 
                                handleFieldUpdate={ handleFieldUpdate } 
                            />
                })
            }
            <Button type='submit'>{ submitText }</Button>
        </UniversalFormStyled>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.form`
    max-width: 500px;
    padding: 10px;
    margin: 50px auto;
`;