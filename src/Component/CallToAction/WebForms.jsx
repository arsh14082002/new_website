import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './Styles/CallToAction.scss';

const WebForms = () => {
  return (
    <section className="form_query" id="form_query">
      <div className="webform_head">
        <h2>Our Core Team</h2>
        <h4>What We Provide You?</h4>
      </div>

      <div className="form_query_mote">
        <div className="form_query_m">
          <div className="form_query_m_send">
            <box-icon type="logo" name="gmail" size="100px" color="#fff"></box-icon>
            <span>Gmail</span>
          </div>

          <div className="form_query_m_send">
            <box-icon type="logo" name="whatsapp" size="100px" color="#fff"></box-icon>
            <span>WhatsApp</span>
          </div>
        </div>

        <Formik
          initialValues={{
            name: '',
            mobile: '',
            email: '',
          }}
        >
          {() => (
            <Form>
              <div className="form_input">
                <label htmlFor="name">Name</label>
                <Field name="name" placeholder="John" />
              </div>

              <div className="form_input">
                <label htmlFor="mobile">Phone Number</label>
                <Field name="mobile" placeholder="Mobile Number" />
              </div>

              <div className="form_input">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" placeholder="xyz@gmail.com" />
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default WebForms;
