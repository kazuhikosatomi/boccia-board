self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("boccia-club").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./boccia_logo.png",
        "./boccia_logo_192.png",
        "./boccia_logo_512.png",
        "./boccia_field.png",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
