/*
 * HomePage
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import MarkdownEditor from './markdown';
import Tree from './tree';
import messages from './messages';
import logo from '../../images/logo.jpg';
import 'react-sortable-tree/style.css';
import 'megadraft/dist/css/megadraft.css';

const Header = () => (
  <Row>
    <Col col xl="1" lg="2" md="3" sm="6">
      <img
        src={logo}
        alt={messages.defaultMessage}
        width="100%"
        height="100%"
      />
    </Col>
    <Col col xl="11" lg="2" md="3" sm="6">
      <FormattedMessage {...messages.header} />
    </Col>
  </Row>
);

export default function HomePage() {
  return (
    <Container fluid>
      <Row>
        <Col col xl="3" lg="2" md="3" sm="6">
          <Tree />
        </Col>
        <Col col xl="9" lg="2" md="3" sm="6">
          <Header />
          <Row>
            <MarkdownEditor />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
