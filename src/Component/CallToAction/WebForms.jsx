import { Formik, Field, Form } from 'formik';
import './Styles/CallToAction.scss';
import axios from 'axios';

const WebForms = () => {
  return (
    <section className="form_query" id="form_query">
      <div className="webform_head">
        <h2>Approach Us</h2>
        <h4>Contact for Best Quality Services and Pricing.</h4>
      </div>

      <div className="form_query_mote">
        <div className="form_query_m">
          <a
            href="mailto:thesiddiqui7@gmail.com?subject=Your%20Subject&body=Your%20Message%20Here"
            target="_blank"
            className="form_query_m_send"
          >
            <box-icon type="logo" name="gmail" size="100px" color="#fff"></box-icon>
            <span>Gmail</span>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=919999629495&text=Hello SecureYourself Team, I am looking Website. Please share me details."
            target="_blank"
            className="form_query_m_send"
          >
            <box-icon type="logo" name="whatsapp" size="100px" color="#fff"></box-icon>
            <span>WhatsApp</span>
          </a>
        </div>

        <Formik
          initialValues={{
            name: '',
            mobile: '',
            email: '',
          }}
          onSubmit={async (values, { setSubmitting }) => {
            const url =
              'https://script.google.com/macros/s/AKfycbyJrk9Nb3i1PxCTbI6hdhr2gk68xJMPthAwg00sZBLIs50QdFVCpRwf_IcluprNbHMQ/exec';

            try {
              const response = await axios.post(url, values);
              console.log(response.data);
              alert('Successfully submitted!');
            } catch (error) {
              console.error('Error submitting form:', error);
              alert('Error submitting form. Please try again later.');
            }

            setSubmitting(false);
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
