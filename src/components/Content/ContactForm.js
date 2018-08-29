import React from 'react';

import Form from '../UI/Forms/Form';
import FormInput from '../UI/Forms/FormInput';
import FormTextarea from '../UI/Forms/FormTextarea';

const ContactForm = () => (
  <Form name="contact">
    <FormInput
      label="First Name"
      name="firstName"
      placeholder="First Name"
    />
    <FormInput
      label="Last Name"
      name="lastName"
      placeholder="Last Name"
    />
    <FormInput
      label="Email"
      name="email"
      placeholder="email@example.com"
    />
    <FormTextarea
      label="Message"
      name="message"
      placeholder="Give us the deets"
    />
  </Form>
);

export default ContactForm;