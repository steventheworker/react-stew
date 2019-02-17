import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import Posts from './components/posts';
import store from './store';

function Error() {return (<h3>Error 404 page does not exist</h3>);}
function pg2() {
    return (
        <h3>Page No. 2</h3>
    );
}
function Header() {
  return (
    <header className="App-header">
      <h1><a href="/">Untitled React App</a></h1>
      <p>
        <Link to="page-two">Visit page-two</Link><br />
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>
  );
}
function Footer() {
  return (<p>Copyright Untitled © 2018</p>);
}
class App extends Component {
  render() {
    return (
        <Provider store={store}><Router><div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route path="/page-two" component={pg2} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </div></Router></Provider>
    );
  }
}

export default App;
