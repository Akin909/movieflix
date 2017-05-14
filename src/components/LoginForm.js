import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

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
        <Input
          name="firstname"
          placeholder="Firstname"
          type="text"
          onChange={this.handleChange}
          value={this.state.firstname}
          required
        />
        <Input
          name="lastname"
          placeholder="lastname"
          type="text"
          onChange={this.handleChange}
          value={this.state.lastname}
          required
        />
        <Input
          name="password"
          placeholder="Password"
          type="text"
          onChange={this.handleChange}
          value={this.state.password}
          required
        />
        <Submit type="submit" value="Submit">Submit</Submit>
      </FormContainer>
    );
  }
}

function mapStateToProps(state) {
  return {};
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
  connect(mapStateToProps, { loginUser })
)(LoginForm);
