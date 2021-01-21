import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Setup from './Setup';
import LoggerService from '../../services/loggerService';

const SETUP_QUERY = gql`
  mutation setup($email: String!, $faCode: String!) {
    setup(email: $email, faCode: $faCode) {
      user
    }
  }
`;

const SetupContainer: React.FC = () => {
  const [show2fa, setShow2fa] = useState(false);

  const [setup, { data }] = useMutation(SETUP_QUERY);
  LoggerService.log({ data, setup });
  return <Setup onToggle={() => setShow2fa(!show2fa)} show2fa={show2fa} />;
};

export default SetupContainer;
