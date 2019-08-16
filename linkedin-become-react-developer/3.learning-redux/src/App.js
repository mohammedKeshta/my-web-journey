import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Menu from './components/ui/Menu';
import ShowErrors from './components/containers/ShowErrors';
import GoalProgress from './components/containers/GoalProgress';
import SkiDayCount from './components/containers/SkiDayCount';
import AddDayForm from './components/containers/AddDayForm';
import SkiDayList from './components/containers/SkiDayList';

const App = () => (
  <div className="app">
    <Router>
      <ShowErrors />
      <Route exact path="/" component={SkiDayCount} />
      <Route path="/add-day" component={AddDayForm} />
      <Route path="/list-days" component={SkiDayList} />
      <Route path="/list-days/:filter" component={SkiDayList} />
      {/*<Route path="*" component={Whoops404} />*/}
      <GoalProgress />
      <Menu />
    </Router>
  </div>
);
export default App;
