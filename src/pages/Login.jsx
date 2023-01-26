import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

export default class Login extends Component {
  state = {
    user: '',
    loadingStatus: false,
    redirectStatus: false,
  };

  confirmLogin = async () => {
    const { user } = this.state;
    console.log(user);
    this.setState({ loadingStatus: true });
    await createUser({ name: user });
    this.setState({
      redirectStatus: true,
    });
  };

  render() {
    const { user, loadingStatus, redirectStatus } = this.state;
    const lengthLogin = 3;
    if (loadingStatus) {
      return (
        <div>
          <Loading />
          {
            redirectStatus && <Redirect to="/search" />
          }
        </div>
      );
    }
    return (
      <div data-testid="page-login">
        <input
          type="text"
          data-testid="login-name-input"
          name="name"
          onChange={ ({ target }) => this.setState({ user: target.value }) }
        />
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ user.length < lengthLogin }
          onClick={ this.confirmLogin }
        >
          Entrar
        </button>
      </div>
    );
  }
}
