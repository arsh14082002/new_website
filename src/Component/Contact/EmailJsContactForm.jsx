import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validationSchema = Yup.object().shape({
  from_name: Yup.string().required('Name is required'),
  from_email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
  mobile_number: Yup.string()
    .matches(/^[+]?[0-9]{10,12}$/, 'Invalid mobile number')
    .required('Mobile number is required'),
  resume: Yup.mixed().required('Resume is required'),
});

const EmailJsContactForm = () => {
  const form = useRef();

  // console.log(import.meta.env.VITE_YOUR_SERVICE_ID);

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: 'sl4aiBZBEheugpR7r', // replace with your public key
        },
      )
      .then(
        () => {
          resetForm();
          return 1;
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="emailjs_form">
      <Formik
        initialValues={{
          from_name: '',
          from_email: '',
          message: '',
          mobile_number: '',
          resume: null, // added for file upload
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values, { resetForm });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form id="contact-form" ref={form} onSubmit={handleSubmit}>
            <div className="form_input">
              <label htmlFor="from_name">Name</label>
              <Field
                type="text"
                name="from_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.from_name}
                placeholder="Name"
              />
              <ErrorMessage
                name="from_name"
                component="div"
                style={{ color: 'red', fontSize: '12px' }}
              />
            </div>

            <div className="form_input">
              <label htmlFor="from_email">Email</label>
              <Field
                type="email"
                placeholder="Email"
                name="from_email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.from_email}
              />
              <ErrorMessage
                name="from_email"
                component="div"
                style={{ color: 'red', fontSize: '12px' }}
              />
            </div>

            <div className="form_input">
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                placeholder="Message"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <ErrorMessage
                name="message"
                component="div"
                style={{ color: 'red', fontSize: '12px' }}
              />
            </div>

            <div className="form_input">
              <label htmlFor="mobile_number">Mobile Number</label>
              <Field
                type="text"
                placeholder="Mobile Number"
                name="mobile_number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile_number}
                validate={(value) => !/^[+]?[0-9]{10,12}$/.test(value) && 'Invalid mobile number'}
              />
              <ErrorMessage
                name="mobile_number"
                component="div"
                style={{ color: 'red', fontSize: '12px' }}
              />
            </div>

            <div className="form_input">
              <button type="submit" disabled={isSubmitting}>
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default EmailJsContactForm;
