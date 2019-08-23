import React from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
      
    </div>
    <ul >
      <li >
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/settings">Settings</Link>
    </li>
    </ul>
    <p className="App-intro">
      This is the {title} page.
    </p>
    
  </div>
);

const Home = (props) => (
<Page title="Home"/>
);

const About = (props) => (
<Page title="About"/>
);

const Settings = (props) => (
<Page title="Settings"/>
);

class App extends React.Component {
render() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/settings" component={Settings}/>
    </Router>
  );
}
}

export default App;

