import * as yup from 'yup';

const letersRegex =
  /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\u0400-\u04ff\s]*)$/gi;

yup.addMethod(yup.string, 'leters', function () {
  return this.matches(letersRegex, 'The name should have only leters');
});

export const schema = yup.object().shape({
  searchValue: yup
    .string()
    .min('3')
    .leters()
    .required('Please enter image or photo name!'),
});
