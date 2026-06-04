self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('game-cache').then((cache) => {
      return cache.addAll(['/', 'index.html', '1.png', '2.png', 'odio.mp4']);
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
