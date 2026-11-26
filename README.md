 Quantum Başlangıç

Projenin Amacı

Bu projenin amacı blokzincir teknolojisinin temellerini öğrenmek ve Ethereum üzerinde uygulamalar geliştirmektir.

Öğrenilecek Konular

* Blokzincir teknolojisi
* Git ve GitHub
* Ethereum ve MetaMask
* Kriptografik cüzdanlar
* Solidity ve akıllı sözleşmeler
* Sepolia test ağı

Kullanılan Araçlar

* Visual Studio Code
* Git
* GitHub
* MetaMask
* Remix IDE

ARAŞTIRMA NOTLARI:

...

## IP 11

Git: Dosyalarımızda yaptığımız değişiklikleri takip etmemizi sağlayan bir sürüm kontrol sistemidir. Önceki sürümlere dönmemize yardımcı olur.

GitHub: Git ile oluşturduğumuz projeleri internet üzerinde saklayabildiğimiz ve paylaşabildiğimiz bir platformdur.

README: Projenin amacını, içeriğini ve kullanımını açıklayan dosyadır. Genellikle README.md adıyla oluşturulur.

Commit: Projemizde yaptığımız değişiklikleri Git geçmişine kaydetme işlemidir.

Push: Bilgisayarımızdaki Git kayıtlarını GitHub gibi uzak bir depoya gönderme işlemidir.

Remix IDE: Solidity dilinde akıllı sözleşmeler yazmak, derlemek, test etmek ve blokzincire dağıtmak için kullanılan tarayıcı tabanlı bir geliştirme ortamıdır.

Solidity: Ethereum gibi uyumlu blokzincirlerde çalışan akıllı sözleşmeler geliştirmek için kullanılan bir programlama dilidir.



## IP 11 – Benim Yorumum:

Git, GitHub, Visual Studio Code, MetaMask ve Remix IDE araçlarının hepsini ilk kez kullandım. Başlangıçta bu araçların ne işe yaradığını bilmiyordum. Yapay zekadan yardım alarak kurulumları adım adım gerçekleştirdim. 

Visual Studio Code üzerinde proje klasörümü ve README dosyamı oluşturdum. Git komutlarını kullanarak değişikliklerimi kaydettim ve GitHub'a gönderdim. MetaMask cüzdanımı kurup Sepolia test ağını açtım. Ayrıca Remix IDE'yi inceleyerek Solidity dosyalarının nerede oluşturulduğunu öğrendim.



## IP 12 - Ethereum Eğitim Cüzdanı Oluşturucu

Bu projede JavaScript kullanarak eğitim amaçlı bir Ethereum cüzdanı oluşturma uygulaması geliştirdim.

Cüzdan Oluşturma Aşamaları

1. Entropi: crypto.getRandomValues() ile kriptografik olarak güvenli 128 bit rastgele veri üretilir.
2. Mnemonic: entropyToMnemonic() fonksiyonu ve @scure/bip39 kütüphanesi kullanılarak entropi, BIP39 standardına uygun 12 İngilizce kelimeye dönüştürülür.
3. Seed: mnemonicToSeedSync() fonksiyonu ile mnemonic kelimelerinden 512 bit seed üretilir. Ek passphrase kullanılmaz.
4. Private Key: HDKey.fromMasterSeed() ve derive() fonksiyonlarıyla seed’den m/44'/60'/0'/0/0 türetme yolu kullanılarak Ethereum özel anahtarı elde edilir.
5. Public Key: Türetilen anahtardan açık anahtar elde edilir. Ethereum adresi hesaplanırken açık anahtarın sıkıştırılmamış biçimi kullanılır.
6. Ethereum Adresi: Açık anahtarın ilk baytı çıkarılır, kalan veriye keccak_256() uygulanır ve hash sonucunun son 20 baytı alınarak Ethereum adresi oluşturulur.

Kullanılan Kütüphaneler

* @scure/bip39: Mnemonic ve seed oluşturma.
* @scure/bip32: Hiyerarşik anahtar türetme.
* @noble/secp256k1: Açık anahtar dönüşümü.
* @noble/hashes: Keccak-256 hesaplama.

Güvenlik

Uygulama eğitim amaçlıdır. Mnemonic, seed ve özel anahtar varsayılan olarak gizlenir ve kullanıcı isterse ekranda görüntülenebilir. Gizli bilgilerin gerçek kullanımda paylaşılmaması gerekir.
   
## IP 12 – Benim Yorumum: Mnemonic ile Private Key Arasındaki Fark

