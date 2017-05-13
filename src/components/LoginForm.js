import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from './../styles/components';
import styled from 'styled-components';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const FormContainer = styled.form`
  grid-area: form;
  justify-content: center;
  align-content: center;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  background-color:#848380;
`;

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormContainer onSubmit={event => console.log('event', event)}>
        <Input placeholder="Firstname" type="text" />
        <Input placeholder="Surname" type="text" />
        <Input placeholder="Password" type="text" />
      </FormContainer>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const addMutation = gql`
  mutation addUser($firstname: String!, $surname: String!){
    createUser(firstname: $firstname, surname: $surname){
      id
      firstname
      surname
    }
  }
`;
export default compose(
  graphql(addMutation, {
    props: ({ ownProps, mutate }) => ({
      addUser: ({ firstname, surname }) =>
        mutate({
          variables: { firstname, surname },
        }),
    }),
  }),
  connect(mapStateToProps)
)(LoginForm);
