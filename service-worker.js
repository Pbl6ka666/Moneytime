self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('moneytime-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/IMG_0417.jpeg', // əgər arxa fon şəkli varsa
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
