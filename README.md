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


