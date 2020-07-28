/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eb0f259ec2f096183ec5d645a3f5724d"
  },
  {
    "url": "assets/css/1.styles.1348f53b.css",
    "revision": "1c877f0a6de38b447794ec58ef865715"
  },
  {
    "url": "assets/css/2.styles.5f044365.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.4b9ed23b.css",
    "revision": "a571667f511050438488159fcbccf76b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1348f53b.js",
    "revision": "b9e910c108a0988b7b48e1a93eae3d8a"
  },
  {
    "url": "assets/js/10.3a8e0900.js",
    "revision": "d55def76a38ca547387c024c4a032985"
  },
  {
    "url": "assets/js/11.6d2bb66f.js",
    "revision": "d4f17efbebfa1dcfc5dd0e0e7e74bd70"
  },
  {
    "url": "assets/js/12.1bdfc596.js",
    "revision": "481e1bf0c6fe3332772dce7001714465"
  },
  {
    "url": "assets/js/13.ac79c964.js",
    "revision": "efb794b1c380399f6807605cb964e979"
  },
  {
    "url": "assets/js/14.6f548850.js",
    "revision": "ba63fdb00662835f02da6462f8fd7bae"
  },
  {
    "url": "assets/js/2.5f044365.js",
    "revision": "637eebfb2d652fe074e54e32accd495d"
  },
  {
    "url": "assets/js/3.d9609e87.js",
    "revision": "d272ee848e035798464ec5cb13efcbe5"
  },
  {
    "url": "assets/js/4.1458e2b2.js",
    "revision": "444b5b125905f8e7f8160e416fb8f6e0"
  },
  {
    "url": "assets/js/5.83ca4612.js",
    "revision": "5b9c7900ef8656402b88c8b199175b17"
  },
  {
    "url": "assets/js/6.3715c9fe.js",
    "revision": "9e9fb9d8e0da687b6eed1aa73e511b14"
  },
  {
    "url": "assets/js/7.396d996b.js",
    "revision": "b85f931003e96c2ae6eba0b1de2cdd2e"
  },
  {
    "url": "assets/js/8.d5158909.js",
    "revision": "d272105670649ee9080339b4cd0ef2dd"
  },
  {
    "url": "assets/js/9.76906ac0.js",
    "revision": "0866acdf013c1ed774ca93d39524d0bc"
  },
  {
    "url": "assets/js/app.4b9ed23b.js",
    "revision": "b565457bd36df2bef2e2c81e10113eb1"
  },
  {
    "url": "hero.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "3f099cece4228eeb991020de8081a2b4"
  },
  {
    "url": "logo.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "project/index.html",
    "revision": "10bc1d6b4b4e656e42ccfad3b38e2f1c"
  },
  {
    "url": "specification/auth.html",
    "revision": "daffbf58871354fe01492b48a569c088"
  },
  {
    "url": "specification/index.html",
    "revision": "5dc315a2a8e58ac3c71780c2e92544cd"
  },
  {
    "url": "specification/manualtoken.html",
    "revision": "541b7bbe953d6c7a0644cc59719d6922"
  },
  {
    "url": "specification/menu.html",
    "revision": "d31a653460d8eeddef7f234b8b532219"
  },
  {
    "url": "specification/monitor.html",
    "revision": "47fa5e8b08041bb6d61be50b3d6dd60e"
  },
  {
    "url": "specification/others.html",
    "revision": "cc337a7a055d050acfd7ef0655c3589e"
  },
  {
    "url": "specification/protect.html",
    "revision": "72be336eaed0b51419b14731eb875e35"
  },
  {
    "url": "specification/reservation.html",
    "revision": "b70925a72eadb607e6efb03b5083951a"
  },
  {
    "url": "specification/seatoperate.html",
    "revision": "2f0170ea8d22bed340a50eca67031299"
  },
  {
    "url": "specification/settings.html",
    "revision": "4bdf18ae639d69ba9c54a21a0e815b7f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
