import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "./CounerAction";
import {Button} from 'semantic-ui-react'

const Counter = props => (
  <div>
    <h1>Counter</h1>

    <p>This is a simple example of a React component.</p>

    <p>
      Current count: <strong>{props.count}</strong>
    </p>

    <Button onClick={props.increment}>Increment</Button>
    <Button onClick={props.decrement}>Deciriment</Button>
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
