import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('You need to have a username for your account')
    .min(3, 'Username must be at least 3 characters in length'),
  firstName: yup
    .string()
    .trim()
    .required('You need to have a first name for your account')
    .min(3, 'First name must be at least 3 characters in length'),
  lastName: yup
    .string()
    .trim()
    .required('You need to have a last name for your account')
    .min(3, 'Last name must be at least 3 characters in length'),
  password: yup
    .string()
    .required('You must enter a password')
    .matches(passwordRegExp, 'Password must be eight characters, have at least one uppercase letter and one lowercase letter, one number, and one special character'),
  // passconfirm: yup
  //   .string()
  //   .required('You must confirm your password')
  //   .test('passwords-match',
  //     'passwords do not match',
  //     function(value) {
  //       return this.parent.password === value;
  //     }
  //   ), 
    //  .oneOf([yup.ref('password'), null], 'Passwords must match'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Please enter a valid phone number'),
  tos: yup
    .boolean()
    .oneOf([true], 'You must accept the Terms of Service')
});

export default formSchema;