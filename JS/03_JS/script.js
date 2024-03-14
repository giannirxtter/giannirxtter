//Erstelle eine Variable banana mit dem Wert "Banane"
//Erstelle eine Variable apple mit dem Wert "Apple"

let banana = "Banane";
let apple = "Apple";

//Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
//Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

//Eine Banane hat ein durchschnittliches Gewicht von 0.22 Kilo
// Ein Apfel hat ein durchschnittliches Gewicht von 0.34 Kilo

let weightPerBanana = 0.22;
let weightPerApple = 0.34;

// Gib folgendes aus: Anzahl Bananen/Aepfel pro Kilo, Preis pro Banane/Apfel
//Preis von 8 Aepfeln 
//Preis von 17 Bananen
//Preis von 1 Tonne Aepfel
//Preis von 1 Tonne Bananen

let pricePerApple = applePricePerKilo * weightPerApple;
let priceperBanana = bananaPricePerKilo * weightPerBanana;
let bananaPerKilo = 1 / weightPerBanana;
let applePerKilo = 1 / weightPerApple;
console.log("Anzahl Bananen pro Kilo = " + bananaPerKilo);
console.log("Anzahl Aepfel pro Kilo = " + applePerKilo);
console.log("Preis pro Banane = " + priceperBanana);
console.log("Preis pro Apfel = " + pricePerApple);
console.log("Preis von 8 Aepfel = " + pricePerApple * 8);
console.log("Preis von 17 Bananen = " + priceperBanana * 17);
console.log("Preis von 1 Tonne Aepfel = " + applePricePerKilo * 1000);
console.log("Preis von 1 Tonne Bananen = " + bananaPricePerKilo * 1000);