
self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./", "./src/input.css", "./src/assets/agriculture.jpg"])
        })
    );
})

self.addEventListener("fetch", e =>{
    console.log(`Intercepting fetch request for ${e.request.url}`);
})