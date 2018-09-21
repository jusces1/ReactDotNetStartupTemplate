import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'

export class Layout extends Component {
  render() {
    return (
      <Grid >
        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={13}>
            {this.props.children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
