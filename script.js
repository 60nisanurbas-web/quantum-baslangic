import { entropyToMnemonic } from "@scure/bip39";
import {Point} from "@noble/secp256k1"
import { keccak_256 } from "@noble/hashes/sha3.js";
import { HDKey } from "@scure/bip32";
import { mnemonicToSeedSync } from "@scure/bip39";
import { validateMnemonic } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english.js";
const buton = document.getElementById("olusturBtn");

buton.addEventListener("click", function() {
    const entropi = new Uint8Array(16);
    crypto.getRandomValues(entropi);

    const entropiHex = Array.from(entropi)
        .map(sayi => sayi.toString(16).padStart(2, "0"))
        .join("");

    document.getElementById("entropi").textContent = entropiHex;
    const mnemonic = entropyToMnemonic(entropi, wordlist);
const mnemonicAlani = document.getElementById("mnemonic");
const mnemonicButonu = document.getElementById("mnemonicGosterBtn");

// Mnemonic başlangıçta gizli
mnemonicAlani.textContent = "•••••••• (Gizli)";

// Göster / Gizle butonu
mnemonicButonu.onclick = function() {
    if (mnemonicAlani.textContent === mnemonic) {
        mnemonicAlani.textContent = "•••••••• (Gizli)";
    } else {
        mnemonicAlani.textContent = mnemonic;
    }
};
const seed = mnemonicToSeedSync(mnemonic, ""); 

const seedHex = Array.from(seed)
    .map(sayi => sayi.toString(16).padStart(2, "0"))
    .join("");

document.getElementById("seed").textContent = seedHex;
// Seed'den BIP32 ana anahtarını oluştur
const anaAnahtar = HDKey.fromMasterSeed(seed);

// Ethereum için BIP44 türetme yolunu uygula
const turetilenAnahtar = anaAnahtar.derive("m/44'/60'/0'/0/0");
const publicKey = turetilenAnahtar.publicKey;
const publicKeyHex = Array.from(publicKey)
    .map(sayi => sayi.toString(16).padStart(2, "0"))
    .join("");

document.getElementById("publicKey").textContent = publicKeyHex;
// Public Key'i sıkıştırılmamış biçime dönüştür
const acikAnahtar = Point.fromBytes(publicKey).toBytes(false);

// İlk baytı (04) çıkar
const adresVerisi = acikAnahtar.slice(1);

// Keccak-256 hash hesapla
const hash = keccak_256(adresVerisi);

// Son 20 baytı Ethereum adresi olarak al
const adresHex = Array.from(hash.slice(-20))
    .map(sayi => sayi.toString(16).padStart(2, "0"))
    .join("");

document.getElementById("adres").textContent = "0x" + adresHex;

// Private Key'i hexadecimal biçime dönüştür
const privateKeyHex = Array.from(turetilenAnahtar.privateKey)
    .map(sayi => sayi.toString(16).padStart(2, "0"))
    .join("");

// Private Key'i şimdilik gizli tut
document.getElementById("privateKey").textContent = "•••••••• (Gizli)";
const privateKeyAlani = document.getElementById("privateKey");
const privateKeyButonu = document.getElementById("privateKeyGosterBtn");

privateKeyButonu.onclick = function() {
    if (privateKeyAlani.textContent === privateKeyHex) {
        privateKeyAlani.textContent = "•••••••• (Gizli)";
    } else {
        privateKeyAlani.textContent = privateKeyHex;
    }
};
const seedAlani = document.getElementById("seed");
const seedButonu = document.getElementById("seedGosterBtn");

seedAlani.textContent = "•••••••• (Gizli)";

seedButonu.onclick = function() {
    if (seedAlani.textContent === seedHex) {
        seedAlani.textContent = "•••••••• (Gizli)";
    } else {
        seedAlani.textContent = seedHex;
    }
};
});
const testMnemonic = entropyToMnemonic(
    new Uint8Array(16), wordlist
);

console.log("Checksum test sonucu:",
    validateMnemonic(testMnemonic, wordlist)
);
const testKelimeler = testMnemonic.split(" ");

testKelimeler[0] = "zoo";

const degistirilmisMnemonic = testKelimeler.join(" ");

console.log("Degistirilmis checksum sonucu:",
    validateMnemonic(degistirilmisMnemonic, wordlist)
);