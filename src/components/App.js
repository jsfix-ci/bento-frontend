import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout/LayoutContainer';
import nihLoginSuccess from './Auth/components/nihLoginSuccess';
import { CustomThemeProvider } from './ThemeContext';
import { AuthProvider } from './Auth/AuthProvider';

// This is the place to check login ref to https://medium.com/@tomlarge/private-routes-with-react-router-dom-28e9f40c7146 for sample code

const App = () => (
  <CustomThemeProvider>
    <AuthProvider>
      {/* Reminder: Ajay need to replace the ICDC with env variable and
    change build npm to read env variable */}
      <BrowserRouter>
        <Switch>
          <Route path="/nihloginsuccess" component={nihLoginSuccess} />
          <Route path="/" component={Layout} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>

  </CustomThemeProvider>
);

export default App;
