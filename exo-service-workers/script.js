 fetch('/api/users')
  .then((response) => response.json())
  .then((data) => console.log(data));



navigator.serviceWorker
  .register("/worker.js", { scope: "/api/" })

  .then(function (registration) {
    // Succès
    console.log('Registration succeeded. Scope is ' + registration.scope);
  })
  .catch(function (err) {
    // Echec
    console.log('Registration failed with ' + err);
});
