// CampusGrid PWA Service Worker v4 (Network-First + Offline Cache)
const CACHE_NAME = 'campusgrid-cache-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './data.js',
  './app.js',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((networkResp) => {
        const clone = networkResp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return networkResp;
      })
      .catch(() => caches.match(event.request))
  );
});
