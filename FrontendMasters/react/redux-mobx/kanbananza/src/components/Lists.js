import React from 'react';
import ListContainer from '../redux/containers/ListContainer';

const Lists = ({ lists = [] }) => {
  return (
    <section className="Lists">
      {lists.map(listId => {
        return <ListContainer listId={listId} key={listId} />;
      })}
    </section>
  );
};

export default Lists;
