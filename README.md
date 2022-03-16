# js-node-express-routes
js web development, node, express, .get, .listen port, creating a basic server intro



------------------------------
Express.js (framework)
Node.js çok genel bir framework js kodlarını browser dışında çalıştırmaya yarıyor
Express ise web app için bir framework node a göre 10 kat daha az kod yazılır
#Creating our first server with Express.js (Bu adımlar her yeni projede yapılmalı)
-  terminal/hyper ve code editör açık olmalı
- create new directory with hyper / Project name // mkdir projeAdi
- cd into the new directory
- inside, create a new directory a new file called server.js // touch server.js
- inialise npm with server.js as startpoing // npm init //entry point: server.js için başlatacaktır 
-- Bu kod da kullanılabilir:
---entry point: (index.js)

- open up the Project with ide // dosyanın olduğu klasördeyken// atom . yazarsan klasörün hepsini atomda açar
- install Express.js // doc a bak:
$ npm install express


•	Express js node un üzerine paket olarak kuruluyor
Express i import/require etme:

Request = req, response = res olarak kısaltıyorlar, sonuçta fonksiyona istediğimiz parametre ismini verebiliriz.
Nodemon: server’ı otomatik başlatmayı kolaylaştırıyor // npm paketi, code sayfasındaki değişiklikleri takip edip, serverı açıp kapatıyor. // nereye yüklendiği önemli değil
Yükleme: npm install -g nodemon
Yükledikten sonra: hyper/terminalde server.js dosyasının konumuna gidip, nodemon server.js komutunu çalıştır
Serverın başladığını anlamak için
-	Tarayıcıya localhost:3000 yazarssak hata alırız // “Cannot GET/” hatası
-	Tarayıcı 3000 portuna istek atıyor ama geri dönüş alamıyorum diyor
Handling Requests and Reponses: the GET Requests
# Biz bir sitenin adresini tarayıcıya yazdığımızda, tarayıcı o domain adresine bağlı serverdaki root noktasına (“/”) request gönderiri / istek atar, karşılığında veri almayı umar
# sitenin serverı sürekli dinlediği bu port/noktasındaki isteği gördüğünde, html, css, js verilerini tarayıcıya gönderir
Şuan bizim serverımız herhangi bir şey göndermiyor.

hyper/terminal:
node server.js // terminal durdu işlem yapmıyor çünkü portu dinliyor // ctrl + c ile çıkarız
