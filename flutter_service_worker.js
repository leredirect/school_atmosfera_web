'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1f5877ca2ab0a2627fee52273b057370",
"index.html": "a0ce078ce7f98aaecc2de42efee6208d",
"/": "a0ce078ce7f98aaecc2de42efee6208d",
"main.dart.js": "a13f437cd44cfaedeb6e6e855338739c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "08af10c17985843bbd5bf196f88631ee",
".git/config": "f917344b8bd9cc8d6d5f689ad43e529d",
".git/objects/0d/f55caf794cbddef5e4e775d7c1b2856b42ba03": "a43748f5f5fa0e333ae66b094008f032",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/acac7340e453d272a8f36e629286053563a766": "fe9f9c6b496b278b42ac8037b000069f",
".git/objects/34/fd1cf8c92eb66546b593bc2d94108cf77cc962": "5481e0fee0bd9e5db70654b05cfba642",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/17587d982ef56938dcfda17c31902ec6c2b3b3": "ff3f4bc0fa2565557dee672b871f0963",
".git/objects/ab/5f4f4e40256fe573d49e20e6485a5b30c74978": "7074ff01fa7dbb513aad14a33611c48a",
".git/objects/e5/289cdf742e0cff4c8ae959457ecc6cf4fa15e5": "7061953ac96127b7bbab43493608251a",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/c9e764c24011197c71f40af79e0f45c1d4cc8d": "960c6556c0898dde9c085a2c775210c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/75534b0546f3f4a9ea3a3757f85e23499468d3": "d6bff74382445f63bd2d8964a495f1b2",
".git/objects/ee/9389a7298baa201a2cced16a26eb06219be257": "67c29bfed88659cf74fd7932fbfdbd60",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/8f/2bfc00d06329615c9fb796f1352739a6611433": "f6e0c6c3e42fa01a3df0ad7760d40b4a",
".git/objects/8f/98402af74856d29045ad64ff8c1117ae179426": "0c6879e82b5cd7340072f52876510c8a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8a/8fd787665e3ff6c8d841a5a4c535d22c24e448": "14a876f19a49355744e231a66410dfc0",
".git/objects/26/45d4d0ecc07385edb9b9f5723d2700acbfdda4": "2715d50971e5776b8030ebdf1a834575",
".git/objects/2a/358f3964f0769bf55c586d4346cd89adef8cc9": "e5edb27605ebdaff7cfa6d12622430fb",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/fb6d9dbbb8e16d29d907c9c3c6046fee20a37b": "d75ce3e603efd753f70332eb4966cfaf",
".git/objects/6e/4d549cd33075797cfd16d120281fcfe0766ac5": "01c3a4472bd62ea494f206a7bb80f3cc",
".git/objects/62/d329b23b9e23be5ac8cad89c6950d13ebbe1b3": "5a509cc2418c24d1ed62aa6129f34a6d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/08/51e8c1acd15dfdf09b6382bffd1a2274941b88": "7025aaea5101b3bd0411fee27c9c5c8e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/812829399af9fc4d13b6a4fe8735827f8a65a5": "f61d1bf9d09b2fc4800e38d12e9ec1bf",
".git/objects/a6/76c515a1b9bb54c44da1254aa89b1bedfa7109": "50ae43a680ae5301685ba30b5a6bd884",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/ed5d767428b617ac383936401cc94ec95b211e": "00ce70587ccdba5248259d6eefc28899",
".git/objects/c4/e8a788c6237e28a09aedbd407c317239229533": "884c6bfe321f71d5b3daeb3d41906b1f",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/cb/a569ad9dcee12ff3b7163050199fce61d79b9a": "dc33a0e236c22ee64fdb2926c1f2176f",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/70/1ec4d670af6b3386a71ef01096242cd9c8b623": "d366184001b7315064bf7819511b8554",
".git/objects/4a/1de25694005455a5940d55dccfeb157affb463": "a2b98d96b5f283b4086eba7b72438008",
".git/objects/24/10ff47fbe03eb5f66cc823f8b62ab41ca47e46": "b1521ce716a4a136f07056340f1e380a",
".git/objects/12/7a05573eff05dbf35f15e37c64230fe9611e14": "4a1bc1cb17a17d841448279f93a93a90",
".git/objects/78/36e7975525e03dd0d2ec9ab8f86531403878b8": "7f6e0e09bbb34d35feaf05c96d452174",
".git/objects/14/6400c76768df8da84bdb9997fccf3e92008d62": "09ec9595d883f09f152275f70a687dda",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f754095abc32b9672de9bb077fe4374b",
".git/logs/refs/heads/main": "f754095abc32b9672de9bb077fe4374b",
".git/logs/refs/remotes/origin/HEAD": "5e7322571314086510784a83fb8fa317",
".git/logs/refs/remotes/origin/main": "2b7ea3ca67f4313e5497048c68f1fb89",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9d0620f1fbf6acd07654a1650a8f11dc",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9d0620f1fbf6acd07654a1650a8f11dc",
".git/index": "9cb2257f9b0e438785e88016ba092e52",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "19b784f01f865148b5ae954c4a694b1e",
"assets/AssetManifest.json": "69d60f0ffa00c5b4cfaa81ea44bf00bc",
"assets/NOTICES": "b09566de2fff35c81c5d50c30b7d6f9a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "bed4e6dd8e9bfd2e9ae6df7241c7bf75",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/ic_whatsapp.svg": "2f274432e822cf8dee64efbbebaedc30",
"assets/assets/images/home_page_logo_icon.svg": "dc7191ef69ec4a8506da0298248d6b6e",
"assets/assets/images/home_page_logo_icon.png": "6126f77dc8f7f5bd63bd15e8c1068d99",
"assets/assets/images/home_page_logo.svg": "d995855aa96db296d5cea9dbbbc9dfd8",
"assets/assets/images/home_page_logo_text.svg": "5d89be9557958255b53033ea2697ae62",
"assets/assets/images/ic_arrow.svg": "ec666894ec074baf0269de638479e861",
"assets/assets/images/ic_viber.svg": "c04216eb58458a863de051b000695e05",
"assets/assets/images/ic_telegram.svg": "b732d1be773cf3712b9e6a02ca5ef245",
"assets/assets/images/ic_instagram.svg": "36b4b850205b1b64cacd2e54d850b3da",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
