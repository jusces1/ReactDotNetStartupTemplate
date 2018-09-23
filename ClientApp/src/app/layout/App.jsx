import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout  from '../../features/Examples/Layout';
import  FetchData  from '../../features/Examples/Table/FetchData';
import Counter  from '../../features/Examples/Counter/Counter';

export default class App extends Component {

  render() {
    return  <Layout>
              <Route exact path="/" component={Counter} />
              <Route path="/counter" component={Counter} />
              <Route path="/fetchdata/:startDateIndex?" component={FetchData} />
            </Layout>;
    }
}
