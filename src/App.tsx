import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from 'store';
import { Provider } from 'react-redux';
import CommonLayout from 'ui/Layout';
import routes from 'routes';

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CommonLayout>{routes}</CommonLayout>
    </ConnectedRouter>
  </Provider>
);

export default App;
