import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {FormattedMessage} from 'react-intl'
import { actionCreators } from "./CounerAction";
import {Button} from 'semantic-ui-react'

const Counter = props => (
  <div>
    <h1>
      <FormattedMessage id="counter.title" defaultMessage="Skaičiuoklė" />
    </h1>

    <p>
      <FormattedMessage
        id="counter.paragraph"
        defaultMessage="React-redux componento pavizdys"
      />
    </p>

    <p>
      <FormattedMessage
        id="counter.currentCount"
        defaultMessage="Dabartinis numeris:"
      />
      <strong>{props.count}</strong>
    </p>

    <Button onClick={props.increment}>
      <FormattedMessage id="counter.incerement" defaultMessage="pridėti" />
    </Button>
    <Button onClick={props.decrement}>
      <FormattedMessage id="counter.decriment" defaultMessage="atimti" />
    </Button>
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
