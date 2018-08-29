import React from 'react';
import styled from 'styled-components';

import Form from '../UI/Forms/Form';
import FormInput from '../UI/Forms/FormInput';
import FormTextarea from '../UI/Forms/FormTextarea';
import ButtonDefault from '../UI/Buttons/ButtonDefault';

import {
  spaceDouble,
  spaceStackDouble
} from '../../theme/settings';

const ContactForm = () => (
  <Form name="contact">
    <StyledFormLayout>
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
      <StyledMessageTextarea
        label="Message"
        name="message"
        placeholder="Give us the deets"
      />
    </StyledFormLayout>
    <ButtonDefault type="submit">
      Send it
    </ButtonDefault>
  </Form>
);

const StyledFormLayout = styled(Form)`
  display: grid;
  grid-gap: ${spaceDouble};

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 25.6rem);
  }
`;

const StyledMessageTextarea = styled(FormTextarea)`
  @media (min-width: 700px) {
    grid-column: span 2;
  }
`;

export default ContactForm;