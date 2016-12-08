var bank = 100
var phone = 6
const TAX_RATE = 0.09

while (bank >= phone) {
     console.log("Youre buying a phone!");
     bank = bank - (phone + (  phone * TAX_RATE ));
     console.log( "Youre bank has" + bank.toFixed( 2 ) + "left");
}