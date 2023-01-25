import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  state = { loadingStatus: true, UserName: '' };

  componentDidMount() {
    this.renderName();
  }

  renderName = async () => {
    const user = await getUser();
    this.setState({ loadingStatus: false, UserName: user.name });
  };

  render() {
    const { loadingStatus, UserName } = this.state;
    if (loadingStatus) {
      return (
        <header>
          <Loading />
        </header>
      );
    }
    return (
      <header data-testid="header-component">
        <h3 data-testid="header-user-name">
          { UserName }
        </h3>
        <Link data-testid="link-to-search" to="/search">Search</Link>
        <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
        <Link data-testid="link-to-profile" to="/profile">Profile</Link>
      </header>
    );
  }
}
