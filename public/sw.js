if(!self.define){let e,a={};const i=(i,r)=>(i=new URL(i+".js",r).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let n={};const d=e=>i(e,c),f={module:{uri:c},exports:n,require:d};a[c]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(s(...e),n)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1bfc9850-41488c1cce563500.js",revision:"41488c1cce563500"},{url:"/_next/static/chunks/252f366e-027a197a4e578914.js",revision:"027a197a4e578914"},{url:"/_next/static/chunks/572-32a1a6353a3aba90.js",revision:"32a1a6353a3aba90"},{url:"/_next/static/chunks/710-e0c6bddb0cc49ba3.js",revision:"e0c6bddb0cc49ba3"},{url:"/_next/static/chunks/d64684d8-4004e1d76776f2e4.js",revision:"4004e1d76776f2e4"},{url:"/_next/static/chunks/d7eeaac4-5549380d35918e95.js",revision:"5549380d35918e95"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-9a5762106b95faaf.js",revision:"9a5762106b95faaf"},{url:"/_next/static/chunks/pages/_app-5c3a28f5c12a5c20.js",revision:"5c3a28f5c12a5c20"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/activeCompare-e11652a16b239fda.js",revision:"e11652a16b239fda"},{url:"/_next/static/chunks/pages/allgemeineGeschaeftsbedingungen-9fe20de29d2819b1.js",revision:"9fe20de29d2819b1"},{url:"/_next/static/chunks/pages/caradvisor-76e6149b6c2a9a84.js",revision:"76e6149b6c2a9a84"},{url:"/_next/static/chunks/pages/comparePage-6158ec6d99a63578.js",revision:"6158ec6d99a63578"},{url:"/_next/static/chunks/pages/datenschutzerklaerung-680b1f6917777caa.js",revision:"680b1f6917777caa"},{url:"/_next/static/chunks/pages/fahrzeuge/elektrotransporter-nutzfahrzeuge-mit-elektro-antrieb-im-e-transporter-vergleich-09b741f097165d47.js",revision:"09b741f097165d47"},{url:"/_next/static/chunks/pages/impressum-8c37b6b8dcad7fea.js",revision:"8c37b6b8dcad7fea"},{url:"/_next/static/chunks/pages/index-76fa7c461c001847.js",revision:"76fa7c461c001847"},{url:"/_next/static/chunks/pages/kontakt-629eccfa546fafb7.js",revision:"629eccfa546fafb7"},{url:"/_next/static/chunks/pages/magazin-82b47713da7e9203.js",revision:"82b47713da7e9203"},{url:"/_next/static/chunks/pages/magazin/%5Bblogtitle%5D-0969a5b08856aa25.js",revision:"0969a5b08856aa25"},{url:"/_next/static/chunks/pages/magazin/foerderung-09de96f4e1cd49b0.js",revision:"09de96f4e1cd49b0"},{url:"/_next/static/chunks/pages/magazin/foerderung/%5Bblogtitle%5D-27bb6fa5d8e2c219.js",revision:"27bb6fa5d8e2c219"},{url:"/_next/static/chunks/pages/magazin/hersteller-9014aba065a11328.js",revision:"9014aba065a11328"},{url:"/_next/static/chunks/pages/magazin/hersteller/%5Bblogtitle%5D-b542d9cbd522df1f.js",revision:"b542d9cbd522df1f"},{url:"/_next/static/chunks/pages/magazin/neuigkeiten-d79c255a142f2912.js",revision:"d79c255a142f2912"},{url:"/_next/static/chunks/pages/magazin/neuigkeiten/%5Bblogtitle%5D-2dd6fd79547dd63d.js",revision:"2dd6fd79547dd63d"},{url:"/_next/static/chunks/pages/magazin/reviews-edbcaf8f25308b2e.js",revision:"edbcaf8f25308b2e"},{url:"/_next/static/chunks/pages/magazin/reviews/%5Breviewtitle%5D-ba99a909bff8b863.js",revision:"ba99a909bff8b863"},{url:"/_next/static/chunks/pages/magazin/umwelt-d63102cf0eafe95d.js",revision:"d63102cf0eafe95d"},{url:"/_next/static/chunks/pages/magazin/umwelt/%5Bblogtitle%5D-e8e780505915cbbc.js",revision:"e8e780505915cbbc"},{url:"/_next/static/chunks/pages/transporter/%5Bcartitle%5D-6f86de432a383e5a.js",revision:"6f86de432a383e5a"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"9b312e20a4e32339"},{url:"/_next/static/css/7579c09e59b70a33.css",revision:"7579c09e59b70a33"},{url:"/_next/static/css/8e81662017368ba7.css",revision:"8e81662017368ba7"},{url:"/_next/static/css/f8be3711db0b4a49.css",revision:"f8be3711db0b4a49"},{url:"/_next/static/jjw1_L2X2Ep25fPMujHXa/_buildManifest.js",revision:"ef6ba5bbc28bbc76f84a4a4c854ca29f"},{url:"/_next/static/jjw1_L2X2Ep25fPMujHXa/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/jjw1_L2X2Ep25fPMujHXa/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/345-front-1-.ca4c1384.jpg",revision:"8c7535655c6563a973b2cee5a22ef1e5"},{url:"/_next/static/media/ETV-IconsAngebote.23842153.png",revision:"e752794767d65643b3f025fe821587e2"},{url:"/_next/static/media/ETV-IconsVergleichen.28e509ba.png",revision:"5ab6b38a4f02f52993eeee26d7e279b2"},{url:"/_next/static/media/ETV-IconsWunschfahrzeug.7cf930b6.png",revision:"17adafab9fe3cec4b7881ec2059caf55"},{url:"/_next/static/media/aufbautype.c188a230.png",revision:"dd0bd40154e2f35fb378d3992b0f450d"},{url:"/_next/static/media/filter-icon.bf1130bb.png",revision:"66bb6aea038178a34554ed243bc4e2bd"},{url:"/_next/static/media/hoechstgeschwindigkeit.d43e6eb2.png",revision:"55031436743ca208ab259a0db7c90e5a"},{url:"/_next/static/media/hoechstgeschwindigkeit@2x.93537580.png",revision:"dd6222dfaf93ac5c35ddc63470a8eef7"},{url:"/_next/static/media/kasten.39962d38.png",revision:"6e665b6ac2af05141410baaf22f106e6"},{url:"/_next/static/media/kipper.fec14daf.png",revision:"9e9d1067b8a1511b85f5eb2086c7d44b"},{url:"/_next/static/media/koffer.d72e8530.png",revision:"e23384b0caa2476d5194e897a3283f91"},{url:"/_next/static/media/ladezeit@2x.80fc6eb2.png",revision:"c48c370d4ff55da1fdab03e6beeb8aac"},{url:"/_next/static/media/more-svgrepo-com.5b28a66d.png",revision:"da75354050c26a22cfc0c739197c9a57"},{url:"/_next/static/media/preis.62bfbcc8.png",revision:"59ca47a4bb83470fe1f14f89769e0ab5"},{url:"/_next/static/media/price.802e57a8.png",revision:"c0cbcceef5d54d39192edd017642dd58"},{url:"/_next/static/media/pritsche.010eb099.png",revision:"113a0dd72801fc0ff267ab14dd201f1e"},{url:"/_next/static/media/range100.4dca86f0.png",revision:"d2c87d22515a0fac4543c77dc1b2635d"},{url:"/_next/static/media/range150.9f18cbf1.png",revision:"7af4762c49938ecbe24c6a3a4ba6a832"},{url:"/_next/static/media/range200.2606ce4e.png",revision:"fa1bf6846cb8eaf793312de281828b9c"},{url:"/_next/static/media/range50.e801fe0c.png",revision:"9f29b69533c2d2edecd766967c2bec3f"},{url:"/_next/static/media/reichweite.73759bc9.png",revision:"5b5c8a2cc4bd9a489649bebe06255b9d"},{url:"/_next/static/media/reichweite@2x.5b93055a.png",revision:"862f77ebadf263305590ce50c15a7099"},{url:"/_next/static/media/reichweitecopy@2x.616f9052.png",revision:"bb245e765ca3f7b92e521d43e020417d"},{url:"/_next/static/media/weight100.3c346cd5.jpg",revision:"aafac3d9f9fd0a4fd08fe0984ce48f8e"},{url:"/_next/static/media/weight250.932f9aab.png",revision:"8c0c29af6ace1037b31aa9a5e13bd5af"},{url:"/_next/static/media/weight450.ccb25e53.png",revision:"a3a4030095627a253998a715c1658f6a"},{url:"/_next/static/media/weight500.084c13e7.png",revision:"d5ab2eb7c0118d3028b228fa2c80505f"},{url:"/_next/static/media/zuladung.b016f972.png",revision:"d4afa7b2040c1e6fc605fdb93787740e"},{url:"/_next/static/media/zuladung@2x.551eee65.png",revision:"ffd49199cdd71cf9db087fc2adbe23cd"},{url:"/admin/config.yml",revision:"aa757682db3a7ded86204fb6395db2f9"},{url:"/admin/index.html",revision:"b1688442ac7836a21414c29f8e1cbcde"},{url:"/favicon.ico",revision:"041891d2abfd0564372b1886e72d3261"},{url:"/ie11_fallback.html",revision:"26730c08a9a94fd36652c3fe389ace72"},{url:"/images/02-ari-901-seitenansicht.jpg",revision:"675861415e8f240199a752023215e0c5"},{url:"/images/03-ari-901-pritsche-ladefläche.jpg",revision:"e0ebba479862fc1c95baf48d0be00e14"},{url:"/images/07-ari-901-mit-kofferaufbau-laderaum.jpg",revision:"14bb893a6f4a4327aaeb1c857e4f6e66"},{url:"/images/10-ari-901-kastenwagen-seitenansicht.jpg",revision:"0cc9764afd26ef457b838194bb9a9582"},{url:"/images/13-ari-901-innenraum.jpg",revision:"fde160ef7e448f323c568accae9a0be7"},{url:"/images/2020-06-18-garia-utility-0174.jpeg",revision:"ba97f90a4b5259992db5d2917c9aa499"},{url:"/images/345-front-1-.jpg",revision:"8c7535655c6563a973b2cee5a22ef1e5"},{url:"/images/71846-toyota-proace-verso-077.jpg",revision:"4edf3156955f2980a7033611698e97ea"},{url:"/images/71852-toyota-proace-verso-082.jpg",revision:"9f0ed634ed0cf816cdc03128af19ed9a"},{url:"/images/71905-toyota-proace-verso-135.jpg",revision:"9e8c585a62d02072db23b05e9159ad76"},{url:"/images/71923-toyota-proace-verso-152.jpg",revision:"c5e01b42fc87657a6a4c365844090b83"},{url:"/images/71932-toyota-proace-verso-164.jpg",revision:"7b444fa35f1dae2f87669451c4eac5bb"},{url:"/images/71935-toyota-proace-verso-166.jpg",revision:"019dedf52a2939b6c83a3d4d9238f7b7"},{url:"/images/901-kipper.png",revision:"eac45358f230c76562cfd2dd295e5e23"},{url:"/images/ARI-458-Kipper-L-Heck-300x199.jpg",revision:"68ffd188fd0e5b4bc91c562a367443c2"},{url:"/images/ARI_802_Personenfahrzeug_Frontansicht_Garage_56dad4380e.jpg",revision:"b8e55923d4b88e820fe0ccb823f9b6b7"},{url:"/images/Addax-MT-Laubgitter-Wiki-300x200.jpg",revision:"f9b98f1b011ad4d616d22012aab05791"},{url:"/images/Addax-MT-Laubgitter-Wiki.jpg",revision:"a550b1d5b70613bcc3a9b2eae96ef0c2"},{url:"/images/Arrow-right-512.png",revision:"581d34b9daddc9f6eec84accc93c7a0c"},{url:"/images/Chevron_down.png",revision:"bae7d0c0915fda8734379c352acc0a2e"},{url:"/images/ETV-IconsAngebote.png",revision:"e752794767d65643b3f025fe821587e2"},{url:"/images/ETV-IconsReichweite-250.svg",revision:"2f36c35eba62369f2024ea1e7e877093"},{url:"/images/ETV-IconsVergleichen.png",revision:"5ab6b38a4f02f52993eeee26d7e279b2"},{url:"/images/ETV-IconsWunschfahrzeug.png",revision:"17adafab9fe3cec4b7881ec2059caf55"},{url:"/images/ETV-Wortbild-Logo.png",revision:"bdc7b73b5c889cd5af458673cb9842db"},{url:"/images/ETV-Wortbild-Logo.svg",revision:"e67b426e3d348e5fac9be946b644734f"},{url:"/images/Evum-Acar-Front-1024x683.jpg",revision:"a590afe2884fa8d7a045f4763162d82c"},{url:"/images/Evum-Acar-Halle-1024x683.jpg.crdownload",revision:"8f192147c083af459d810c635d5f71ab"},{url:"/images/Maxus-eDeliver-3-Front-2-300x200.jpg",revision:"a6b02fb250876861971e14f215bf2fad"},{url:"/images/Stama-Maestro-Front-300x200.jpg",revision:"de4a400fa586afb28229c2ffe483130e"},{url:"/images/Unconfirmed 797661.crdownload",revision:"938ac9569545374b45dc3977dcc73130"},{url:"/images/VW-e-Crafter-Front-300x225.jpg",revision:"0baadf07519125d5a19f5d3ad47827c5"},{url:"/images/X.png",revision:"78b5560036a5defd75abc4e08178eb8d"},{url:"/images/abt-e-t-6.1-amaturen.jpg",revision:"82d6f0010fc54523797901ce4b004bf9"},{url:"/images/abt-e-t-6.1-grill.jpg",revision:"c50061857b272cd57f093d866712f599"},{url:"/images/abt-e-t-6.1-heck-haus.jpg",revision:"07b451ada670401cb3ec586017a8a8d3"},{url:"/images/abte_t6.1_front_3.jpg",revision:"2eabd1c1830a685b91dd4111ba65bcae"},{url:"/images/acar-kommunal-4.jpeg",revision:"a11f5c015ae12ccbd47ea8aac53abec5"},{url:"/images/acar-lastmile-02-210412.jpg",revision:"61863113e6ba6ffae301b3237d99ff1f"},{url:"/images/addax-mt-laubgitter-wiki.jpg",revision:"a550b1d5b70613bcc3a9b2eae96ef0c2"},{url:"/images/addax.jpg",revision:"913ad52634d480ee46767a59e22eedbb"},{url:"/images/addax.png",revision:"b10f5c9fd62b399349592140a0cecfe1"},{url:"/images/addax_26_pritsche.jpg",revision:"761798d4a6d3308b3343598c3e4997fb"},{url:"/images/addax_innenraum.jpg",revision:"6ea70ca80a8411f9d5ac955312cd70be"},{url:"/images/addax_koffer.jpg",revision:"4a8bfa10f3fa2b79ff71bbc05902ae02"},{url:"/images/addax_motors_kühlkoffer.jpg",revision:"2c57420d89338a4f228d5febc73ca303"},{url:"/images/addax_motors_mulde.jpg",revision:"d4945371cdc060b3215ec6b7441103f4"},{url:"/images/addax_motors_pritsche.jpg",revision:"b44d4510b8effb9d47fd77d63acbbc1f"},{url:"/images/aixam-pro-etruck-boutique.jpg",revision:"8c5906e38372e6e980e26a7081206e95"},{url:"/images/aixam-pro-etruck-koffer.jpeg",revision:"d104b3d616bee58b8bea29565c6f7148"},{url:"/images/aixam-pro-etruck-pritsche.jpeg",revision:"3b959992add7c55807784b654fbdcd5b"},{url:"/images/aixam-pro-innen.jpg",revision:"9891472562c206e58d1745b5f527deaa"},{url:"/images/aixam-pro-pritsche-front.jpg",revision:"fb6d62c2d95ff43f7a03ffee4a69c65f"},{url:"/images/aixam-pro-pritsche.jpg",revision:"fb6d62c2d95ff43f7a03ffee4a69c65f"},{url:"/images/aixam-pro-van-heck.jpg",revision:"9e1b81c8babce6b2bc695c6f5a95067f"},{url:"/images/aixam-pro-van-laderaum.jpg",revision:"f9a42c3b3f20d7e0153da416e17c0ed5"},{url:"/images/akku-blei-saeure-14kwh-elektrofahrzeuge-alke.jpg",revision:"066cb5bdda5d9b369c2ce3a52e72bb3f"},{url:"/images/alke-atx-pritsche.jpg",revision:"29bf6ff05a9ac9bb148e37f150a4c424"},{url:"/images/alke-atx.jpg",revision:"653af22a6ce64a9b96fcb88a01be06b5"},{url:"/images/alke-innenraum.jpg",revision:"dc4c8521210938efa0e8c1f6e1d62c2b"},{url:"/images/alke-laubgitter.jpeg",revision:"72f696ff0edbffc9c5f952e841cf6e82"},{url:"/images/ampnet_photo_20190906_171846.jpg",revision:"1ecef6042f9714023f7ef76e533d1352"},{url:"/images/ampnet_photo_20211006_203073.jpg",revision:"b74db1b359d51153d704765153e0e794"},{url:"/images/ampnet_photo_20211012_203218.jpg",revision:"848502b0fbe2cf9414e29bdf475ed05e"},{url:"/images/ampnet_photo_20211029_203890.jpg",revision:"d7539a1e1ae08129d14a7bbd9555281c"},{url:"/images/ampnet_photo_20211103_204045.jpg",revision:"d0c8df42c939c047ffffbe0c56e23c22"},{url:"/images/ampnet_photo_20211118_204568.jpg",revision:"0804d44baa0188fffc66f35cadf8abee"},{url:"/images/ampnet_photo_20211203_205260.jpg",revision:"ca51cac54c308eaa82cf5720543b2dfd"},{url:"/images/ampnet_photo_20211209_205470.jpg",revision:"158da26565824aade980cda1ccc753dc"},{url:"/images/ampnet_photo_20211216_205608.jpg",revision:"4c7a064308a9c3c3d8cc84ddd670ab65"},{url:"/images/ampnet_photo_20220119_206316.jpg",revision:"22dc98c9e2d1c45095342338c987745d"},{url:"/images/ampnet_photo_20220204_206886.jpg",revision:"b153e15e7a7a5607c349aba5c166724c"},{url:"/images/ampnet_photo_20220224_207562.jpg",revision:"b629f2cd1ed7cb7d406c862fa133d793"},{url:"/images/ampnet_photo_20220309_207896.jpg",revision:"4060329bc96efe293bc48fd45d3bf13f"},{url:"/images/ampnet_photo_20220323_208407.jpg",revision:"fd8105835943d1dc1b997447640e62c7"},{url:"/images/ampnet_photo_20220401_208813.jpg",revision:"e69ea1c800898a0c4c81ba0e2eba9516"},{url:"/images/ampnet_photo_20220408_208934.jpg",revision:"9a6e9a114760aa0f5b114a64c09163ab"},{url:"/images/anschluss.svg",revision:"f1181dd83a4ce7ac95fac33e7f2f9ac9"},{url:"/images/anschluss@2x.png",revision:"dcf31638a1e3fecec5be9ad2b018856c"},{url:"/images/apple-touch-icon.png",revision:"c3c275a027a00b3e9fdd9bbf7cb663c3"},{url:"/images/ari-345-fahrzeugvarianten.jpg",revision:"eef1806b7e211fc5ebd8311e71cfd6ca"},{url:"/images/ari-345-food-truck-heckansicht.jpg",revision:"050ff03fc75bf8d5b86c56427e2a7ee6"},{url:"/images/ari-345-koffer-mit-geöffnetem-laderaum.jpg",revision:"8b551c8d70a37c2d27fb68692eedeabe"},{url:"/images/ari-345-koffer-mit-geöffneter-seitenklappe-und-solarpanel.jpg",revision:"0ee047561860bf2dbb5d6b47fd8d732c"},{url:"/images/ari-345-koffer-mit-solarpanel-nahansicht.jpg",revision:"3ae86510bbb12a0fbc1fa811dc170737"},{url:"/images/ari-345-lastentrike-koffer-front.jpg",revision:"a0f750d499c687f95e5812663cf8c6ca"},{url:"/images/ari-345-lastentrike-koffer-seitenansicht.jpg",revision:"18da8b3da969caf49547b5740e913552"},{url:"/images/ari-345-lastentrike-mit-kippbarer-pritsche.jpg",revision:"803abb614d9f96cd426704e6bf834cc0"},{url:"/images/ari-345-lastentrike-pritsche-mit-europalette.jpg",revision:"5384c81655be8aa0c08f4acbd0aa65f9"},{url:"/images/ari-345-tacho-anzeige.jpg",revision:"1cfd5b54371c62803a7dcd6d7b8de22d"},{url:"/images/ari-345.png",revision:"0f02a0e92df2420e482ff0cdb0e30ea1"},{url:"/images/ari-458-alkoven-mit-seitentuer-und-solarpanel.jpg",revision:"442aca7afc090775cdbaf1afe07417b7"},{url:"/images/ari-458-food-truck-5-.jpg",revision:"4d92c5c0c4b112b9523401bfffde3fdf"},{url:"/images/ari-458-food-truck-5-2-.jpg",revision:"4d92c5c0c4b112b9523401bfffde3fdf"},{url:"/images/ari-458-food-truck-heckansicht-1-.jpg",revision:"7e3a581c2aee84b9df408ca88a1f43c9"},{url:"/images/ari-458-gruppenbilder-21-.jpg",revision:"2f95d5869fda318c5c8c0ac58397b834"},{url:"/images/ari-458-innenraum-fahrerplatz.jpg",revision:"3438b3506098b8072fc5dfd76771c7e7"},{url:"/images/ari-458-kipper-l-mit-laubgitter.jpg",revision:"0e2ebfcb5846ded94dde0221f3e0ac84"},{url:"/images/ari-458-koffer-2-.jpg",revision:"c60e861a5457879956978919c72232e4"},{url:"/images/ari-458-koffer-3-.jpg",revision:"87abbb98e5b187f31acaf42d2c1f9854"},{url:"/images/ari-458-koffer-xl-schornstein-beifahrer-heck.jpg",revision:"583559b355111c2d4e1e959c7e2d6b5b"},{url:"/images/ari-458-kofferaufbau-mit-solarpanel.jpg",revision:"df029bd8df8bacb57001c947f7e8ded5"},{url:"/images/ari-458-laderaum-kofferaufbau.jpg",revision:"7e9b2062a22ed1b03cf71afc1d6b8f20"},{url:"/images/ari-458-mit-planenaufbau.jpg",revision:"b1e28ae375678067129d6ddee3793fa8"},{url:"/images/ari-901-kastenwagen.jpg",revision:"4d8c3ff542235bf8a224c0ddc5fd2d48"},{url:"/images/ari-901-koffer.jpg",revision:"eb4b807fc986ba1b5a61faa28e463d4f"},{url:"/images/ari-901-pritsche-in-kommunalorange.jpg",revision:"427703c4adb4701583ec0523c6f1fa11"},{url:"/images/ari_345_food_truck_l_.png",revision:"ed25ae3958fc87b4517813a600f03203"},{url:"/images/ari_458_pritsche_frontansicht_6e125d42d4.jpg",revision:"9eefbf1f2ab85cf7be53fe273afdfa61"},{url:"/images/ari_458_pritsche_vorne_links_acb13085b0.jpg",revision:"78a694b3d128c9c23989a79d36511fd9"},{url:"/images/ari_901_kipper_titelbilder.png",revision:"006c03d0657f0e12054094684805a135"},{url:"/images/arrow-right-solid.svg",revision:"3aa5dcbccaab655636f1682bfe2345d2"},{url:"/images/atx.jpeg",revision:"ca5172cc8536549a02844485339bf233"},{url:"/images/aufbautype.png",revision:"dd0bd40154e2f35fb378d3992b0f450d"},{url:"/images/axiam-pro-van-front.jpg",revision:"21f5a4a231e8698d5d4c299af6bb0cf7"},{url:"/images/berater.png",revision:"236261938faa56e0564162e8dbab660d"},{url:"/images/beraterNew.jpeg",revision:"56572083aaff37b1e3c4da1995b43941"},{url:"/images/beraterNew.png",revision:"b5f3e9d343fb46793686dab1fb481f0d"},{url:"/images/citroen-ejumpy-fahrmodus.jpg",revision:"d8b42dd1c9d4d384e9af06a93af243dd"},{url:"/images/citroen-ejumpy-frontansicht.jpg",revision:"6dd16ec5020ff5907e8bad4dbe976563"},{url:"/images/citroen-ejumpy-heckansicht.jpg",revision:"264b6fef0b945c9c9daa7b7199d3aa5b"},{url:"/images/citroen-ejumpy-innenraum.jpg",revision:"978f3e4c1aa9523eff812c77fc3cb519"},{url:"/images/citroen-ejumpy-ladeanschluss.jpg",revision:"f74340914613c20773c249fd339ee5fa"},{url:"/images/citroen-ejumpy-laderaum.jpg",revision:"5a71a76938b90cfaf45b8d36068a0287"},{url:"/images/dsc_0002.jpg",revision:"eef1806b7e211fc5ebd8311e71cfd6ca"},{url:"/images/dsc_0071.png",revision:"eccd970a6970b84873bf944cda80d9c6"},{url:"/images/dsc_0190.jpg",revision:"00ac28d9522d3d42f1830a79dfdf888f"},{url:"/images/dsc_0269.jpg",revision:"dff9d5f70cbe9231751cc80061aa917b"},{url:"/images/dsc_0309.jpg",revision:"656e6756f4ad1575cd59d335491f53d1"},{url:"/images/dsc_0376.jpg",revision:"b55e2ef7a7e48dba0c29f650c868d140"},{url:"/images/dsc_0666.jpg",revision:"b601cde67aec712c4c45ba8f04ef63a6"},{url:"/images/dsc_0729.jpg",revision:"7172d86f75da4bfbf25d7000e8dbd07f"},{url:"/images/efa-s-e35-kasten.jpg",revision:"05cedcf17f70865b8e2cb9b578c5e002"},{url:"/images/efa-s-e35-plane.jpg",revision:"7952fdb92fb194a17378beed43d2458c"},{url:"/images/efa-s-e35-pritsche.jpg",revision:"a27bec2e71a4680978550feea1274e4e"},{url:"/images/elektro-gelaendewagen-atx330e.jpeg",revision:"1d5e6ec5f4437c75b55f84ef63ddb658"},{url:"/images/elektro-kuehltransporter-alke.jpg",revision:"8e5bb9a7fec7f5c5480b27a6e5f0f60a"},{url:"/images/elektrotransporter-mit-kipper-alke.jpg",revision:"323771b6112d49b7f9cb45530dc9eed0"},{url:"/images/etv-logo-final-white.png",revision:"43846bb1e7a507e5a62515b903b8cc93"},{url:"/images/etv-logo-final.png",revision:"328a86463a77e1e5e71633fecac01415"},{url:"/images/etv-wortbild-logo.png",revision:"bdc7b73b5c889cd5af458673cb9842db"},{url:"/images/etvberaterwithcar.png",revision:"1b810eb3c6f93355090519cad89959ea"},{url:"/images/evo-front.jpg",revision:"6bb11312d8edc00c51a900d94cadb819"},{url:"/images/evo-koffer-heck.jpg",revision:"886ea0ecd3c75f38e2b5390d2db10f56"},{url:"/images/evo-lade.jpg",revision:"7f0e7805533bfa5411439dd3f417c7d9"},{url:"/images/evo-pritsche.jpg",revision:"69a2d5fcd86b8af484c76b4b0ef404a8"},{url:"/images/evum-a-car-innenraum.png",revision:"a79cb8a68c0e0da46bb2fe344c0036c8"},{url:"/images/evum-a-car.jpg",revision:"27e2577ac42efb7d44eee0b03eae4957"},{url:"/images/evum-acar-front-1024x683.jpg",revision:"a590afe2884fa8d7a045f4763162d82c"},{url:"/images/evum-intralogistik-01.jpg",revision:"67035a692070ebe0516676a08914bb5d"},{url:"/images/evum-intralogistik-03.jpg",revision:"552a99fda55c363fcbfa5a236f121a0b"},{url:"/images/evum-landwirtschaft-01.jpg",revision:"86449b42f1e12aa7870a00e9436797ae"},{url:"/images/evum-landwirtschaft-03.jpg",revision:"c195707544141a2cadd8902836bbd332"},{url:"/images/evum-landwirtschaft-04.jpg",revision:"49dc8bac831ad93e891a57ddf1a082b7"},{url:"/images/ezgif-1-15a65cdf0c.jpg",revision:"d7a0824e9a61fe2989553f270a498048"},{url:"/images/filter-icon.png",revision:"66bb6aea038178a34554ed243bc4e2bd"},{url:"/images/foodtruckfrontoffen.jpg",revision:"f85df1f5f55ac691ae3bc8e84bc801e5"},{url:"/images/frage.jpeg",revision:"eb8eb149996697cbb7a5e0c3ac2544ea"},{url:"/images/g6-kipper.jpeg",revision:"21f5725717bc4a1fc15fab03707bfb94"},{url:"/images/g6-pritsche.jpeg",revision:"0cc40dc5f6d08903f114b433e8c54a4f"},{url:"/images/g6.png",revision:"9b6b65bd545d75eaad75b4090ac28d5c"},{url:"/images/g62.png",revision:"f03e8b84dc9095b2ee882bdfcd6d722a"},{url:"/images/g6_10.jpeg",revision:"3e66974db3b6f9950e4b422d97f9115e"},{url:"/images/g6_goupil.jpeg",revision:"1eb56a2811bd80d66f8ca7457dce5afb"},{url:"/images/garia-utility-city-sc-header.jpeg",revision:"1a8598f73a4e63105fd79e6a525ad7a2"},{url:"/images/garia-utility-ec-mech-cage-side.jpeg",revision:"953cf9cd62047692a4c9831604bff2e6"},{url:"/images/garia-utility-features-galvanized-frame.jpeg",revision:"b00ee07ceb2855af4259037b6902c871"},{url:"/images/garia-utility-features-lithium.jpeg",revision:"26bfadbe0e4a0c1522de25fefe3f2294"},{url:"/images/garia-utility-features-spacious-cabin.jpeg",revision:"b2def1ec5bd22fefec03deb8d9e32df6"},{url:"/images/garia-utility-sc-cargo.jpeg",revision:"78fa14fe3d72805d51b5397150995cfa"},{url:"/images/garia-utility-sc-van-box-.jpeg",revision:"25c93b768c114da04b4fa43ce48e92f4"},{url:"/images/garia-utility-tilting-cargo-bed.jpeg",revision:"9f1249cde652c3f072363f7394dc7646"},{url:"/images/garia-utility-vehicle-park-15.jpeg",revision:"192a5cae1fbed0cc22e178d51cbc776c"},{url:"/images/garia-utility-vehicle-park-9.jpeg",revision:"adb58d8bd6861c82484a65418102bde6"},{url:"/images/gazelle-pritsche.jpg",revision:"3147d75328f2822470a281b84cb1bc1e"},{url:"/images/gazelle-seite.jpg",revision:"6311af40ac53f39d3fd1049a247782f9"},{url:"/images/gdpr.svg",revision:"2de67e34f37baa28d15ccd9abdbcdc33"},{url:"/images/gdpr@2x.png",revision:"2a0d419feca348ba5f8b6b962c2d296a"},{url:"/images/goupil-g2-koffer.png",revision:"7e8c6cde335946d132251abc7de6c133"},{url:"/images/goupil-g2-pritsche.jpg",revision:"115cfa7ab18d995756410f4f8a4a7a89"},{url:"/images/goupil-g2.png",revision:"96426390a111aa5712a5184e85f6429e"},{url:"/images/goupil-g2_.jpg",revision:"e29a47b9e811d4d02395e31b2bd2e4db"},{url:"/images/goupil-g6-van.jpeg",revision:"fea06f7ec0d842824904541538e3b3fe"},{url:"/images/goupil-g6.jpeg",revision:"ddf5088a342fced37155ccc38c2d5725"},{url:"/images/goupil.jpg",revision:"307b13238ddcdaf082f4b37951c3a3b0"},{url:"/images/hoechstgeschwindigkeit.png",revision:"55031436743ca208ab259a0db7c90e5a"},{url:"/images/hoechstgeschwindigkeit.svg",revision:"1dbbe0cdd806f1eb603a093b5c9ff77e"},{url:"/images/hoechstgeschwindigkeit@2x.png",revision:"dd6222dfaf93ac5c35ddc63470a8eef7"},{url:"/images/icon-16x16.png",revision:"14c546a681d1a24b0849f796b48fb08f"},{url:"/images/icon-192x192.png",revision:"2b373930f73e63e96bf171342f9eeb2e"},{url:"/images/icon-32x32.png",revision:"5b4d8502d9772f33858234fe2c352f9c"},{url:"/images/icon-512x512.png",revision:"78c677bdb9ed99ceb62df85f632a2c1d"},{url:"/images/iconStyle2x.png",revision:"e47f2b68374c249ddaa1abfb2dcbcf20"},{url:"/images/kasten.png",revision:"6e665b6ac2af05141410baaf22f106e6"},{url:"/images/kaufberaterCar.png",revision:"9eaf0ae5763029e8b42f7c71d43d0cf8"},{url:"/images/kilopreis.svg",revision:"cd618e55ad4cc6c65d0d91ae00537957"},{url:"/images/kilopreis@2x.png",revision:"8174ad620654f496059230ff894f5cc7"},{url:"/images/kipper.png",revision:"9e9d1067b8a1511b85f5eb2086c7d44b"},{url:"/images/koffer.png",revision:"e23384b0caa2476d5194e897a3283f91"},{url:"/images/kopie-von-ari-458-koffer-3-.jpg",revision:"87abbb98e5b187f31acaf42d2c1f9854"},{url:"/images/ladezeit.svg",revision:"ca9f13a7592e0352f298b5f59a3050aa"},{url:"/images/ladezeit@2x.png",revision:"c48c370d4ff55da1fdab03e6beeb8aac"},{url:"/images/loading.gif",revision:"810b9d1f099b02d64a70980b5e2cef33"},{url:"/images/logo dunkel.svg",revision:"2d10c27c16a807051ee7ff53bc6211a1"},{url:"/images/logo dunkel@2x.png",revision:"02ae2a1528410fbcdaaa8612c53a38c4"},{url:"/images/logo hell.svg",revision:"f8a3ddfc0ecd060a2cf96f4c915c60f2"},{url:"/images/logo hell@2x.png",revision:"b762c16cb8229a2a78493b9bf5da52c1"},{url:"/images/logo.svg",revision:"f22ff28c5467ee733ed52217d1cd6120"},{url:"/images/logo@2x.png",revision:"5b88af8eacd4390c758aea43502235af"},{url:"/images/logos/Aixam-Logo.jpg",revision:"9629fa49c8828c81745f2bda43f731c0"},{url:"/images/logos/Citroen-Logo.png",revision:"7eee70336c7ba67f96e20b11c73ba706"},{url:"/images/logos/Goupil-Logo-scaled.jpg",revision:"26aae76334a2165545c27ecf3bc6ef9f"},{url:"/images/logos/NM-E-Logo.jpg",revision:"00a23634e6ff73b8bdcce688a480886d"},{url:"/images/logos/Nissan-Logo.jpg",revision:"f8d17baba349db2c958bd2d075a8d32e"},{url:"/images/logos/Opel-Logo.png",revision:"d50b0f4c04b9b1852db9d407ad0efc82"},{url:"/images/logos/Peugeot-Logo.png",revision:"6c5e8c3845d92618e2c45ff5f91d8b57"},{url:"/images/logos/Renault-Logo.png",revision:"f89dfb47ad4e8d04cb9de85af61262a2"},{url:"/images/logos/Streetscooter-Logo.jpg",revision:"1d63c1ea8e3d079b5eae5d0c8aac3220"},{url:"/images/logos/man-Logo.png",revision:"6d1498f9ffe878b2fb2a480be1c21267"},{url:"/images/main.jpeg",revision:"9912927734b1d5624f63b20cb5112e38"},{url:"/images/maskable_icon.png",revision:"9621cbdeae6b983e5b0abeb78eecad57"},{url:"/images/maxus-edeliver-3-laderaum.jpg",revision:"cfea3e761ae0afc65e61e5642575dc9b"},{url:"/images/maxus-edeliver3-motor.jpg",revision:"f39216de59fe2e5ee1a2bac521e801a2"},{url:"/images/maxus-edliever3-innenraum.jpg",revision:"1b53a47b3e3dde5e66eb190db27d0d92"},{url:"/images/maxus-ev80-chassis.jpg",revision:"0d8943dc596d28139d99c5989bc4d8b1"},{url:"/images/maxus-ev80-innenraum.jpg",revision:"d02cb886708ac2e6e5565ecb10e3541e"},{url:"/images/maxus-ev80-kasten-front.jpg",revision:"d334fe32b39eb96bb088d929a17cc9d0"},{url:"/images/maxus-ev80-kasten-laderaum.jpg",revision:"c4fb5064a6a1e39f1ba3bcb1aef84b72"},{url:"/images/mb-e-vito-front.jpg",revision:"80a5d6f1992cd70915cc7d8bf6a6904e"},{url:"/images/mb-e-vito-innen-1-1024x683.jpg",revision:"63617181a88379b42bc00f1066b4c9d5"},{url:"/images/mb-e-vito-laderaum-1-1024x683.jpg",revision:"bda18bbfdb99ef007bc384eb0f367b02"},{url:"/images/mb-e-vito-seite-1-1024x683.jpg",revision:"f10c041c1b3d04e5c58891ab2f9dab91"},{url:"/images/mb-e-vito-stecker-1-1024x683.jpg",revision:"470908c820829711e79763ffa50eeb77"},{url:"/images/mb-esprinter-anschluss-2.jpg",revision:"5d877227e1713427629d5519c519d471"},{url:"/images/mb-esprinter-heck.jpg",revision:"64d4b834293cea587296ce8cfafbdd28"},{url:"/images/mb-esprinter-innenraum.jpg",revision:"b24acdd27468a2b8bf760289f4af5f94"},{url:"/images/mb-esprinter-laderaum.jpg",revision:"9995f1032c065e9a3f882f2a6cbfa693"},{url:"/images/mb-esprinter-seite.jpg",revision:"814828150bd73d3e9c9347e913987885"},{url:"/images/medal.png",revision:"f386f45a2f4ebaa761a8ae6d94ea9e2f"},{url:"/images/more-svgrepo-com.png",revision:"da75354050c26a22cfc0c739197c9a57"},{url:"/images/muellabfuhr-elektrofahrzeugen-alke.jpg",revision:"5570c859c947754bc1300da6b6e8c273"},{url:"/images/nme-cargo-van-frontansicht.jpg",revision:"bb57c6e4f9f14fb574101961886e0ac9"},{url:"/images/nme-cargo-van-heckansicht.jpg",revision:"55d42abcf432748baa3a46b6368a710a"},{url:"/images/nme-cargo-van-innenraum.jpg",revision:"36d5f68d12a54d4dff6ed146765f0031"},{url:"/images/nme-cargo-van-laderaum.jpg",revision:"7a64ff2d4bd3a62b7bd989809129a734"},{url:"/images/nme-cargo-van-seitentuer.jpg",revision:"bcac33c8ef64134b19336bfd05c6cda9"},{url:"/images/nmw-cargo-van-ladestecker.jpg",revision:"b4dfd3a518d61e6d5728acef29545873"},{url:"/images/opel-vivaro-e-cargo-antrieb.jpg",revision:"579eee7ac9dd96b8801fd360baaaa8db"},{url:"/images/opel-vivaro-e-cargo-front.jpg",revision:"433ebac5cd3afe8d168730b0ba679cc1"},{url:"/images/opel-vivaro-e-cargo-innenraum.jpg",revision:"8a2349e131552ee53ba3142328d4bef3"},{url:"/images/opel-vivaro-e-cargo-ladung.jpg",revision:"6e1b2310c0418da917abe73cf098e13d"},{url:"/images/opel-vivaro-e-cargo.jpg",revision:"7a32a6b54f319dd990888e1b9098b694"},{url:"/images/paxter-bild.jpg",revision:"55f33b6a5242ca945774a99ac638154b"},{url:"/images/peugeot-e-expert-front.jpg",revision:"33fe967fbe56f80cff4b5feb04019da8"},{url:"/images/peugeot-e-expert-heck.jpg",revision:"0b13722dd29c80d6a9808b7b0ad0b66b"},{url:"/images/peugeot-e-expert-innenraum.jpg",revision:"e3c86d2eab912f90705388b921cd8675"},{url:"/images/peugeot-e-expert-ladeanschluss.jpg",revision:"8962052446a72576313d625df0dbd15d"},{url:"/images/peugeot-e-expert-laderaum.jpg",revision:"f7d76eb0549e3beb1820e1ce8811eee8"},{url:"/images/peugeot-e-partner-antrieb.jpg",revision:"3a55daf17b78bf0fd44ae4562840ca2d"},{url:"/images/peugeot-e-partner-heckansicht-strasse.jpg",revision:"65b572f51cc150062725d070a0e4fb23"},{url:"/images/peugeot-e-partner-heckansicht.jpg",revision:"0dad4b4de52aa9d75a4480d5712ad9c7"},{url:"/images/peugeot-e-partner-innenraum.jpg",revision:"6ea727d9682bb9957ff0e4548fbcbbc7"},{url:"/images/peugeot-e-partner-ladesaeule.jpg",revision:"3c302974e8ee00aec842ea33bcbd6124"},{url:"/images/preis.png",revision:"59ca47a4bb83470fe1f14f89769e0ab5"},{url:"/images/price.png",revision:"c0cbcceef5d54d39192edd017642dd58"},{url:"/images/pritsche.png",revision:"113a0dd72801fc0ff267ab14dd201f1e"},{url:"/images/range100.png",revision:"d2c87d22515a0fac4543c77dc1b2635d"},{url:"/images/range150.png",revision:"7af4762c49938ecbe24c6a3a4ba6a832"},{url:"/images/range200.png",revision:"fa1bf6846cb8eaf793312de281828b9c"},{url:"/images/range50.png",revision:"9f29b69533c2d2edecd766967c2bec3f"},{url:"/images/reichweite copy 2.svg",revision:"3b5f5368a4da8259821e5eb6279cdbbe"},{url:"/images/reichweite copy 2@2x.png",revision:"d6f2d84d88a5be9e2b0837eeeae64ffd"},{url:"/images/reichweite copy.svg",revision:"9334ada5290d3bd35757dac515bd92a7"},{url:"/images/reichweite.png",revision:"5b5c8a2cc4bd9a489649bebe06255b9d"},{url:"/images/reichweite.svg",revision:"26b0654b339a7066214cac9285d188c8"},{url:"/images/reichweite@2x.png",revision:"862f77ebadf263305590ce50c15a7099"},{url:"/images/reichweitecopy@2x.png",revision:"bb245e765ca3f7b92e521d43e020417d"},{url:"/images/renault-master-durchsichtig.jpg",revision:"303f6504536ca921bb4af15f13007340"},{url:"/images/renault-master-front.jpg",revision:"9e7e123c839091e77a9a2cd8a41e0826"},{url:"/images/renault-master-heck-lade.jpg",revision:"c51a4156a8cbfedb45f0a4fef606ca01"},{url:"/images/renault-master-innen.jpg",revision:"68d233e82f0e13d5c965eadf78f1e5e3"},{url:"/images/renault-master-seite.jpg",revision:"dc5f6d7489e0315cf0f02f80805b6217"},{url:"/images/shweinFull.png",revision:"5b4a505ea06febade7978b15cc060902"},{url:"/images/shweinfull.png",revision:"5b4a505ea06febade7978b15cc060902"},{url:"/images/siegel.png",revision:"a092b13ae2f874b3cb7f2943b327c836"},{url:"/images/siegel.svg",revision:"920fe1a0b241aff26fa1182e3ac73762"},{url:"/images/siegel2.png",revision:"5f8d048c8d6eaef5aa4327963515a2c9"},{url:"/images/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/images/stama-maestro-boxen.png",revision:"90c1dfd8ac4a6ddc0a240357f0e5a984"},{url:"/images/stama-maestro-front-1024x683.jpg",revision:"486d46edf9e6e9e628929447cd3c1bf4"},{url:"/images/stama-maestro-kipperpritsche.png",revision:"25c511d5b6379f83f33401fcac66bb3e"},{url:"/images/stama-maestro-laubgitter.png",revision:"815d7647258e4a481dd9d21c9a6169ca"},{url:"/images/stama-maestro-pritsche.jpg",revision:"f7b9ad0e782dae2bb4efad70eff90d8e"},{url:"/images/stama-maestro-tacho.png",revision:"f66de5a5e374540568bc001d1f589043"},{url:"/images/stama-maestro.png",revision:"dd7254dbd12587d2b9dd78a649df64f1"},{url:"/images/streetscooter-fabrik.jpg",revision:"61f0abe0533826dbc2819fa00310ff1a"},{url:"/images/streetscooter-front.jpg",revision:"62a91d8255d55a6142efcf9317f4c0a1"},{url:"/images/streetscooter-heckansicht.jpg",revision:"52b7f66d2cca98f470eaed673fb29a1d"},{url:"/images/streetscooter-work-xl.jpg",revision:"fcfe40c8e4ea1aa08d811a7a1183a4cd"},{url:"/images/streetscooterladeanschluss.jpg",revision:"cf032e887b27f467eeb969e9fc4cd4b7"},{url:"/images/swipe-helper.gif",revision:"603bb285d5b80b360061a05bfdca85d3"},{url:"/images/swipe.gif",revision:"172bec11f07df862c8a8ff80b6bb40a7"},{url:"/images/test.jpg",revision:"76a677ac834b1036d69f26d67f021428"},{url:"/images/test2.svg",revision:"e67b426e3d348e5fac9be946b644734f"},{url:"/images/tropos-able-bunt.jpg",revision:"38d473f0d2a87a2548b3c68b3724864c"},{url:"/images/tropos-able-heck.jpg",revision:"b8fa2ef3b6c5f4bf367bd90cd08cb2a3"},{url:"/images/tropos-able-kipper.jpg",revision:"19833363a206d069d1c015274939faf5"},{url:"/images/tropos-able-koffer-seite.jpg",revision:"9c08a9e2011c8b776d1c8f91dfbd1d9c"},{url:"/images/tropos-able-xl.jpg",revision:"156dbe1b6d36d0918b1d9f017bf62bef"},{url:"/images/vmark.jpeg",revision:"c1defc4a74559f3ddde3471e95f4cd0a"},{url:"/images/vw-abt-e-caddy-antriebstrang.jpg",revision:"3a9ee2181c7982cec9882a81a18bf051"},{url:"/images/vw-abt-e-caddy-front.jpg",revision:"e06a9f8dee408d24e022da46eefb362a"},{url:"/images/vw-abt-e-caddy-ladesaeule-heck.jpg",revision:"364239110ea9c8deb5f008b71a37be76"},{url:"/images/vw-abt-e-caddy-ladesaeule.jpg",revision:"084aa24951237291cba07050182a515f"},{url:"/images/weight100.jpg",revision:"aafac3d9f9fd0a4fd08fe0984ce48f8e"},{url:"/images/weight250.png",revision:"8c0c29af6ace1037b31aa9a5e13bd5af"},{url:"/images/weight450.png",revision:"a3a4030095627a253998a715c1658f6a"},{url:"/images/weight500.png",revision:"d5ab2eb7c0118d3028b228fa2c80505f"},{url:"/images/whatsapp-image-2021-07-01-at-13.01-4-.jpeg",revision:"89bc0030209714804189ee90bc123e11"},{url:"/images/whatsapp-image-2021-07-ari_345-koffer.jpeg",revision:"61cfd330d7b6804f16278784db7e34ee"},{url:"/images/whatsapp-image-2022-04-27-at-22.26.12.jpeg",revision:"b13a07fdb285fe2297ebbc9de3ed2f10"},{url:"/images/zuladung.png",revision:"d4afa7b2040c1e6fc605fdb93787740e"},{url:"/images/zuladung.svg",revision:"9268a7f97ec7895822afedcb6306d854"},{url:"/images/zuladung@2x.png",revision:"ffd49199cdd71cf9db087fc2adbe23cd"},{url:"/images/🎨 Icon Style.svg",revision:"9c4b357c82eabbd7b79ea8f1382aaccb"},{url:"/images/🎨 Icon Style@2x.png",revision:"e47f2b68374c249ddaa1abfb2dcbcf20"},{url:"/manifest.json",revision:"f21cd7abfd71c06d3616c618cc7c7997"},{url:"/robots.txt",revision:"f9e1f690ad780754faaba518663adb86"},{url:"/sitemap.xml",revision:"2eb93e51770533d6cff9062067e0eed5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:r})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
