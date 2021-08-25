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
    .trim()
    .required('You must enter a password')
    .min(15, 'Password must be 15 or more characters'),
  passconfirm: yup
    .string()
    .trim()
    .required('You must confirm your password')
    .test('match',
      'passwords do not match',
      function(emailConfirmation) {
        return emailConfirmation === this.parent.password;
      }
    ),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Please enter a valid phone number')
});

export default formSchema;