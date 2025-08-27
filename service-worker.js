// Service Worker za PWA
// Koristimo relativne putanje da bi radilo i na GitHub Pages (projekat hosted pod /<repo>/)
const CACHE_NAME = 'bus-schedule-cache-v2';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './assets/images/android-chrome-192x192.png',
  './assets/images/android-chrome-512x512.png',
  './assets/images/apple-touch-icon.png',
  './assets/images/favicon-16x16.png',
  './assets/images/favicon-32x32.png',
  './assets/images/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
  keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
});
