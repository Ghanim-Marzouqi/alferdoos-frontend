import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import RightToLeftTheme from './themes/RightToLeft.theme';
import AdminLayout from './layouts/Admin';

const App: React.FC = () => {
  return (
    <RightToLeftTheme>
      <BrowserRouter>
        <Switch>
          <Route path="/admin">
            <AdminLayout />
          </Route>
          <Redirect from="/" to="/admin" />
        </Switch>
      </BrowserRouter>
    </RightToLeftTheme>
  );
}

export default App;
