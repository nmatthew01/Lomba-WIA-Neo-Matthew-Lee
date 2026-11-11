const V="sambungwarga-v7",FILES=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
 if(r.mode==="navigate"){e.respondWith(fetch(r).then(x=>{const y=x.clone();caches.open(V).then(c=>c.put("./index.html",y));return x}).catch(()=>caches.match("./index.html")));return}
 e.respondWith(caches.match(r).then(m=>{const n=fetch(r).then(x=>{const y=x.clone();caches.open(V).then(c=>c.put(r,y));return x}).catch(()=>m);return m||n}))});
