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
});

const EmailJsContactForm = () => {
  const form = useRef();

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm('service_miky8pv', 'template_rthqj2s', form.current, {
        publicKey: '8Mjgb3MSya5vMxKBM',
        from_name: values.from_name,
        from_email: values.from_email,
        message: values.message,
        mobile_number: values.mobile_number,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          resetForm(); // Reset the form after successful submission
          window.alert('Email sent successfully!'); // Display a popup box
        },
        (error) => {
          console.log('FAILED...', error.text);
          window.alert('Your form was not submitted. Please try again later.'); // Display a popup box for error
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
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values, { resetForm });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
                placeholder={values && values.mobile_number ? `+91 ${values.mobile_number}` : '+91'}
              />
              <ErrorMessage
                name="mobile_number"
                component="div"
                style={{ color: 'red', fontSize: '12px' }}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default EmailJsContactForm;
