import React from 'react';
import { render } from 'react-dom';
// Necesario para "contener" los componentes para el HMR
import { AppContainer } from 'react-hot-loader';

import HolaMundo from './HolaMundo';

render(
  <AppContainer>
    <HolaMundo />
  </AppContainer>,

  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./HolaMundo', () => {
    render(HolaMundo)
  });
}