Mnemonic, cüzdanı yedeklemek ve gerektiğinde yeniden oluşturmak için kullanılan, genellikle 12 veya 24 kelimeden oluşan bir ifadedir.

Private Key ise belirli bir Ethereum hesabının işlemlerini imzalamak için kullanılan gizli anahtardır.

Mnemonic kelimelerinden bir seed oluşturulabilir ve bu seed kullanılarak farklı hesaplara ait birden fazla Private Key türetilebilir.

Bu nedenle mnemonic ve Private Key aynı şey değildir. Mnemonic genellikle birden fazla hesabı kurtarmamızı sağlarken Private Key belirli bir hesabı kontrol etmemizi sağlar.

Her ikisi de gizli tutulmalıdır.



## İP 13 

## MetaMask ile Ethereum Adresi Karşılaştırması

Geliştirdiğim eğitim cüzdanı uygulamasındaki Ethereum adresi ile MetaMask’teki Ethereum adresini karşılaştırdım. Karşılaştırma sonucunda iki adresin eşleştiğini gözlemledim.

Karşılaştırma sonucunu ekran görüntüsüyle belgeledim. Güvenlik nedeniyle ekran görüntüsünde mnemonic, seed, entropi ve private key bilgilerine yer vermedim.
![Adres Karşılaştırması](ip13-adres-karsilastirma.png)

## Checksum Deneyi

BIP39 doğrulama işlemi için @scure/bip39 kütüphanesinin validateMnemonic fonksiyonunu kullandım.

* Orijinal örnek mnemonic doğrulandığında true sonucu alındı.
* İlk kelime, BIP39 kelime listesinde bulunan başka bir kelimeyle değiştirildiğinde false sonucu alındı.

Bu deneyde checksum mekanizmasının kelime değişikliğinden kaynaklanan hatayı tespit edebildiğini gözlemledim. Ancak tek kelime değişikliği her zaman geçersiz bir mnemonic oluşturmaz. Bu nedenle checksum’ın hata yakalama kapasitesi sınırlıdır.

## IP 13 - Benim Yorumum: Geçerli ve Güvenli Mnemonic Arasındaki Fark

Geçerli bir mnemonic ile güvenli biçimde üretilmiş bir mnemonic aynı şey değildir. Bir mnemonic’in geçerli olması, BIP39 kelime listesine ve checksum kurallarına uygun olduğunu gösterir. Ancak bu durum, mnemonic’in güvenli ve tahmin edilemez olduğunu kanıtlamaz.

Yaptığım deneyde sabit test verisinden oluşturulan mnemonic doğrulamadan geçmiştir. Fakat tahmin edilebilir olduğu için güvenli değildir.

Bu nedenle güvenli bir mnemonic oluşturmak için kriptografik olarak güvenli rastgelelik kullanılmalıdır.



## İP 14: Test ETH Kaynağını Kendin Bul

Faucet Araştırması ve Test ETH Edinme

MetaMask üzerinde Sepolia test ağını seçtim. Ethereum’un resmî dokümantasyonundan faucet kaynaklarını araştırdım.

Alchemy, Google Cloud, QuickNode ve Sepolia PoW Faucet seçeneklerini inceledim. Gerçek ETH bakiyesi gerektiren seçenekleri tercih etmedim.

Sepolia PoW Faucet kullanarak herhangi bir satın alma işlemi yapmadan 0.5325 test ETH edindim. Gelen bakiyeyi MetaMask üzerinden kontrol ettim ve işlemin başarılı olduğunu Sepolia Etherscan üzerinden doğruladım.

* Faucet adresi: https://sepolia-faucet.pk910.de/
* Ağ: Ethereum Sepolia
* Alınan miktar: 0.5325 SepETH
* İşlem durumu: Success
* Blok numarası: 12204094

PoW Faucet ile Sepolia’da Blok Üretmenin Farkı

PoW faucet, ücretsiz test ETH dağıtmak için kullanıcının tarayıcısında hesaplama işlemleri gerçekleştirir. Bunun amacı kötüye kullanımı ve botları önlemektir.

Bu hesaplamalar Sepolia ağında blok üretildiği anlamına gelmez. Sepolia, Proof of Stake konsensüs mekanizmasını kullanır. Faucet üzerindeki hesaplamalar yalnızca test ETH dağıtımının bir koşuludur.

Benim Yorumum: Adresi Paylaşmak Neden Harcama Yetkisi Vermez?

