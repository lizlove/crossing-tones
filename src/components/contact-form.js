import React from 'react';
import { useFormik, FormikProvider, Form, useField } from 'formik';
import * as Yup from 'yup';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
      }`}
    >
      <div className="flex items-center space-between">
        <label htmlFor={props.id}>{label}</label>{' '}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm"
          >
            {meta.error ? meta.error : '✓'}
          </div>
        ) : null}
      </div>
      <input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
};

const TextareaLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
      }`}
    >
      <div className="flex items-center space-between">
        <label htmlFor={props.id}>{label}</label>{' '}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm"
          >
            {meta.error ? meta.error : '✓'}
          </div>
        ) : null}
      </div>
      <textarea
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
};

const FormInner = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: async (values) => {
      // TODO: where is the submit email?
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string()
        .email('Please provide a valid email.')
        .required('Required'),
      message: Yup.string()
        .max(999, 'Max length is 1000 characters.')
        .required('Required'),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <TextInputLiveFeedback
          label="Name"
          id="name"
          name="name"
          // helpText="Oh hello."
          type="text"
        />
        <TextInputLiveFeedback
          label="Email"
          id="email"
          name="email"
          // helpText="Valid email address is required."
          type="email"
        />
        <TextareaLiveFeedback
          label="Message"
          id="message"
          name="message"
          // helpText="Please include a message."
          type="textarea"
        />
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default class ContactForm extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="inner">
          <h1>Contact Us</h1>
          <div className="contact-form">
            <FormInner />
          </div>
        </div>
      </div>
    );
  }
}
