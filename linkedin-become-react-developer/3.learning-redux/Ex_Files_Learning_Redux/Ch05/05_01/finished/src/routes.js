import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router-dom';
import SkiDayCount from './components/containers/SkiDayCount';
import AddDayForm from './components/containers/AddDayForm';
import SkiDayList from './components/containers/SkiDayList';

const routes = (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={SkiDayCount} />
      <Route path="add-day" component={AddDayForm} />
      <Route path="list-days" component={SkiDayList}>
        <Route path=":filter" component={SkiDayList} />
      </Route>
      <Route path="*" component={Whoops404} />
    </Route>
  </Router>
);

export default routes;
