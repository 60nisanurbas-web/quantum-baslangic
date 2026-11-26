// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EtkinlikKayit {

    string public etkinlikAdi = "Quantum Teknoloji Etkinligi";

    mapping(address => string) public kayitlar;

    function kaydol(string memory takmaAd) public {
        kayitlar[msg.sender] = takmaAd;
    }
}
