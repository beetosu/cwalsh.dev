const siteFiles = [
   "icons/icon-512.png",
   "icons/favicon.png",
   "icons/maskable_icon.png",
   "icons/apple-touch-icon.png"
]

const importantFiles = [
   "index.css",
   "/",
   "manifest.json"
]

self.addEventListener("install", (event) => {
   const preCache = async () => {
      const cache = await caches.open("site-assets");
      cache.addAll(importantFiles);
      return cache.addAll(siteFiles.map(f => { return `files/${f}` }));
   };
   event.waitUntil(preCache());
});

self.addEventListener("fetch", event => {
   event.respondWith(
     fetch(event.request)
     .catch(_ => {
       return caches.match(event.request) ;
     })
   );
});