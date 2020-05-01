import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Pages from './pages';
import { Header } from './components';

const AppRouting = () => (
  <BrowserRouter>
    <Header />
    <Switch>
       <Route path={'/'} component={Pages.HomePage} exact />
       <Route path={'/portfolio'} component={Pages.PortfolioPage} exact />
       <Route path={'/portfolio/:id'} component={Pages.PortfolioDetailPage} />
       <Route path={'/contact'} component={Pages.ContactPage} />
       <Route component={Pages.NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouting;
