'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "0517c496c0ffe28092ab6c2e6c6f355e",
"/assets\FontManifest.json": "8b5b459447147be89e0cdbda45fbd87c",
"/assets\fonts\Caveat-Bold.ttf": "3001cff3181eefd8db327cd724309a09",
"/assets\fonts\Caveat-Regular.ttf": "b20ff458bc0dc48c039c68a3dc96173c",
"/assets\fonts\Comfortaa-Bold.ttf": "266e51ad11e63d67171aeadebc6ab541",
"/assets\fonts\Comfortaa-Medium.ttf": "ed29306657df7159b65d4f15b978aa9c",
"/assets\fonts\Comfortaa-Regular.ttf": "ba851e1dff547d9128572cc4297eafab",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"/assets\fonts\OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"/assets\fonts\OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"/assets\fonts\Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"/assets\fonts\Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"/assets\fonts\Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"/assets\fonts\Roboto-Thin.ttf": "321de678e592d0b8f44f1a82d7ca4b62",
"/assets\images\2dimension_logo.png": "8d8ccf0a8a11894ab7ffd75af74e3186",
"/assets\images\3ds_max_logo.png": "b527f1cb6ee07d311f99464dc421151b",
"/assets\images\about_1.jpg": "4c093d98df5f13df5a45927127436435",
"/assets\images\about_2.jpg": "6a7d014e6de6ffbb22a8ee69fdd17195",
"/assets\images\add_selected.png": "84f48c734b2415b749b21ac96f0edfe0",
"/assets\images\add_unselected.png": "196cb5758fe3dd99ae5b51f21a0f33a0",
"/assets\images\android_logo.jpg": "60748235ccbbc283c8b1f46bdf8a1f16",
"/assets\images\android_logo.png": "405f897032128478714633a055111fc5",
"/assets\images\camera.png": "c9b015f737ad57dc11f1766ca6c1543b",
"/assets\images\comment.png": "17cca6a3fcf3becc1264d93eca8a0389",
"/assets\images\dart_logo.png": "cf01d1306484e96da3852b1c507fa31a",
"/assets\images\dialogflow_logo.png": "5bb9081c51368382812842c89486df1d",
"/assets\images\download_selected.png": "37a03e1c8bf898337afb61bfe3f43a32",
"/assets\images\download_unselected.png": "c7b33102895683a57d19b713a3bde126",
"/assets\images\empty_note.png": "580fe619450a8f976cb1e380f825a684",
"/assets\images\facebook.png": "df22c313b2135b82b6ab3dbed36bdac5",
"/assets\images\firebase_logo.png": "1a43984cc366c705864cee4060a0c370",
"/assets\images\flare_logo.png": "d7e6eea1b1ef4207b0d267eb8f48b5ee",
"/assets\images\flutter_icon.png": "3748c356633841a448fb454945cd5da8",
"/assets\images\flutter_logo.png": "2d1998a6f2729f66ea655c0fd132d8a4",
"/assets\images\github.png": "9fb50aca9304aeb1906755501b23c24b",
"/assets\images\heart_selected.png": "a0bd4a5200f8dd480731e79e3885bfa8",
"/assets\images\heart_unselected.png": "91797d399bd7c89cbd8f660e47a082ca",
"/assets\images\home_1.jpg": "1f4d6cff36c8237c8be91bff8d687826",
"/assets\images\home_selected.png": "56079e1bf8a722f0e0386dabaf6afc65",
"/assets\images\home_unselected.png": "2325926d99e6cc5775fdf7bf5a1abb31",
"/assets\images\igtv_logo.png": "0eea8455c799661ee6cd95c33f209d3f",
"/assets\images\instagram.png": "4ef9560ae5033d4d020c098ef38231b4",
"/assets\images\java_logo.png": "7be3837b0f9a33be6ce4f464e6a18326",
"/assets\images\kotlin_logo.png": "059bdf1aabeb6407ba597fa84e5d8263",
"/assets\images\linkedin.png": "f995ee0097fe2fd01919a2a91dbe6e26",
"/assets\images\logo_instagram.png": "128a928d8867de53a90ca78fd88e5044",
"/assets\images\medium.png": "d4d81fbefe255d99803a4c3a36dc5c0e",
"/assets\images\ml_kit_logo.png": "25842c17a22aefe323b2ee8e671ce525",
"/assets\images\mysql_logo.png": "aae45eab761089497608a37642e8f980",
"/assets\images\php_logo.png": "dd8286f117c1c6a729fcaf1c7637faf0",
"/assets\images\profile.jpg": "40eb334517b352d77ea7aadfab4bcdc7",
"/assets\images\profile1.jpg": "2601107755de39b0029cea2b4fdb0057",
"/assets\images\profile_selected.png": "bdf82717b5191d13aca0ee7e8cbc8d56",
"/assets\images\profile_unselected.png": "01f3e72b1b9314c2fe0f00c1ff2baf82",
"/assets\images\search_selected.png": "256ca72fd48b2a56b0fc585784ed5e22",
"/assets\images\search_unselected.png": "5f34f8494085cbbe4014bfb326e45700",
"/assets\images\send_icon.png": "76395b8f52155f2ed678734d88e5523d",
"/assets\images\sent_icon.png": "a3a72986ddc62b86ad794047958be06c",
"/assets\images\skype.png": "a9f43aff316ce0148428ad3d1c2d7c5f",
"/assets\images\twitter.png": "88d093d707c2052d0fe208a15b838e06",
"/assets\images\unity_logo.png": "38c0d377744ee0082270907779384052",
"/assets\images\unity_logo_1.png": "cb657f12f27575da787216ebe7df79f1",
"/assets\images\whatsapp.png": "ed654a9c65ed0ad7438084c6ba31f746",
"/assets\LICENSE": "3971562675b5c0f5eb05c037f92cebe0",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/index.html": "2676f4bae3a815cb3e8583e88663f7ae",
"/main.dart.js": "f952ae91915fff9134e8f3147662be40",
"/main.dart.js.deps": "a2603ccd7de2f5899e08d7f3edf997c9"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