Cüzdan adresi, varlık almak ve blokzincir üzerindeki işlemleri görüntülemek için kullanılan herkese açık bir bilgidir. Ancak bir hesaptan varlık göndermek için işlemin ilgili private key ile imzalanması gerekir. Bu nedenle yalnızca cüzdan adresini bilen bir kişi hesaptaki varlıkları harcayamaz.



## İP 15: 

## Test USDC Edin ve İki Transferi Karşılaştır

Amaç: Native varlık ile token arasındaki farkı uygulamalı olarak gözlemlemek.

1. Test USDC edinme

Circle’ın resmî Testnet Faucet sayfasından Ethereum Sepolia ağını seçerek 20 test USDC edindim. Circle’ın resmî dokümantasyonundan Ethereum Sepolia USDC sözleşme adresini buldum.

Faucet: https://faucet.circle.com/

Token sözleşme adresi:

0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238

Bu sözleşme adresini MetaMask’e özel token olarak ekledim ve 20 USDC bakiyemi görüntüledim.

2. İkinci eğitim hesabını oluşturma

MetaMask üzerinde Account 2 isimli ikinci bir eğitim hesabı oluşturdum. Account 1 hesabımdan Account 2 hesabıma 0.01 Sepolia ETH ve 5 test USDC gönderdim. Sonraki işlemler için ilk hesabımda yeterli miktarda test ETH bıraktım.

Her iki işlemin de başarılı olduğunu Sepolia Etherscan üzerinden doğruladım.

3. İşlemlerin karşılaştırılması

Özellik	        ETH transferi	         USDC transferi
Status	        Success	                 Success
From	        Account 1	             Account 1
To	            Account 2	             USDC sözleşmesi
Value	        0.01 ETH	             0 ETH
Input Data	    0x	                     transfer()
Transaction Fee	0.0003069000034782 ETH	 0.000227668502580243 ETH
Block	        12204971	             12204979
Event	        Transfer	             Transfer
Log Data	    10000000000000000	     5000000

ETH transferinde To alanında doğrudan alıcı hesabın adresi bulunurken USDC transferinde USDC akıllı sözleşmesinin adresi bulunmaktadır.

USDC transferinde Value alanının 0 ETH olmasının nedeni, Value alanının native ETH miktarını göstermesidir. Gönderilen 5 USDC ise token transferi ve event log alanlarında görülmektedir.

ETH işleminde Input Data alanı boş (0x) iken USDC işleminde akıllı sözleşmenin transfer fonksiyonu çağrılmıştır.

Her iki işlemde de Transfer event kaydı bulunmaktadır. ETH işlemindeki kayıt sistem adresinden, USDC işlemindeki kayıt ise USDC sözleşmesinden gelmektedir.

4. Tokenı cüzdanda göstermek ile zincirde almak arasındaki fark

Tokenı MetaMask’e eklemek, blokzincirde yeni bir işlem gerçekleştirmez ve token bakiyesini değiştirmez. Yalnızca mevcut token bakiyesinin cüzdan arayüzünde görüntülenmesini sağlar.

Tokenı zincirde almak ise ilgili token bakiyesinin blokzincir üzerinde değişmesi anlamına gelir. Circle faucet üzerinden aldığım USDC, MetaMask’e özel token olarak eklemeden önce de zincirde hesabıma ait olabilir.

## IP 15 - Benim yorumum:

USDC gönderirken ücretin hangi bakiyeden karşılandığını nasıl gördünüz?

5 USDC gönderdiğim işlemi Etherscan üzerinden incelediğimde Transaction Fee alanında 0.000227668502580243 ETH yazdığını gördüm. Bu sayede USDC transferi yapmama rağmen işlem ücretinin USDC bakiyemden değil, Sepolia ETH bakiyemden karşılandığını öğrendim. Ethereum ağında token transferlerinin işlem ücretleri ağın native varlığı olan ETH ile ödenmektedir.

## IP 16 

## İkinci Kayıt Denemesi
Aynı cüzdan adresiyle register fonksiyonunu ikinci kez çağırmayı denedim. Remix, gas tahmini sırasında “Bu cuzdan zaten kayitli” hatasını verdi.

Hata, işlem blokzincire gönderilmeden önce oluştu. Bu nedenle yeni bir transaction hash oluşmadı ve gas ücreti harcanmadı.

Bu deney sonucunda akıllı sözleşmenin aynı cüzdan adresinden birden fazla kayıt yapılmasını engellediğini doğruladım.

## Kontrol Sitesi ile Doğrulama

Takımın kontrol sitesini açtım ve kaydımın listede göründüğünü doğruladım.

