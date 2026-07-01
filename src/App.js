import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' }
];

class App extends Component {
  renderNavItems() {
    try {
      return NAV_ITEMS.map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>);
    } catch (error) {
      console.error('Navigation failed to render:', error);
      return <Link to="/contact">Contact</Link>;
    }
  }

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link className="site-title" to="/">Chris Wilson</Link>} scroll>
            <Navigation>{this.renderNavItems()}</Navigation>
          </Header>

          <Drawer title={<Link className="drawer-title" to="/">Chris Wilson</Link>}>
            <Navigation>{this.renderNavItems()}</Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
