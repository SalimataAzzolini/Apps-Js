this.addEventListener("install", async (e) => {
    e.waitUntil(
    caches.open("v1").then((cache) => {
    return cache.addAll(["/api/images/image1.jpg","/api/images/image2.jpg"]);
    })
    );
});


this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).catch(function() {
        return fetch(event.request);
      })
    );
  });

/* this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
    );
  }); */


/* const response = caches.match(e.request)
.catch(() => {
return fetch(e.request);
}); */

