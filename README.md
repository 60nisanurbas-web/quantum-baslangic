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



## IP 11 – Benim Yorumum

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
   
## IP 12 – Benim Yorumum
Mnemonic ile Private Key Arasındaki Fark

Mnemonic, cüzdanı yedeklemek ve gerektiğinde yeniden oluşturmak için kullanılan, genellikle 12 veya 24 kelimeden oluşan bir ifadedir.

Private Key ise belirli bir Ethereum hesabının işlemlerini imzalamak için kullanılan gizli anahtardır.

Mnemonic kelimelerinden bir seed oluşturulabilir ve bu seed kullanılarak farklı hesaplara ait birden fazla Private Key türetilebilir.

Bu nedenle mnemonic ve Private Key aynı şey değildir. Mnemonic genellikle birden fazla hesabı kurtarmamızı sağlarken Private Key belirli bir hesabı kontrol etmemizi sağlar.

Her ikisi de gizli tutulmalıdır.

