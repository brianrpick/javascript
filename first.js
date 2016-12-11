var phone = 5
var acc = 3
var bank = prompt( "Please enter your bank account balance")
// const TAX_RATE = 0.09

function tax(amt){
        amt = amt * TAX_RATE + amt;
        return amt; 
      }
function syntax(){
        console.log( "You're bank has $" + bank.toFixed( 2 ) + " left")
}

while (bank >= phone) {
    console.log( "Youre buying a phone!" );
    bank = bank - tax(phone);
        if (bank >= acc ) {
          bank = bank - tax(acc);
          console.log( "You're adding on an accessory!");
        }
    syntax(bank);
}
