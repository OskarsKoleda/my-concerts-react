import React from 'react';
import ConcertsPage from './containers/ConcertsPage';
import Layout from './components/Layout/Layout'
import './style.scss';

function App() {
  return (
    <div className="layout">
      <Layout>
        <ConcertsPage/>
      </Layout>
    </div>

  );
}

export default App;