## IP 16 - Benim Yorumum

İsmin kontrol sitesinde görünmesi ile blokzincirde kaydedilmiş olması aynı kontrol değildir. Blokzincir asıl kayıt kaynağıdır. Web sitesi ise bu kayıtları okuyup kullanıcıya gösteren bir arayüzdür. Web sitesinde bağlantı veya veri görüntüleme hatası oluşsa bile blokzincirdeki başarılı kayıt korunur.



## İP 17 – Explorer ile Kaydı Doğrula

Sepolia Etherscan üzerinden takım sözleşmesine yaptığım başarılı kayıt işlemini inceledim.

* From: İşlemi gönderdiğim cüzdanın adresi
* To: Kayıt işlemini gerçekleştirdiğim QuantumKayit akıllı sözleşmesinin adresi
* Gas Price: Kayıt işleminin gerçekleştirilmesi sırasında kullanılan hesaplama birimi miktarı
* Transaction Fee: İşlemin gerçekleştirilmesi için cüzdanımdan ödenen Sepolia ETH miktarı
* Nonce: Cüzdanımdan gönderilen işlemlerin sıra numarasını ifade eder
* Status: İşlemin başarılı olup olmadığını gösterir
* Input Data: Akıllı sözleşmeye gönderdiğim fonksiyon ve parametre bilgilerinin kodlanmış hâli 

## İP 17 -Benim Yorumum

Input Data, register fonksiyonuna hangi bilgiyi gönderdiğimi gösterdi. 
Registered event, kayıt işlemi sırasında hangi olayın gerçekleştiğini gösterdi. 
Mevcut state ise kayitliMi ve tumKayitlar fonksiyonları aracılığıyla kaydımın sözleşmede bulunup bulunmadığını doğrulamamı sağladı.

Bu üç bilgi sırasıyla işlemin girdisini, gerçekleşen olayı ve sözleşmenin güncel durumunu gösterdi.

git
## İP 18 
- Deploy Transaction Hash:0x3c08dfcbf50a7ec1512b5f91be7fcaa47f0498eb95d64675558f718b27464bd7

## Yeni Sözleşmenin Başlangıç Durumu

- kayitliMi: false
- tumKayitlar: Boş liste

Yeni oluşturduğum sözleşmede henüz hiçbir kayıt
bulunmadığını doğruladım. Takım sözleşmesindeki
kayıtlar yeni sözleşmeye aktarılmadı.

## Deploy ve At Address / Add Contract Farkı

Deploy, blokzincir üzerinde yeni bir akıllı sözleşme
oluşturur. Yeni bir sözleşme adresi oluşur ve gas
ücreti ödenir.

At Address / Add Contract ise daha önce yayınlanmış
bir sözleşmeye adresi üzerinden bağlanmayı sağlar.
Yeni bir sözleşme oluşturmaz ve bağlanmak için
gas ücreti ödenmez.

## İP 19 - Benim Yorumum

Her akıllı sözleşmenin kendine ait bir adresi ve
veri depolama alanı vardır. Kaynak kodları aynı olsa
bile sözleşmelerin tuttukları veriler birbirinden
bağımsızdır. Bu nedenle takım sözleşmesindeki
kayıtlar kendi oluşturduğum sözleşmeye otomatik
olarak aktarılmaz.

## Remix ve Etherscan
Remix ve Etherscan farklı arayüzler olsa da aynı
blokzincir ağı üzerindeki akıllı sözleşmelerle
etkileşim kurabilir. MetaMask aracılığıyla işlemler
imzalanır ve Sepolia ağına gönderilir.

## Benim Yorumum
Aynı cüzdan takım sözleşmesine ikinci kez
kaydolamazken kendi sözleşmeme kaydolabildim.
Çünkü iki sözleşmenin adresleri ve depolama
alanları farklıdır. Her sözleşme kendi kayıtlarını
bağımsız olarak tutar.
Kendi sözleşmemdeki kayıt takımın kontrol sitesinde
görünmez. Çünkü site yalnızca takım sözleşmesini izler.
 


 ## İP 20 

## Test Sonuçları
- Account 1: Katilimci1
- Account 2: Katilimci2
- Her iki kayıt başarıyla oluşturuldu ve okundu.

## Verinin Saklanması
Kayıtlar mapping(address => string) yapısı
kullanılarak sözleşmenin storage alanında tutulur.

## msg.sender'ın Görevi
msg.sender, fonksiyonu çağıran hesabın adresini
belirtir. Böylece kullanıcı yalnızca kendi adresi
adına kayıt yapabilir. 

