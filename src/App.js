import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Main from './components/main';
import './App.css';

const NAV_ITEMS = [
  { path: '/', label: 'Home', exact: true },
  { path: '/projects', label: 'Work' },
  { path: '/resume', label: 'Experience' },
  { path: '/contact', label: 'Contact' }
];

class App extends Component {
  constructor(props) {
    super(props);

    // State logic: mobile navigation is the only app-level UI state.
    this.state = { isMenuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    try {
      this.setState((currentState) => ({ isMenuOpen: !currentState.isMenuOpen }));
    } catch (error) {
      console.error('Navigation menu failed to toggle:', error);
    }
  }

  closeMenu() {
    try {
      this.setState({ isMenuOpen: false });
    } catch (error) {
      console.error('Navigation menu failed to close:', error);
    }
  }

  renderNavLinks() {
    try {
      return NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          exact={item.exact}
          to={item.path}
          activeClassName="is-active"
          onClick={this.closeMenu}
        >
          {item.label}
        </NavLink>
      ));
    } catch (error) {
      console.error('Navigation links failed to render:', error);
      return <Link to="/contact">Contact</Link>;
    }
  }

  render() {
    try {
      const menuClass = this.state.isMenuOpen ? 'site-nav is-open' : 'site-nav';

      return (
        <div className="site-shell">
          <a className="skip-link" href="#main-content">Skip to main content</a>

          <header className="site-header">
            <div className="header-inner">
              <Link className="brand" to="/" onClick={this.closeMenu} aria-label="Chris Wilson home">
                <span className="brand-mark" aria-hidden="true">CW</span>
                <span className="brand-copy">
                  <strong>Chris Wilson</strong>
                  <small>Technical solutions</small>
                </span>
              </Link>

              <button
                className="menu-button"
                type="button"
                aria-expanded={this.state.isMenuOpen}
                aria-controls="site-navigation"
                onClick={this.toggleMenu}
              >
                <span aria-hidden="true">{this.state.isMenuOpen ? 'Close' : 'Menu'}</span>
              </button>

              <nav id="site-navigation" className={menuClass} aria-label="Primary navigation">
                {this.renderNavLinks()}
                <a className="nav-cta" href="mailto:divclass01@gmail.com">Let&apos;s talk</a>
              </nav>
            </div>
          </header>

          <main id="main-content" tabIndex="-1">
            <Main />
          </main>

          <footer className="site-footer">
            <div>
              <strong>Chris Wilson</strong>
              <p>Enterprise technology, practical software, and clear solution communication.</p>
            </div>
            <div className="footer-links">
              <a href="https://github.com/cbw29512" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/divclass01/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:divclass01@gmail.com">Email</a>
            </div>
          </footer>
        </div>
      );
    } catch (error) {
      console.error('Application shell failed to render:', error);
      return <p className="content-error">The portfolio is temporarily unavailable.</p>;
    }
  }
}

export default App;
