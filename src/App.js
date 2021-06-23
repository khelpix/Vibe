import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import './vibe/scss/styles.scss';

const _BrowserRouter = () => {
  return(<BrowserRouter>
      <Switch>
        <Route component={DashboardLayout} />
      </Switch>
    </BrowserRouter>)
};

export default function App() {
  return _BrowserRouter;
}
