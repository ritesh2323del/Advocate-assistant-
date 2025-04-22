self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('advocate-assistant-cache-v1').then((cache) => {
      return cache.addAll([
        '/Advocate-assistant-/',
        '/Advocate-assistant-/index.html',
        '/Advocate-assistant-/styles.css',
        '/Advocate-assistant-/script.js',
        '/Advocate-assistant-/images/icon-192.png',
        '/Advocate-assistant-/images/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
