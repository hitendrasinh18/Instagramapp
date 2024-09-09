import * as yup from "yup";

export const loginInitialvalue={
    username : '',
    password:'',
};

export const loginValidation =yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('password is required'),

});


export const signupInitialvalue={
    number : '',
    
};

export const signupvalidition = yup.object().shape({
    number: yup
    .string()
    .min (
        10,
        ({min}) => 
    `${'Mobile number must be'} ${min} ${'character'}`,
    )
    .required('Mobile Number is required')
    .matches(/^[789]\d{9}$/,'Mobile Number Should be start from 7,8,9'),
    


});