self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("coachtrack-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "home.html",
        "style.css",
        "script.js",
        "manifest.json",
        "icons/icon-192.png",
        "icons/icon-512.png"
        // Add more assets if needed
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
