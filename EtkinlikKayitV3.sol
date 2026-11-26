// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EtkinlikKayitV3 {

    string public etkinlikAdi = "Quantum Teknoloji Etkinligi";

    uint public kapasite = 3;
    uint public toplamKayit = 0;

    address public gorevli;

    mapping(address => string) public kayitlar;
    mapping(address => bool) public kayitliMi;
    mapping(address => bool) public girisYaptiMi;

    event KayitOlusturuldu(address indexed katilimci);
    event GirisYapildi(address indexed katilimci);

    constructor() {
        gorevli = msg.sender;
    }

    function kaydol(string memory takmaAd) public {

        require(bytes(takmaAd).length > 0, "Takma ad bos olamaz");
        require(!kayitliMi[msg.sender], "Zaten kayitlisiniz");
        require(toplamKayit < kapasite, "Kapasite dolu");

        kayitlar[msg.sender] = takmaAd;
        kayitliMi[msg.sender] = true;
        toplamKayit++;

        emit KayitOlusturuldu(msg.sender);
    }

    function girisVer(address katilimci) public {

        require(msg.sender == gorevli, "Yetkiniz yok");
        require(kayitliMi[katilimci], "Katilimci kayitli degil");
        require(!girisYaptiMi[katilimci], "Zaten giris yapildi");

        girisYaptiMi[katilimci] = true;

        emit GirisYapildi(katilimci);
    }
}