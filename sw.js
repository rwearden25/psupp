const CACHE_NAME = 'psupp-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/knowledge-base.js',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// Install — cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching core assets');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — network first for API, cache first for assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always go to network for API calls
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response(JSON.stringify({ error: 'You are offline. AI features require an internet connection.' }),
          { headers: { 'Content-Type': 'application/json' } })
      )
    );
    return;
  }

  // Cache first, then network for static assets
  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkFetch = fetch(event.request).then(response => {
        // Update cache with fresh version
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);

      return cached || networkFetch;
    })
  );
});
