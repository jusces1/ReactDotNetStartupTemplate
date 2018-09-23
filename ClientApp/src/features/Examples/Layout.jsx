import React, { Component } from 'react';
import {Grid,Button} from 'semantic-ui-react'
import { connect } from "react-redux";

import NavMenu from "./NavMenu";
import { IntlProvider } from "react-intl";
import messages from "../../features/Examples/Languages/messages";
import { setLocale } from "../Examples/Languages/localeActions"

 class Layout extends Component {
  render() {
    const { lang } = this.props;

    return <IntlProvider locale={lang} messages={messages[lang]}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <NavMenu />
            </Grid.Column>
            <Grid.Column width={11}>{this.props.children}</Grid.Column>
            <Grid.Column width={2}>
              <Button onClick={() => this.props.setLocale('en')}>EN</Button>
              <Button onClick={() => this.props.setLocale('lt')}>LT</Button>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </IntlProvider>;
  }
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  }
}

export default connect(mapStateToProps, { setLocale })(Layout);