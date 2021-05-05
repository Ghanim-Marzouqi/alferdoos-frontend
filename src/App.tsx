import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import RightToLeftTheme from './themes/RightToLeft.theme';
import AdminLayout from './layouts/Admin';
import AuthLayout from './layouts/Auth';

const App: React.FC = () => {
  return (
    <RightToLeftTheme>
      <BrowserRouter>
        <Switch>
          <Route path="/auth">
            <AuthLayout />
          </Route>
          <Route path="/admin">
            <AdminLayout />
          </Route>
          <Redirect from="/" to="/auth" />
        </Switch>
      </BrowserRouter>
    </RightToLeftTheme>
  );
}

export default App;
