self.addEventListener('install', (event) => {
         event.waitUntil(
             caches.open('v1').then((cache) => {
                 return cache.addAll([
                     '/Advocate-assistant/index.html',
                     '/Advocate-assistant/manifest.json',
                     '/Advocate-assistant/icon-192x192.png', // Ensure this icon exists
                     // Add other static files (CSS, JS, images) as needed
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