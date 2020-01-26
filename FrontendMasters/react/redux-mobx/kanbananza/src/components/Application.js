import React, { Component } from 'react';
import CreateList from './CreateList';
import Users from './Users';
import ListsContainer from '../redux/containers/ListsContainer';

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <div>
          <Users />
        </div>
        <section>
          <CreateList />
          <ListsContainer />
        </section>
      </main>
    );
  }
}

export default Application;
