const staticPWA = "static-pwa"
const assets = [
  "./",
  "./index.html",
  "./sos.html",
  "./map.html",
  "./css/style.css",
  "./css/map.css",
  "./js/app.js",
  "./assets/icon-192x192.png",
  "./assets/icon-256x256.png",
  "./assets/icon-384x384.png",
  "./assets/icon-512x512.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPWA).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});