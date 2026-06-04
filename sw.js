const CACHE_NAME = 'game-cache-v1';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/mon-sitt2/',
        '/mon-sitt2/index.html',
        '/mon-sitt2/1.png',
        '/mon-sitt2/2.png',
        '/mon-sitt2/odio.mp4'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
