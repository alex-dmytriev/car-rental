import { Formik, Form, Field } from 'formik';
import css from './CarSubmitForm.module.css';

const CarSubmitForm = () => {
  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  const handleSubmit = () => {};

  return (
    <div className={css.formBox}>
      <div className={css.formTitleBox}>
        <h3 className={css.formTitle}>Book your car now</h3>
        <p className={css.formSubText}>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <Field className={css.formInput} type="text" name="name" placeholder="Name*"></Field>
          <Field className={css.formInput} type="text" name="email" placeholder="Email*"></Field>
          <Field
            className={css.formInput}
            type="text"
            name="date"
            placeholder="Booking date"
          ></Field>
          <Field
            className={`${css.formInput} ${css.formTextArea}`}
            as="textarea"
            name="comment"
            placeholder="Comment"
            rows="4"
          ></Field>
          <button className={css.sendBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CarSubmitForm;
