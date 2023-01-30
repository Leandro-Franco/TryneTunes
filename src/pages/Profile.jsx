import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';

export default class Profile extends Component {
  state = {
    user: [],
    loadingCheck: false,
  };

  async componentDidMount() {
    this.setState({ loadingCheck: true });
    const getActualUser = await getUser();
    this.setState({ loadingCheck: false, user: getActualUser });
  }

  render() {
    const { user, loadingCheck } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {loadingCheck && <Loading />}
        <form>
          <img src={ `${user.image}` } alt="" data-testid="profile-image" />
          <h2>{user.name}</h2>
          <h2>{ user.email }</h2>
          <describe>{user.description}</describe>
          <Link to="/profile/edit">Editar perfil</Link>
        </form>
      </div>
    );
  }
}
