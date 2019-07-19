/*
 * HomePage
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Component } from 'react';
import logo from '../../images/logo.jpg';


const App = () => (
  <Grid.Provider
    padding="20px"
    breakpoints={{ sm: "-500", md: "501-750", lg: "+750" }}
  >
    <Grid.Bounds direction="vertical">
      <Grid.Box sm={{ hidden: true }}>
        This header hides on small screens
      </Grid.Box>
      <Grid.Box>Content</Grid.Box>
      <Grid.Box lg={{ padding: "50px" }}>
        This footer gains extra padding on large screens
      </Grid.Box>
    </Grid.Bounds>
  </Grid.Provider>
);



export class Header extends Component {
  render () {
    return (
        <div className="logo">
          <img src={logo} width="500" height="800" />
        </div>
    );
  }
}

export class Sidebar extends Component {
  render () {
    return (
      <div className="row">

      </div>
    )
  }
}

export default function HomePage() {
  const content=[
      {
          icon: 'icon-class-name',
          label: 'Label of Item',
          to: '#a-link',
      },
      {
          icon: 'icon-class-name',
          label: 'Second Item',
          content: [
              {
                  icon: 'icon-class-name',
                  label: 'Sub Menu of Second Item',
                  to: '#another-link',
              },
          ],
      },
  ];

  return (
    <h1>
      <Header/>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}

//ReactDOM.render(<MetisMenu />, document.getElementById('dom_id'));

