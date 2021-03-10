import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { loginFields } from '../../../common/formData.js';

/* Components ---------------------------*/
import UniversalForm from '../../Shared/UniversalForm/UniversalForm.jsx';

const LoginForm = () => {

    return (
        <LoginFormStyled className='LoginForm'>
            <UniversalForm 
                fields={ loginFields }
                apiURL='/user/login'
                submitText='Log In'
            /> 
        </LoginFormStyled>
    );
}

export default LoginForm;

const LoginFormStyled = styled.div`
    
`;