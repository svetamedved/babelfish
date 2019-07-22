/*
 * HomePage
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import MarkdownEditor from './markdown';
import Tree from './tree';
import 'react-sortable-tree/style.css';

export default function HomePage() {
  return (
    <Container fluid>
      <Row>
        <Col col xl="3" lg="2" md="3" sm="6">
          <Tree />
        </Col>
        <Col col xl="9" lg="2" md="3" sm="6">
          <Row>
            <MarkdownEditor />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
