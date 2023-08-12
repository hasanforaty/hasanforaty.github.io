'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "dc8bcd9af1297849b5ea9effe1accbec",
"index.html": "3b17b42c13b1e48fd1aa7f0b23bce704",
"/": "3b17b42c13b1e48fd1aa7f0b23bce704",
"certification.html": "d8e31b63d8018086dde8e1200cf0bfdd",
"main.dart.js": "33b35a60e13e6ca13accf541581ca0fc",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main-icon.png": "97cbbb7df7b2db2e4975d947d81068fd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c02e4032e8f43440f4a118969ac6807e",
".git/config": "c5408f154abb65dec69fe9eaae314997",
".git/objects/0d/b929e04d99ceab316c5a636b4696aded951aed": "a88973c00ced0453a4fa95c6a225aa0f",
".git/objects/0d/ef89ad27d65b24f2e523bd8891b7c651fdafc4": "c62ceea4c9f5868463d41b1357542914",
".git/objects/59/ce05121e9d51f71deeccfae15ae43d857f77c1": "eeaaca86b0d85bfe022cc4c82beb4426",
".git/objects/68/7fa1c7642b6bf8cedfdb9192b64a30d7f637d0": "4ae2a98aaf94d2ccc1578499a2be9040",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/0cd823c9e665c9cb23cb52f990674d81fb9dc6": "b3df5f7af7eed97f5f9c093cb7289745",
".git/objects/04/1309d2e2a9cbf9e7ecfb9420c5d37c4fbf8af3": "d43ce2075ea51f2dad7917a3acc08c54",
".git/objects/6a/3445b6e2f6a78721c6ca612f95defa24124085": "0b9383f4eb82c6eeb69d9f836644a9dd",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/51/a1218affcaa445d26ca8a99494a0a39f98b830": "36e0edb5c4c1ff1218b8eecae2415aba",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/93/57b3b9d599c0cbb35e612bd1b491d736a1bc90": "63090a8e9785a04c86f8eddbec12a574",
".git/objects/94/7687a147b78325d7a6cf58d9af3c86bcf3e2d2": "01b3c3546c1a91ae73815d4b26d20eea",
".git/objects/94/74b97a03d6940da4397363f7abc1c708cb316b": "af9ba61df852de955fe615ba2ffc47e7",
".git/objects/0e/9c5767baaf6dff068eac99fee209ca6d56cc28": "3c388a2cb7db39af009f30c67fa24347",
".git/objects/33/0517839cdbccfc74aee6fbe5ef4b5f8cb52d06": "9bda5438f01e5702ffc1a2d9afdb6d02",
".git/objects/a3/c9af9ba790293c46bddfd1f314041590e54190": "0f78146ccfc3abe34e40380891cd3505",
".git/objects/b2/96458ccd3b0e44fe1e649d9e3aa2b3b55c3b09": "a9980e7e069cc52098fa9092e019fcd4",
".git/objects/b2/b2f4e4079c0478a2656c648e73bcc5175c3ca2": "20ab649585d1667450e6524fdb62be85",
".git/objects/d9/019faf4bde2ac5c748d76f9306dabce9c52394": "d87dfb6e8d26c65583e4d1b2d06a68c4",
".git/objects/ac/b8f14abb0f2b5ccadf6909061b988e986f35a7": "2452f9428fbe78e360985b91854217ae",
".git/objects/bb/7c4ce16e3bf1b5de3f9b1c9baf749a98baa992": "b7956f80fa76f514ffacb73d3da7a771",
".git/objects/d7/6699140b3eee54dae1f7c6d1e26cca52c060fc": "1d35ad042a737475bb9863eca8899ede",
".git/objects/df/c234aff45102e9db0a8499e0256a0d5f21081c": "743c6d8afc0a146c2702c89a55b18846",
".git/objects/bd/37305169769051f5c9c9e036ffdb30284708da": "299456f6311d37961e2f7b3df7e6ebbf",
".git/objects/bd/dbf48b530f1c4e3e78f278422ed618081fd1d2": "b827384486a2720cb0ee1a44e5e6f4ca",
".git/objects/d1/41c57de0ff36e1a6741bd0451e68d33f3f0a51": "385aedcc1e5b55d04a224616d9789fbb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/369e08cb98615372e8180cd58d09d41a951312": "b1ed24387a73bd5b8447ff5997fb3ee8",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/0ae896ad34e08dede2b5a1e874945f371a8f73": "88aefecc7348c8ad65262f333268f6b9",
".git/objects/f4/fe5366eae9c598dba320ca1ff457030bf4ad5d": "7bbe666c8316b02c66d30628585d9e87",
".git/objects/f3/812c0310d80aa6e6ed09f02502c7dbe0e03d4c": "ad87cab2b396ef9feb4f479bf96427e0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/e83e34684168943f503f515e4f1dc596770e79": "e137d08845d01b2d81a427b6e388414f",
".git/objects/fd/42fe34fbf5245b4c00f89bf3563b4d3b31efd2": "fc22c7ef3813013f1c4798ef59236976",
".git/objects/fd/c4c495b5136d4bcb5189c378b7b71fd443a085": "fd293004ae6ee9261edf4846e496ff44",
".git/objects/e3/dbbc47a843c8e24b78279810ed0105ccd835ed": "18087360f3fd26cc565537eaf3b85f06",
".git/objects/c6/fdf415af1d7f593c5cfcdf29d40a7111c6f4e9": "79909fa890c44be16afe4d59088bae49",
".git/objects/ec/3d9144f35275fbc4ce5efbcc423745f6ac9cde": "3d747919bbad253ab907024fa972021a",
".git/objects/ec/f7b371edf6ab8ec94c019f50729854e48e4d3d": "c706f756493ae6c5f5e76b613d4f2dc2",
".git/objects/18/36a604f68975491c2496d3d748150fe0714231": "19b475a461b5082025f8012ad4fd9c77",
".git/objects/4b/2bfc75499afef50fe693a29eb9c53f57875af9": "f581354b6c18318a150c3a9b53f9e4d1",
".git/objects/4b/b7a48efe4768658b22221f05930d7f4ee522b0": "d58f2c841b37679b8d242b6b53c99fe1",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7d/c95af935e33245afa14c745873be43d2774a41": "a40b3753cb8dae6d3cf16663577c046e",
".git/objects/29/b7ba83b6e7967ae6f3e9421499dda55a3e949c": "9e6fb3d4a3d8ee0b44d2cdf5048e02ca",
".git/objects/7c/ea5907951690e7d3da931f5171a5311fd158cb": "ecfc77fca9020cb1e6944a70dd7b73d5",
".git/objects/1f/ab9c7afa8b4d762ea568b83696230fe1bf1e69": "79489c642879177c34c3dffd9dd79d12",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/9bc95fb74a418f38788e72647490c790d6748e": "2687d895280cdb61766c68a1107e0779",
".git/objects/74/61a42fe4672c17ab9084f25fc81616280799c7": "98af75726d49e2154b38c465069ce1fb",
".git/objects/28/cd13c5efdfd0f0ead97851a8a320b2b70ad851": "b940dcfe62c525c0a335d51ea3ec652a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/b3fb0cf1fe3e4e46cc66bba23fe4a1e40f52e7": "0d83e8e59c870d75e692b62b43cfdb21",
".git/objects/26/290844f15be9df3a0e458afc113c655aece832": "692ccd2907230b3eaac5fd01fda1100d",
".git/objects/2a/b6914702e97afb9d07f0b547e95acbe731e427": "a5329b44f07a389542347ee9cbbcac0d",
".git/objects/43/f264b95beb9acb167274f49f519f8253a582c0": "4882185d3d67c448fb5393b2b87526c6",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0f59943699cf0a2b51beb4f0b7c540dc3866cc": "8ee2ababbe34733f963be33fe253edc1",
".git/objects/6b/ef74f097e6cc6ed238e50135233c1b32a7905d": "d268cfa7201bf9067df693c635dcf64f",
".git/objects/00/f52cc658ec1a1858ef035ba6cebdb2bb952ea9": "541dabb6694a51b26bb68bd1370aa025",
".git/objects/6e/6bbeea76461452045b07c5c579463ce34e2f45": "14048265bf30d6b4afe1b4cee0499184",
".git/objects/96/94f9b76630aaf276f80c5548131c1df52a0b1e": "7375f7162d6041a688b9fcdfdbb86cc1",
".git/objects/54/35dfbafdb537222660381dd42724f4c9218dbf": "8fe43510ea5e571d8d8b4e507bc7487b",
".git/objects/30/1ada9a4ca16cd6a82b5437e1324a1911c1b08d": "8a8ff379ab84549042124f7abda2a42a",
".git/objects/30/3674a2fd1c6c88b73a2f4d65579cf5f888fa91": "f212a57dd6858f010bc7bd987ff47207",
".git/objects/5e/5c9bb35f775ec79c989b3350b67b111e34f996": "c10592c34efca95ab85f293b9c0b8a4b",
".git/objects/37/d59ee3e8d29796227d6c3b7426083e3d52ff3f": "e38ec25f29595a30da2c2f467f3e3e2a",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/668ebdc9f86292afd9998b9bf01ee1839ce599": "6759f20370dfdb06ff8b3f758edf7ab1",
".git/objects/01/6c0757eb5360f755a4aedacc9b9b02e8455e8f": "1485aae6e1d9c4e97642232e00c7d791",
".git/objects/01/8a7552bcb94b22b51f73fe2a7d1b4821e508b4": "e7f27fb48e91beda1afdb85616683831",
".git/objects/99/e6c758ec7738102c9750474c786be90c570c74": "aa678b25816749e23de0c253ff5d1061",
".git/objects/99/c3ed481d432fc711ab4f434f5cc4afe8324725": "83253d32d8413fad2a9cd928a8594246",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/ca7cb0ae1c2e0878bfcb78871ac5561cf3910a": "74903f9095676ca43a86c0c91bde9075",
".git/objects/97/7609fe9fdf3291b0a646531d098023a11d9a7b": "b189f19980522ac5b65d719943b7fae5",
".git/objects/0f/6c748531d1a02cf688cf4c6a744f02f90724a2": "53d8cbdd6a4e00f037f9408c520ab4cd",
".git/objects/0a/bf30a78086424803592d0a4b459a4095ed9480": "0aed617cf61ffecc79da9e4700914eeb",
".git/objects/64/0a95e752207df39bab1f1414db6a2de7cdddab": "0d683c77ace80d1a482256684973299c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/92982f4b5fccb702deb3b52d46cd80ae9b114c": "6bb993287bb49bce649e77f6be60167b",
".git/objects/ba/ccbb10bd4dc0a1ac1c4c03afccc450f07adf5f": "adfba5c5460d7a6e59d1dfe6972310e1",
".git/objects/b8/5a71e6ff9e84f7b427e6c43c65a9a5b9d336c4": "e7b638d036d77594cd391ec22b467ca5",
".git/objects/b1/280e1863dbd8b100e7c9c9b81477d3aa6ea445": "7b6291fddba25d47718e6db107407f08",
".git/objects/dd/6ef7900bba936ee50931a4369ba447cc7574d9": "6bac1b489b760d7e0cc7e05b41d445b2",
".git/objects/b6/f13cec0efa0ddaacd44b5fb458be0204266091": "58495944000b51e5a6c8b4ece8df9096",
".git/objects/a9/3a0c10b66e103e9493b14ac2e0894381bbc939": "28a3f37028ae7f90c04092cbae054f23",
".git/objects/a9/5256f69128250a98ddc984e7ae76adb41dc812": "035ec549131d3cfb5735b1e00f992525",
".git/objects/aa/d2d8cddcc5456df5f49bfb1cc7e6b2575d9dd3": "c2d92352c21cf596be940d73844c5b54",
".git/objects/af/5ed5a4344728afe9bf3e71940369bc3d5fd7f5": "4b9f5df479a390f03c4b768475220c8c",
".git/objects/b7/d052b6ee7cd9ec1d8358aa3b113ff512ee009e": "140305cf8257482101f79fa7843b126f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/f4e8275dc8cb41c65c458c9598bb720fa634c8": "786c96114f57df3d4b41d0a5e0240b35",
".git/objects/de/280dbdd0c84e60462d8e3bdd799213ef1805d2": "25a5c3e3d02816faf09e4ba0228775c2",
".git/objects/b0/21366bfc6e541f60dc1c12a1394a2629dbe0ef": "5b627ec2cb1c59076068559cbf7059ca",
".git/objects/a6/eddeaf0ddd3b75b847bd8bc77fc846b1e60d89": "d96567c4df85f16f8391ce1031a9e71a",
".git/objects/a6/5ef033e8f62e14b56d0304075297e64e351f00": "9ad22e7144ffebb82f50219f3e05d0f0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8e8f09fb642091a70c726c66979b17c2385f9d": "6ee8fa42762413b54b1138c9d03b3a75",
".git/objects/a1/c07fd803b5fc9c54f44e31123ae4fa11e134b0": "9bbc58b4e53378f7a20bf2ad4a1c0e08",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/181497ddaff0c16f4e4ccc8c9ae948148855ad": "1025604c3879edc97764f2de2df30f57",
".git/objects/ef/78e4f10670cb7bbce76b4a64efd8c4856266b2": "62b4890a7b684518e6cbfd56b085241a",
".git/objects/c3/34555d6ccbffe539b16a828807fb7926cb1d58": "44862c7a5f1960fba7034761ee2331d6",
".git/objects/c3/972819c48244f34d55f11213634b2c0a374881": "6e08a19025b5b88dbf6ed2c796151d6c",
".git/objects/ea/584e0af0064dd4ee1f074824c911b86a72e49d": "c0538e86dacb45d9d405136d075203de",
".git/objects/ea/fb4123e83a8312b8c92820422bd9c1dfc10109": "d8f6179997ea1630cb2fc2918df47d81",
".git/objects/e1/6acb791ae6a0484f56c4f9fe6f7c70853ed605": "224e2edc94e914e3b2bd1f2d2bb105c6",
".git/objects/cd/192da18ed241ad3c3d40df8bc47137a98cd1f8": "3bab67e4c81333b9e2860e5167f8e1f8",
".git/objects/f0/f9c5280e4f5ef7c3bb39d91a65571fb1e4386f": "11b7d6d09afa8a5ac4c5447548986c7e",
".git/objects/e8/81d429cc11e8c6e5f26e112b170c94d47b05a8": "2d0903433266cff30009859a0221373c",
".git/objects/ff/46643690bd5ce2c24e716cb71a16f2a34c9c63": "7ca8fa86f7d45ec0e6edc573b22980c4",
".git/objects/c5/11a5c03a3d0d86ae561a460b863eab811af842": "d6c158faf8b14448931432c1efbe315a",
".git/objects/f6/a37e597bca1e34616129216191b6994fd0dfc9": "d9034c3f3ff7b647e40f7fd5fa21b198",
".git/objects/f6/80156dedd7fe7502f5355e1b34e11264d3949d": "bf5152926694e9a8d28ef4cc9b449ae7",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/be37428f3524d963fc3e6107f0c493323a5349": "6ff6406c3ebb7bef203f39ade23188b4",
".git/objects/46/46a901751a3700631fe835fd74be7d334ac3c0": "6a40e525975febb6a72936bf14f3a8d6",
".git/objects/46/016a7e1a65c0bf23a2ad82311ca982865368d0": "9c2cf41248f7320f9a5b3ae00c462312",
".git/objects/46/ae4b3ef39f89f8f9642196b92d831d8abd1822": "774c8528d93edeae27f9844965d2eb18",
".git/objects/2c/5586893e1862c05ade893489177cb5aa09ab6a": "4dfb367d28f8219d7c4fa25aec9e811b",
".git/objects/79/a07255564a7d50a5029052ea0afc16a8dc9692": "fd77beb4942c06d956b6157444bee3a0",
".git/objects/79/efa339fae7bf7fbda3dbfe1f09e5e02d76b0a2": "ffe5488aff2cf2e407dcaf5cc939375d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/59515fee2e020b6914ea57e47803de63b81589": "6c13a87cd85cb9af544b8a4f133723fe",
".git/objects/2d/a31d8f3ef62cd6022f3088af1026661a14b8e8": "03b0fc1654d5879f7c5afdf758c40ad3",
".git/objects/1b/c3f8352051c14f78651cfeedaf2661d5907dfd": "3fce6c0fa6ecd6fa18ce2c90d8bf19f7",
".git/objects/77/a781a4be15a8749329b6fe4e2c0e36202d8710": "36fb64511635c9ed321fcdfc321294de",
".git/objects/77/58266f7a0afea0b66e6a02d0511ede4c4b26c2": "dfe4e2ce83d555cdc6c77003c807aafe",
".git/objects/70/241af8840edc5a7c97de7c13c150ebf6e8907a": "25e9b4994c1c917e8b2a7ada7e8eb22a",
".git/objects/1e/3da3e6dcb7f065c679c4ac32c22be19d4fab6d": "5b97ed37d74259c148498769260f1171",
".git/objects/4a/0a1dcc85bc5f0a9434e61053fcfe02ecd5678c": "8199243f98639fcec8063a6abeb24dbe",
".git/objects/23/8c31daaea7bfc090d352d0087f4e823a1893f9": "e99406cfb7e88fe336d2152a8b2e4ab1",
".git/objects/23/a719cb42273bffa6766d175635e496290accae": "e8aa451190be2295ad86983b3cca545d",
".git/objects/8d/8ec687bf7911cc6cc6d46bf0d49c650a3e046c": "64ca85889c9f331586a16839bd8786fd",
".git/objects/8d/9bf210fff2b44c9b17ad780849453836ffb65a": "b7172001df088adf0b0c3ea94cdaf9aa",
".git/objects/15/db78722b4ee448028b0178f88e0561c3e32ac1": "8540a8133cc66be47295f862581c3918",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/4ba2cc790431738ffc36108da3ba6fafefc057": "7f7962953b9099c120f7e15be9330943",
".git/objects/85/ded56665a18e0c66391bac95d37336c38a8287": "bf55ca9978649c73b6ec702d6d087f94",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/741f615165c594bbbb58b90b740e62133f0346": "115143e9bc5c5841ec163d6d290f7cb6",
".git/objects/1c/7f16b38e7de5b5c878d3ca471f2fa8f04e0d54": "bb2db44783a13844312c56ef61579594",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/47/db85306007534a558d2fbec8a184862ab18bff": "cca2f11d3680dcc80308ce6912bb1d99",
".git/objects/47/98db961dfe7d03a22db4a5130dfc1ed33b1f9a": "6238ffaeadda8f5992e91e9c06358c06",
".git/objects/47/07b0c03fc397244c271d3d4f46868ac58e1773": "8a9aa4b01300584bd84fc5165e8fa1f7",
".git/objects/78/efa750ef8c3a20e946e3f586fa54bd4ddde8e1": "befdbd96937054520953f0f332fee82c",
".git/objects/7a/7e4ec81121c8c6d7fe41e96b80caf398a6b2be": "ac9d9c886778b389ce9beba1a52d6c58",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/6aa4906896310508e92cf4987e45e83e390315": "bd28b207128f27e10b1d2178e61ae7a6",
".git/objects/25/652fbe39035788dcc330a5d8bd329feb400aa5": "4b9a3396b53c26fc2b95bff21aa2b82e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "252c377f72aeb1509757125f1bba9119",
".git/logs/refs/heads/main": "919774dddcc6d0f3f01abb7402167f3b",
".git/logs/refs/remotes/origin/main": "d3be53e0dcd8f98b247415edbe18fd9e",
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
".git/refs/heads/main": "89c235948663cbf3afeecf3c4fa5e421",
".git/refs/remotes/origin/main": "89c235948663cbf3afeecf3c4fa5e421",
".git/index": "564589e18f443d08c688e730e8898969",
".git/COMMIT_EDITMSG": "0753fb365b1abdb9e8bc781bb4f95dcf",
"assets/css/images/close.svg": "95ba0058f5f1db57d0a4360ed1f8d7f0",
"assets/css/main.css": "8c7eb1c8f6e44bd16e10637388cf1b9b",
"assets/css/fontawesome-all.min.css": "dbf9d822cefe851ba6f66e1ad57e8987",
"assets/css/noscript.css": "a191ffb217618b9f5971e6315ca5a350",
"assets/images/DI.jpg": "611dc1e32e866b3ba2ce1276e022746f",
"assets/images/selfi.png": "4a54440c016bc576a82c89a5ebcfed4a",
"assets/images/java.jpg": "4da5b400d50deb400970a91e28408004",
"assets/images/jsp.jpg": "8d152ff667cab03a4f6dd330a42c7f57",
"assets/images/Android.jpg": "f88d3ae43905acfc85734db5cb2cf955",
"assets/images/portfolio.png": "4affc80095519e0906d0931856d8505c",
"assets/images/shahrejahan.png": "277c9d29f613c3456a0f3ee9ab31063e",
"assets/images/attendance.mp4": "1f9fb27a882c7002d693305ed9259dd8",
"assets/images/momayezi_3.gif": "b318c7dd1407c558ba92b157d5a1b839",
"assets/images/attendance.gif": "7b5b764f7b0edbbdbe01b503c77f2673",
"assets/js/breakpoints.min.js": "d2a44a985b34927fd6eaa6d2646bd0fa",
"assets/js/util.js": "31f3e8b0cbedca627878a2b6d868bc14",
"assets/js/jquery.min.js": "220afd743d9e9643852e31a135a9f3ae",
"assets/js/main.js": "e1f2a1237ab0219c1286f5caedb3c1c0",
"assets/js/jquery.scrollex.min.js": "830ab00c7d7a5be0c57f91e35bd32376",
"assets/js/app.js": "fa4ef4b3b2627dde0b8cacc7d3008e12",
"assets/js/browser.min.js": "10ce20feb3ee9e515d601b8ceb8aa3bb",
"assets/AssetManifest.json": "1490c4f928212da8da3214f7fc3f002d",
"assets/rive/day_night.riv": "5e2200495e14f85f4474b221aed8848e",
"assets/logos/flutter_1.svg": "c9bf62b91478c27be001bde2787dc8dd",
"assets/logos/android.svg": "5a63cacf11a6994ed01c25c23fe12ed9",
"assets/logos/java.svg": "2ae4636a86ab462bdd844e0bfd2835f5",
"assets/logos/github.svg": "f26802b8dbef596268dd36546a50a0b0",
"assets/logos/flutter.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/logos/instagram.svg": "57ac944a916b405a92d9ff0d519176b9",
"assets/logos/android_1.svg": "d33d14f9659ffe3c8aa818f9aee319c7",
"assets/logos/stack_overflow.svg": "67b8b5215fb0b4bbb62ff4ac28a10326",
"assets/logos/iran.svg": "1c8a7bbf6cd2df08d0345e266439ea0e",
"assets/logos/english.svg": "37cd4891ba2f99bea4cc6c335dad5ca1",
"assets/logos/kotlin.svg": "ee8ba09a2ab2caa778b3b2d529a9ac8b",
"assets/logos/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/logos/androidStudio.svg": "b3e261060473dc06e5270f0cb0b536b0",
"assets/logos/ml.svg": "4d5a0a24f8d9e78878d5778dd354c46c",
"assets/NOTICES": "1852b34594a158b9e59d18af4eeef33c",
"assets/FontManifest.json": "efc3eedefc38ee251dd0bcd849120c88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "af2e983fff0acca318e405ef3df01848",
"assets/fonts/CustomIcon.ttf": "1822e0ff8819707624958fecf43574d7",
"assets/fonts/Iranian%2520Sans.ttf": "e59513c82578df5dafb6b8da951be9b6",
"assets/fonts/MaterialIcons-Regular.otf": "1c2ed013ea065cbadfe4d7028a0b223a",
"assets/fonts/Didot%2520Regular.ttf": "251039e6849ad977a8bfc40b564dce89",
"assets/assets/images/selfi.png": "4a54440c016bc576a82c89a5ebcfed4a",
"assets/assets/images/portfolio.png": "4affc80095519e0906d0931856d8505c",
"assets/assets/images/shahrejahan.png": "277c9d29f613c3456a0f3ee9ab31063e",
"assets/assets/images/attendance.mp4": "1f9fb27a882c7002d693305ed9259dd8",
"assets/assets/images/momayezi_3.gif": "7c8bacf033501f0d56237a218c786942",
"assets/assets/images/attendance.gif": "7b5b764f7b0edbbdbe01b503c77f2673",
"assets/assets/rive/day_night.riv": "5e2200495e14f85f4474b221aed8848e",
"assets/assets/logos/flutter_1.svg": "c9bf62b91478c27be001bde2787dc8dd",
"assets/assets/logos/android.svg": "5a63cacf11a6994ed01c25c23fe12ed9",
"assets/assets/logos/java.svg": "2ae4636a86ab462bdd844e0bfd2835f5",
"assets/assets/logos/github.svg": "f26802b8dbef596268dd36546a50a0b0",
"assets/assets/logos/flutter.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/assets/logos/instagram.svg": "57ac944a916b405a92d9ff0d519176b9",
"assets/assets/logos/android_1.svg": "d33d14f9659ffe3c8aa818f9aee319c7",
"assets/assets/logos/stack_overflow.svg": "67b8b5215fb0b4bbb62ff4ac28a10326",
"assets/assets/logos/iran.svg": "1c8a7bbf6cd2df08d0345e266439ea0e",
"assets/assets/logos/english.svg": "37cd4891ba2f99bea4cc6c335dad5ca1",
"assets/assets/logos/kotlin.svg": "ee8ba09a2ab2caa778b3b2d529a9ac8b",
"assets/assets/logos/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/logos/androidStudio.svg": "b3e261060473dc06e5270f0cb0b536b0",
"assets/assets/logos/ml.svg": "4d5a0a24f8d9e78878d5778dd354c46c",
"main-icon01.png": "c1e436b1c29204d242c34a8417f01c11",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "66260030a4be625cbbfcaf4f762e86f0",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"};
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
