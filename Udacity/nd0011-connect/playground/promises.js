let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("done")
    reject(new Error("Whoops!"));
  }, 1000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));
