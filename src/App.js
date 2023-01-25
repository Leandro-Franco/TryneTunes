import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import album from './pages/album';
import favorites from './pages/favorites';
import login from './pages/login';
import profile from './pages/profile';
import search from './pages/search';
import profileEdit from './pages/profileEdit';
import pageNotFound from './pages/pageNotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={ login } />
          <Route exact path="/search" component={ search } />
          <Route exact path="/album/:id" component={ album } />
          <Route exact path="/favorites" component={ favorites } />
          <Route exact path="/profile" component={ profile } />
          <Route exact path="/profile/edit" component={ profileEdit } />
          <Route path="*" component={ pageNotFound } />
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
