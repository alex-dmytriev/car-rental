import Container from '../../components/Container/Container';
import css from './CarDetails.module.css';
import { Field, Formik, Form } from 'formik';

const CarDetails = () => {
  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };
  const handleSubmit = () => {};

  return (
    <div>
      <Container>
        <div className={css.carDetailsContainer}>
          <div className={css.imgFormColumn}>
            <div className={css.imageBox}>Main Image block</div>
            <div className={css.formBox}>
              <div className={css.formTitleBox}>
                <h3 className={css.formTitle}>Book your car now</h3>
                <p className={css.formSubText}>Stay connected! We are always ready to help you.</p>
              </div>
              <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form className={css.form}>
                  <Field
                    className={css.formInput}
                    type="text"
                    name="name"
                    placeholder="Name*"
                  ></Field>
                  <Field
                    className={css.formInput}
                    type="text"
                    name="email"
                    placeholder="Email*"
                  ></Field>
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
          </div>
          <div className={css.detailsColumn}>
            <div className={css.carTitleBox}>
              <div className={css.carTitle}>Buick Enclave, 2008</div>
              <div className={css.carId}>Id: 9582</div>
            </div>
            <div className={css.shortDetailsBox}>
              <div className={css.addressBox}>
                <svg className={css.iconLocation} width="16" height="16">
                  <use href="#icon-location" />
                </svg>
                <div className={css.address}>Kyiv, Ukraine</div>
                <div className={css.mileage}>Mileage: 5858 km</div>
              </div>
              <div className={css.price}>$40</div>
            </div>
            <div className={css.description}>
              The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and
              luxurious features.
            </div>
            <div className={css.listBox}>
              <h3 className={css.listTitle}>Rental Conditions:</h3>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <svg className={css.iconCheck} width="16" height="16">
                    <use href="#icon-check-circle" />
                  </svg>
                  <p>Minimum age: 25</p>
                </li>
                <li className={css.listItem}>
                  <svg width="16" height="16">
                    <use href="#icon-check-circle" />
                  </svg>
                  <p>Security deposit required</p>
                </li>
                <li className={css.listItem}>
                  <svg width="16" height="16">
                    <use href="#icon-check-circle" />
                  </svg>
                  <p>Valid driver’s license</p>
                </li>
              </ul>
            </div>
            <div className={css.listBox}>
              <h3 className={css.listTitle}>Car Specifications:</h3>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <svg width="16" height="16">
                    <use href="#icon-calendar" />
                  </svg>
                  <p>Minimum age: 25</p>
                </li>
                <li className={css.listItem}>
                  <svg width="16" height="16">
                    <use href="#icon-car" />
                  </svg>
                  <p>Security deposit required</p>
                </li>
                <li className={css.listItem}>
                  <svg width="16" height="16">
                    <use href="#icon-fuel-pump" />
                  </svg>
                  <p>Valid driver’s license</p>
                </li>
                <li className={css.listItem}>
                  <svg width="16" height="16">
                    <use href="#icon-gear" />
                  </svg>
                  <p>Engine Size: 3.6L V6</p>
                </li>
              </ul>
            </div>
            <div className={css.listBox}>
              <h3 className={css.listTitle}>Accessories and functionalities:</h3>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <svg className={css.iconCheck} width="16" height="16">
                    <use href="#icon-check-circle" />
                  </svg>
                  <p>Leather seats</p>
                </li>
                <li className={css.listItem}>
                  <svg width="16" height="16">
                    <use href="#icon-check-circle" />
                  </svg>
                  <p>Panoramic sunroof</p>
                </li>
                <li className={css.listItem}>
                  <svg width="16" height="16">
                    <use href="#icon-check-circle" />
                  </svg>
                  <p>Remote start</p>
                </li>
                <li className={css.listItem}>
                  <svg width="16" height="16">
                    <use href="#icon-check-circle" />
                  </svg>
                  <p>Blind-spot monitoring</p>
                </li>
                <li className={css.listItem}>
                  <svg width="16" height="16">
                    <use href="#icon-check-circle" />
                  </svg>
                  <p>Power liftgate</p>
                </li>
                <li className={css.listItem}>
                  <svg width="16" height="16">
                    <use href="#icon-check-circle" />
                  </svg>
                  <p>Premium audio system</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CarDetails;
