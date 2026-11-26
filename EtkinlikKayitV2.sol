// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EtkinlikKayitV2 {

    string public etkinlikAdi = "Quantum Teknoloji Etkinligi";

    uint public kapasite = 3;
    uint public toplamKayit = 0;

    mapping(address => string) public kayitlar;
    mapping(address => bool) public kayitliMi;

    function kaydol(string memory takmaAd) public {

        require(bytes(takmaAd).length > 0, "Takma ad bos olamaz");

        require(!kayitliMi[msg.sender], "Zaten kayitlisiniz");

        require(toplamKayit < kapasite, "Kapasite dolu");

        kayitlar[msg.sender] = takmaAd;
        kayitliMi[msg.sender] = true;
        toplamKayit++;
    }
}