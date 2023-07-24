import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  task_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