## IP 20 - Benim Yorumum

Bu ilk sürümde boş takma ad girilmesi, aynı
hesabın tekrar kayıt yaparak önceki kaydını
değiştirmesi ve sınırsız katılımcı kaydı
engellenmemektedir.



## IP 21 – Kapasite ve Kayıt Kuralları

Test Sonuçları

Deneme	                        Beklenen sonuç	    Gözlemlenen sonuç
İlk geçerli kayıt	            Kabul, toplam 1 	Kabul, toplam 1 oldu
Aynı hesaptan tekrar kayıt   	Ret, toplam 1	    Ret, toplam 1 oldu
Yeni hesaptan boş ad        	Ret, toplam 1	    Ret, toplam 1 oldu
İkinci ve üçüncü geçerli kayıt	Kabul, toplam 3	    Kabul, toplam 3 oldu
Dördüncü farklı hesabın kaydı	Ret, toplam 3	    Ret, toplam 3 oldu

Bütün testler Remix VM ortamında başarıyla gerçekleştirildi. Reddedilen işlemler toplam kayıt sayısını değiştirmedi.

## IP 21 - Benim Yorumum

Adres başına sınır neden gerçek kişi sayısını garanti etmez?

Bir kişi birden fazla cüzdan adresine sahip olabilir. Akıllı sözleşme kişilerin gerçek kimliklerini değil, cüzdan adreslerini kontrol eder. Bu nedenle aynı kişi farklı adresler kullanarak birden fazla kayıt oluşturabilir.



## İP 22 – Görevli ve Giriş Kontrolü

Eklenen Özellikler

* Sözleşmeyi deploy eden adres görevli olarak belirlendi.
* Yalnızca görevlinin giriş onayı vermesi sağlandı.
* Kayıtsız katılımcıya giriş verilmesi engellendi.
* Aynı katılımcının ikinci kez giriş yapması engellendi.
* Katılımcının giriş durumu dışarıdan okunabilir hale getirildi.
* Başarılı kayıt ve giriş işlemleri için KayitOlusturuldu ve GirisYapildi eventleri oluşturuldu.

## Test Sonuçları

İlk geçerli kayıt	                
Beklenen sonuç : Kabul, toplam 1 	       
Gözlemlenen sonuç : Kabul, toplam 1 oldu

Aynı hesaptan tekrar kayıt	        
Beklenen sonuç : Ret, toplam 1    	       
Gözlemlenen sonuç : Ret, toplam 1 oldu

Boş takma adla kayıt	            
Beklenen sonuç : Ret, toplam 1    	       
Gözlemlenen sonuç : Ret, toplam 1 oldu

İkinci ve üçüncü geçerli kayıt	    
Beklenen sonuç : Kabul, toplam 3 	       
Gözlemlenen sonuç : Kabul, toplam 3 oldu

Dördüncü farklı hesabın kaydı	    
Beklenen sonuç : Ret, toplam 3    	       
Gözlemlenen sonuç : Ret, toplam 3 oldu

Görevlinin kayıtlı kişiye giriş vermesi	                    
Beklenen sonuç : Başarı ve event	           
Gözlemlenen sonuç : Başarı, true ve event oldu

Görevli olmayan hesabın giriş vermesi	                    
Beklenen sonuç : Ret, durum değişmez	       
Gözlemlenen sonuç : Ret, false oldu

Kayıtsız adrese giriş verilmesi	    
Beklenen sonuç : Ret	                       
Gözlemlenen sonuç : Ret, false oldu

Aynı katılımcıya ikinci giriş	    
Beklenen sonuç : Ret, ilk giriş korunur	   
Gözlemlenen sonuç : Ret, true oldu 

* * *

Bütün testler Remix VM ortamında başarıyla gerçekleştirildi. Başarılı kayıt ve giriş işlemlerinde ilgili eventlerin oluştuğu doğrulandı.

## IP22 - Benim Yorumum

Arayüzde düğmeyi gizlemek yerine yetkiyi sözleşmede denetlemek neden gerekir?

Arayüzde bir düğmenin gizlenmesi, kullanıcının ilgili fonksiyonu doğrudan çağırmasını engellemez. Kullanıcı Remix veya başka araçlar üzerinden akıllı sözleşmeyle doğrudan etkileşime geçebilir. Bu nedenle yetki kontrolü sözleşmenin içerisinde yapılmalıdır. Böylece hangi arayüz kullanılırsa kullanılsın yetkisiz işlemler engellenir. 



