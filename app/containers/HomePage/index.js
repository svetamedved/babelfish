/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Component } from 'react';
import logo from '../../images/logo.jpg';

export class Header extends Component {
  render () {
    return (
      <div className="row">
        <div className="logo">
          <img src={logo} width="100" height="50" />
        </div>
      </div>
    );
  }
}

export default function HomePage() {
  return (
    <h1>
      <Header/>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}


