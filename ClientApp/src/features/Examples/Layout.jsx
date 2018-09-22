import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'
import NavMenu from "./NavMenu";

export class Layout extends Component {
  render() {
    return (
      <Grid >
        <Grid.Row>
          <Grid.Column width={3}>
            <NavMenu />
          </Grid.Column>
          <Grid.Column width={13}>
            {this.props.children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
