parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),workbox.routing.registerRoute(/\.js$/,new workbox.strategies.NetworkFirst),workbox.routing.registerRoute(/\.css$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"css-cache"})),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|ico)$/,new workbox.strategies.CacheFirst({cacheName:"image-cache",plugins:[new workbox.expiration.Plugin({maxEntries:20,maxAgeSeconds:604800})]})),workbox.googleAnalytics.initialize();return{"AaGI":{}};});