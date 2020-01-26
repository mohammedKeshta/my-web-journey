import React from 'react';
import { schema, normalize } from 'normalizr';
import data from '../article-default-state.json';

const user = new schema.Entity('users', {}, { idAttribute: '_id' });
const comment = new schema.Entity('comments', {
  commenter: user,
});

const article = new schema.Entity('articles', {
  comments: [comment],
  author: user,
});

const normalizeData = normalize(data, [article]);

export const Article = () => {
  return (
    <div>
      <h1>Article</h1>
      <pre>
        <code>{JSON.stringify(normalizeData, null, 2)}</code>
      </pre>
    </div>
  );
};
