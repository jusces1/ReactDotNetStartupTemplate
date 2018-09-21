import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
import Counter  from './components/Counter';

export default class App extends Component {

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Counter} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
      </Layout>
    );
  }
}
