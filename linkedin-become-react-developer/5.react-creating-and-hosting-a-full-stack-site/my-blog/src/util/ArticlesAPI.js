const api = "http://localhost:8000";

const headers = {
  Accept: "application/json"
};

export const getAll = () =>
  fetch(`${api}/api/articles`, { headers })
    .then(data => data.json())
    .then(data => data.data)
    .catch(e => console.log(e.message));

export const getArticle = name =>
  fetch(`${api}/api/articles/${name}`, { headers })
    .then(data => data.json())
    .then(data => data.data[0])
    .catch(e => console.log(e.message));

export const remove = name =>
  fetch(`${api}/api/articles/${name}`, { method: "DELETE", headers })
    .then(res => res.json())
    .then(data => data.data);

export const update = (name, body) =>
  fetch(`${api}/api/articles/${name}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(data => data.json())
    .then(data => data.data)
    .catch(e => console.log(e.message));

export const upvote = (name, body) =>
  fetch(`${api}/api/articles/${name}/upvote`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(e => console.log(e.message));

export const downvote = (name, body) =>
  fetch(`${api}/api/articles/${name}/downvote`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(e => console.log(e.message));
