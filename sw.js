// Minimal service worker to enable install prompts and a stable shell
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
// (No caching here to keep behavior simple and predictable)
                                                                                
  
  
  
  
