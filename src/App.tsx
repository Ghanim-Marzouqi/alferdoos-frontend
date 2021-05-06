import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import RightToLeftTheme from './themes/RightToLeft';
import AuthLayout from './layouts/Auth';
import AdminLayout from './layouts/Admin';
import TeacherLayout from './layouts/Teacher';
import ParentLayout from './layouts/Parent';

const App: React.FC = () => {
  return (
    <RightToLeftTheme>
      <HelmetProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/auth">
              <AuthLayout />
            </Route>
            <Route path="/admin">
              <AdminLayout />
            </Route>
            <Route path="/teacher">
              <TeacherLayout />
            </Route>
            <Route path="/parent">
              <ParentLayout />
            </Route>
            <Redirect from="/" to="/auth" />
          </Switch>
        </BrowserRouter>
      </HelmetProvider>
    </RightToLeftTheme>
  );
}

export default App;
