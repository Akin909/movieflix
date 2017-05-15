import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import uuid from 'uuid/v4';

import styled from 'styled-components';

import { loginUser } from './../actions/index';
import { Input, Button } from './../styles/components';

const FormContainer = styled.form`
  grid-area: form;
  justify-content: space-evenly;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  background-color:#848380;
`;

const Submit = styled(Button)`
  margin: 0.5rem
  width: 6rem;
  height: 2rem;
`;

class LoginForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
  };

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  handleSubmit = event => {
    event.preventDefault();
    const { firstname, lastname } = this.state;
    this.props.loginUser(firstname, lastname);
    this.props.addUser({ firstname, lastname });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <h1>Sign Up Here!</h1>
        {Object.keys(this.state).map(field => (
          <Input
            key={uuid()}
            name={field}
            placeholder={field}
            type="text"
            onChange={this.handleChange}
            value={this.state[field]}
            required
          />
        ))}
        <Submit type="submit" value="Submit">Submit</Submit>
      </FormContainer>
    );
  }
}

const addMutation = gql`
  mutation addUser($firstname: String!, $lastname: String!){
    createUser(firstname: $firstname, lastname: $lastname){
      id
      firstname
      lastname
    }
  }
`;
export default compose(
  graphql(addMutation, {
    props: ({ ownProps, mutate }) => ({
      addUser: ({ firstname, lastname }) =>
        mutate({
          variables: { firstname, lastname },
        }),
    }),
  }),
  connect(null, { loginUser })
)(LoginForm);
