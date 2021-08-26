import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('You need to have a username for your account')
    .min(3, 'Username must be at least 3 characters in length'),
  password: yup
    .string()
    .required('You must enter a password')
    .min(15, 'Must be 15 characters'),
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