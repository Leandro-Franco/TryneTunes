import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import album from './pages/Album';
import favorites from './pages/Favorites';
import login from './pages/Login';
import profile from './pages/Profile';
import search from './pages/Search';
import profileEdit from './pages/ProfileEdit';
import pageNotFound from './pages/PageNotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ login } />
          <Route exact path="/search" component={ search } />
          <Route exact path="/album/:id" component={ album } />
          <Route exact path="/favorites" component={ favorites } />
          <Route exact path="/profile" component={ profile } />
          <Route exact path="/profile/edit" component={ profileEdit } />
          <Route path="*" component={ pageNotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
