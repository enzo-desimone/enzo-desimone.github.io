'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "934f1b0e454736c61b2217e8a8a87b03",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "c075420f66a1c82e0a5a62b36cde973b",
"assets/AssetManifest.json": "0b0f8b5bb762df8e19a737ea0b323f27",
"assets/assets/icons/add_icon.png": "551cb78c4a9fad5d90aaccf15bc3a913",
"assets/assets/icons/arrow_right_icon.png": "8e4c6a03b7134ee5d546518e8fa0b30e",
"assets/assets/icons/avatar_icon.png": "d824a920bac35f427fd14405bca3a2d8",
"assets/assets/icons/calendar_icon_blank.png": "38a06f8629dfac4c06114623a92ae7e3",
"assets/assets/icons/calendar_search_icon.png": "76f69b799d467607db2ade10b5c06278",
"assets/assets/icons/calendar_tick.png": "9ac57966695918d84ee38142972afede",
"assets/assets/icons/call_icon.png": "7990e7ae232336bb96445789afe91b0f",
"assets/assets/icons/category_icon.png": "7de5bf1b3543f8cd3539e1c4fac1dc73",
"assets/assets/icons/client_icon.png": "434710883e4f639b7fa980ea9acac440",
"assets/assets/icons/clock_icon.png": "d5acc5735f753e7e3d750baf1cf32c30",
"assets/assets/icons/close_icon.png": "e7b3e6001bfbe7ad72db31eee43922d5",
"assets/assets/icons/copy_icon.png": "8b01ded60e775e02b701fd1c94935e9d",
"assets/assets/icons/danger_icon_blank.png": "da90e03f4cd617bb6abcee8bfa5f66a2",
"assets/assets/icons/danger_icon_red.png": "44430a689eee8b0560789ed8fba00db6",
"assets/assets/icons/delete_icon.png": "0dfb1a3afe36569a3c291a197247dd42",
"assets/assets/icons/delivery_icon.png": "c6824367387e39ec970623aac9d02869",
"assets/assets/icons/diagram_icon.png": "a69d618c297922bf88cb87dce95a8cfa",
"assets/assets/icons/doc_icon.png": "3e545003821c7c60d4ee08f5f7aff8aa",
"assets/assets/icons/dot_icon.png": "d7f1d241dff5110ce01d34a1006ad4f7",
"assets/assets/icons/edit_icon.png": "163a9806d729e990336de1b911826db1",
"assets/assets/icons/edit_icon_2.png": "792a5fe8ae067f445127bdb50a391c0f",
"assets/assets/icons/email_icon.png": "eace1fc517a6744a04256ebba4e0a7fc",
"assets/assets/icons/employee_icon.png": "e0b453d34fa014fe4be24b4d311729b4",
"assets/assets/icons/exit_icon.png": "e9ae615914ee3dd609353b765e6772e2",
"assets/assets/icons/filter_search_icon.png": "5d13021a35f1717ff2aebb5ebc3abc82",
"assets/assets/icons/hashtag_icon.png": "f4f72f4a2e193478548fc27848a7f37f",
"assets/assets/icons/hide_password.png": "655731e4b290e75714d2ad1b9ead3a61",
"assets/assets/icons/home_icon.png": "36220386454355e5dc1699628dc463f0",
"assets/assets/icons/length_icon.png": "14a2d2f3ed9f8d1ef532d38f3a52a7ae",
"assets/assets/icons/message_notif_icon.png": "f91d4e37406c8e40dbaf3991b6239a13",
"assets/assets/icons/note_icon.png": "ee1cfd3a80ea76847b1d845f17ce2113",
"assets/assets/icons/notification_icon.png": "9807c3dac68989e8105b95657b6e1eaf",
"assets/assets/icons/notr_icon.png": "c01ef8113d13b464817d722c65fdb279",
"assets/assets/icons/not_verify_icon.png": "1a986f455c7e294b3ccff776a97583f3",
"assets/assets/icons/password_icon.png": "bf9f4fd6fed34e687045113fcdc872ff",
"assets/assets/icons/pdf_icon.png": "0f7127e08505d0ceed3aecddc6c3e433",
"assets/assets/icons/product_icon.png": "ac1f054f90e5e2ee97b3d7f2153f4273",
"assets/assets/icons/radioactive_icon.png": "5401394a26b0194a7ba151aa5cd29f56",
"assets/assets/icons/search_filter_icon.png": "565317897d3070347539c201b845794a",
"assets/assets/icons/search_icon.png": "609faac2339ea114f713322684557f29",
"assets/assets/icons/show_password.png": "8990fb167d899e6af10e47d319890351",
"assets/assets/icons/show_password_icon.png": "319e6ae53784677409f482e8a0c5458e",
"assets/assets/icons/status_icon.png": "e50821219d4d77555a3ba38196d404aa",
"assets/assets/icons/task_icon.png": "e9e2cf0c00f5abe32f430329d19fe2e4",
"assets/assets/icons/text_icon.png": "5089f0d94fc0e19110e60248d4f7a59c",
"assets/assets/icons/trash_icon.png": "5ed0a30fed8ef305e61d5fc4840f780a",
"assets/assets/icons/user_icon.png": "1c0a4cbe35b73d30acd1fd791bcbcd89",
"assets/assets/icons/user_icon_blank.png": "8e5dfc073b252e80de3b1501a674db88",
"assets/assets/icons/user_search_icon.png": "77864bd7b96c5b7786e4a39b1853fa0a",
"assets/assets/icons/user_tag_icon.png": "1523dc97f686e0516625275a921ba686",
"assets/assets/icons/verify_icon.png": "477805dcda74aa97f59b4c5a1a65909b",
"assets/assets/icons/weigth_icon.png": "ec6d1605886fdf6de32e43a9f903cdfc",
"assets/assets/icons/work_icon.png": "c222aa786e01db15c8f1a03aa979f6c7",
"assets/assets/images/gammatom_logo_cs.png": "2487aaa8bcee9acd6f00c86a93ab8e1c",
"assets/assets/images/gammaton_login_frame.png": "1f165a9623e7c24ad80826bda798e6be",
"assets/assets/images/gammaton_logo.png": "d3104535449bc9cf58723e736870fabd",
"assets/assets/translations/it.json": "1a30a7075cef1d88c5e8f170b04f9a92",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "63225596efb8d66a01e9b9da1f349946",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "4821f43ce0d1d22a26be0fc0dc6b42c7",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"images/android-chrome-192x192.png": "8c884379a16d92c4073f8cae6f472c55",
"images/android-chrome-512x512.png": "3406766a46e3774d13928223250d41cc",
"images/apple-touch-icon.png": "5816096ed5a00ca2f5444e7be08de514",
"index.html": "f31f25abbf098ca9c9e0172d416e3dd8",
"/": "f31f25abbf098ca9c9e0172d416e3dd8",
"main.dart.js": "0c051bc25f53ac67ebd13d4e02fd9b12",
"manifest.json": "0302c781d3783f68a2e3af97382ae948",
"version.json": "3728628b2598c2d44ea1a861542a3daf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
