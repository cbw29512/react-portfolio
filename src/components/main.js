import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => {
  try {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Switch>
    );
  } catch (error) {
    console.error('Route content failed to render:', error);
    return <p className="content-error">Page content is temporarily unavailable.</p>;
  }
};

export default Main;
