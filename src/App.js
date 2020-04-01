import React from 'react';
import ConcertsPage from './containers/ConcertsPage';
import NavigationItems from './components/Navigation/NavigationItems';
import './style.scss';

function App() {
  return (
    <div className="container">
      <NavigationItems />
      <ConcertsPage />
    </div>
  );
}

export default App;
