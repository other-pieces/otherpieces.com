import React from 'react';

import Form from '../UI/Forms/Form';
import FormInput from '../UI/Forms/FormInput';

const ContactForm = () => (
  <Form name="contact">
    <FormInput
      label="First Name"
      name="firstName"
      placeholder="First Name"
    />
  </Form>
);

export default ContactForm;