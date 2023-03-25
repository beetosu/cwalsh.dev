const siteFiles = [
   "auction.png",
   "aw.png",
   "badabing.png",
   "cannon.png",
   "dark.svg",
   "drill.png",
   "favicon-512.png",
   "fishingbot.png",
   "jobapp.png",
   "light.svg",
   "marketplace.png",
   "miiverse.jpg",
   "minecraft.jpg",
   "newsmood.png",
   "startpage.png",
   "suggestion.png",
   "waiting.png"
]

const importantFiles = [
   "index.css",
   "/",
   "manifest.json",
   "files/favicon.png"
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