import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './CarSubmitForm.module.css';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

const STORAGE_KEY = 'carFormData';

interface FormValues {
  name: string;
  email: string;
  date: string;
  comment: string;
}

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  date: Yup.string().required('Booking date is required'),
  comment: Yup.string().max(300, 'Comment should be 300 characters or less'),
});

const CarSubmitForm = () => {
  const [initialValues, setInitialValues] = useState<FormValues>({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setInitialValues(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    console.log('Submitted:', values);

    localStorage.removeItem(STORAGE_KEY);
    toast.success(
      `Thank you ${values.name}, your booking is successful! Booking date: ${values.date}`
    );
    resetForm();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    values: FormValues,
    setValues: (values: FormValues) => void
  ) => {
    const { name, value } = e.target;
    const updated = { ...values, [name]: value };
    setValues(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <div className={css.formBox}>
      <div className={css.formTitleBox}>
        <h3 className={css.formTitle}>Book your car now</h3>
        <p className={css.formSubText}>Stay connected! We are always ready to help you.</p>
      </div>

      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, setValues }) => (
          <Form className={css.form}>
            {/* Name */}
            <div className={css.inputWrapper}>
              <Field
                className={css.formInput}
                type="text"
                name="name"
                placeholder="Name*"
                value={values.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, values, setValues)
                }
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            {/* Email */}
            <div className={css.inputWrapper}>
              <Field
                className={css.formInput}
                type="text"
                name="email"
                placeholder="Email*"
                value={values.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, values, setValues)
                }
              />
              <ErrorMessage name="email" component="div" className={css.error} />
            </div>

            {/* Date Picker */}
            <div className={css.inputWrapper}>
              <Field name="date">
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ({ field, form }: any) => (
                    <DatePicker
                      className={css.formInput}
                      selected={field.value ? new Date(field.value) : null}
                      onChange={(val: Date | null) => {
                        const formatted = val ? format(val, 'yyyy-MM-dd') : '';
                        form.setFieldValue('date', formatted);
                        const updated = { ...values, date: formatted };
                        setValues(updated);
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
                      }}
                      dateFormat="yyyy-MM-dd"
                      placeholderText="Booking date"
                      minDate={new Date()}
                    />
                  )
                }
              </Field>
              <ErrorMessage name="date" component="div" className={css.error} />
            </div>

            {/* Comment */}
            <div className={css.inputWrapper}>
              <Field
                className={`${css.formInput} ${css.formTextArea}`}
                as="textarea"
                name="comment"
                placeholder="Comment"
                rows={4}
                value={values.comment}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handleChange(e, values, setValues)
                }
              />
              <ErrorMessage name="comment" component="div" className={css.error} />
            </div>

            {/* Submit Button */}
            <button className={css.sendBtn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CarSubmitForm;
