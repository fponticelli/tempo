if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!a[e]&&(await new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}),!a[e]))throw new Error(`Module ${e} didn’t register its module`);return a[e]},s=async(s,a)=>{const i=await Promise.all(s.map(e));a(1===i.length?i[0]:i)};s.toUrl=e=>`./${e}`;const a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=new Promise(async a=>{let r={};const n={uri:location.origin+s.slice(1)},t=await Promise.all(i.map(s=>"exports"===s?r:"module"===s?n:e(s))),o=c(...t);r.default||(r.default=o),a(r)}))}}define("./sw.js",["./workbox-d6c904b5"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./assets/android-chrome-144x144.png",revision:"782afbbaf5830cd4de782ba1bdc55c35"},{url:"./assets/android-chrome-192x192.png",revision:"829ca8817cb59bf9777ccce10e5157b0"},{url:"./assets/android-chrome-256x256.png",revision:"f3a2f39e39f7140c7f740f2c1b07199d"},{url:"./assets/android-chrome-36x36.png",revision:"5a6b1b581f1fa66d6dbd6de876805807"},{url:"./assets/android-chrome-384x384.png",revision:"19673e1a93c5efdd867b4904e9414e0f"},{url:"./assets/android-chrome-48x48.png",revision:"0469c6d92e93e8f956f5a440405ab0d2"},{url:"./assets/android-chrome-512x512.png",revision:"9b4979a9e78c8e7d1c5aa032627256d8"},{url:"./assets/android-chrome-72x72.png",revision:"90f782d4071067a9ab2194737a4ac150"},{url:"./assets/android-chrome-96x96.png",revision:"61c59cbebf62ca205ee04f2bd7f58d78"},{url:"./assets/apple-touch-icon-1024x1024.png",revision:"8d4105e0de3aa91b7ad73f64c88853bc"},{url:"./assets/apple-touch-icon-114x114.png",revision:"2b25b0a5cb699c6454e6a3668c047a86"},{url:"./assets/apple-touch-icon-120x120.png",revision:"dcd277f606930da454c6240743bd02c1"},{url:"./assets/apple-touch-icon-144x144.png",revision:"782afbbaf5830cd4de782ba1bdc55c35"},{url:"./assets/apple-touch-icon-152x152.png",revision:"70a6579ac71d58bd7db5fd940d01ed53"},{url:"./assets/apple-touch-icon-167x167.png",revision:"2662c180c38a1d26b1bd1bfc2f0413aa"},{url:"./assets/apple-touch-icon-180x180.png",revision:"e8b86f3f56ed4d2c0e83d83f311f6c16"},{url:"./assets/apple-touch-icon-57x57.png",revision:"198fd36e73e66444d8877b8978127836"},{url:"./assets/apple-touch-icon-60x60.png",revision:"c44189efbab0c0ddebfd5c666f7ef405"},{url:"./assets/apple-touch-icon-72x72.png",revision:"90f782d4071067a9ab2194737a4ac150"},{url:"./assets/apple-touch-icon-76x76.png",revision:"187350b043b241d9a31b048395037923"},{url:"./assets/apple-touch-icon-precomposed.png",revision:"e8b86f3f56ed4d2c0e83d83f311f6c16"},{url:"./assets/apple-touch-icon.png",revision:"e8b86f3f56ed4d2c0e83d83f311f6c16"},{url:"./assets/apple-touch-startup-image-1125x2436.png",revision:"76a1e8580068e51390bd9cc3820ee155"},{url:"./assets/apple-touch-startup-image-1136x640.png",revision:"52b31fb9a46abe8f9902a66debace72c"},{url:"./assets/apple-touch-startup-image-1242x2208.png",revision:"2979f7f7523e679c9ca25da04370bff6"},{url:"./assets/apple-touch-startup-image-1242x2688.png",revision:"60d72288eaf2f687e4daafd93fc9bef1"},{url:"./assets/apple-touch-startup-image-1334x750.png",revision:"ffa9762f7c3514617639c8a2a9363cf3"},{url:"./assets/apple-touch-startup-image-1536x2048.png",revision:"e8ece852060007f84bf27b40d2191226"},{url:"./assets/apple-touch-startup-image-1620x2160.png",revision:"3e5ad577bf18bf2434f2d7bebaba5b12"},{url:"./assets/apple-touch-startup-image-1668x2224.png",revision:"43f5cf07ac07343ec2cb790e5d82b50d"},{url:"./assets/apple-touch-startup-image-1668x2388.png",revision:"4d2304f134a4bfdf951ef1c48d02a212"},{url:"./assets/apple-touch-startup-image-1792x828.png",revision:"7e8b203067e802280e4c4989535f0119"},{url:"./assets/apple-touch-startup-image-2048x1536.png",revision:"c5580081b6ee6ae51a7a170910930140"},{url:"./assets/apple-touch-startup-image-2048x2732.png",revision:"c44b7951df9b5e12df20a37cd3a261e4"},{url:"./assets/apple-touch-startup-image-2160x1620.png",revision:"9ad7e03a54a2b40f4aedb9bbb893acbb"},{url:"./assets/apple-touch-startup-image-2208x1242.png",revision:"103bab2ec868092fd5ef8f77e21f4ec7"},{url:"./assets/apple-touch-startup-image-2224x1668.png",revision:"e54bcf1fadbbfb8a89c46b34046ec559"},{url:"./assets/apple-touch-startup-image-2388x1668.png",revision:"c51dcc74187b383f72e5df3231ce45ce"},{url:"./assets/apple-touch-startup-image-2436x1125.png",revision:"50ac7cc4753119cdd65b9b916e8b5203"},{url:"./assets/apple-touch-startup-image-2688x1242.png",revision:"80a9539fa4f064ec5b1b542f8f4e7381"},{url:"./assets/apple-touch-startup-image-2732x2048.png",revision:"17b6a77167515d01b0c058c02013e114"},{url:"./assets/apple-touch-startup-image-640x1136.png",revision:"77db52c80cfaed4f05d35a7cc76dea31"},{url:"./assets/apple-touch-startup-image-750x1334.png",revision:"7490c8faeb792fc6941b4386834b4c37"},{url:"./assets/apple-touch-startup-image-828x1792.png",revision:"57fd44e330881dfa8967656188aa1fde"},{url:"./assets/browserconfig.xml",revision:"2ed8250f0c8ea86f0251039b25f70f75"},{url:"./assets/coast-228x228.png",revision:"5ad217fe6002350c629788e339dc81d2"},{url:"./assets/favicon-16x16.png",revision:"fda45fe7abb2aeef96a0b2ee9a478aff"},{url:"./assets/favicon-32x32.png",revision:"129a20cdb7589ae3beb804b69c4ec19a"},{url:"./assets/favicon-48x48.png",revision:"0469c6d92e93e8f956f5a440405ab0d2"},{url:"./assets/favicon.ico",revision:"ef6c2a1c2d22aa64fcf307900a084e95"},{url:"./assets/firefox_app_128x128.png",revision:"480bab6ea083c42ba1f422e215fa3a55"},{url:"./assets/firefox_app_512x512.png",revision:"017c16a8106a3f59c3ac202ca2aacfd7"},{url:"./assets/firefox_app_60x60.png",revision:"37b1bd6f2e240b33b9026697f3b4857b"},{url:"./assets/manifest.json",revision:"db8686986dc5dd4b94bb46dd77ee8080"},{url:"./assets/manifest.webapp",revision:"1395be8bcd4374219afb155ba1b2c7b2"},{url:"./assets/mstile-144x144.png",revision:"782afbbaf5830cd4de782ba1bdc55c35"},{url:"./assets/mstile-150x150.png",revision:"82007b8fe084cb72ae522edd0926304c"},{url:"./assets/mstile-310x150.png",revision:"0e186c6284b4eda48ae09182291c9d47"},{url:"./assets/mstile-310x310.png",revision:"f22b285cc883ef6affc85651b21b25ec"},{url:"./assets/mstile-70x70.png",revision:"9c5542dc8e9e97a28973d9fc13d6cd21"},{url:"./assets/yandex-browser-50x50.png",revision:"d5c63c8f5b42b69b5dd3e070cc348ff7"},{url:"./assets/yandex-browser-manifest.json",revision:"d27c9989b93665c137c030b2269f5629"},{url:"icon-512x512.png",revision:"4c9829e02e28d9ef605b00b02853c29a"},{url:"index.html",revision:"7a82324729582935d3ddcca28509df47"},{url:"index.js",revision:"761383b65c6ddfb4d07e43133c55e99a"},{url:"main.css",revision:"9d02128cb32164008064161515ea6231"}],{})}));
