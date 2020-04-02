import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ConcertsPage from './containers/ConcertsPage/ConcertsPage';
import Layout from './components/Layout/Layout';
import HomePage from './containers/HomePage/HomePage'

const app = props => {
  let routes = (
    <Switch>
      <Route path="/visited-concerts" component={ConcertsPage} />
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
  return (
    <div className="layout">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

export default withRouter(app);
