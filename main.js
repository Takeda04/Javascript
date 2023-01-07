var dollar = 10650.34;
var euro = 10650.5;
let ism = prompt('Ismingizni kiriting')
let userMoney = prompt('Qancha pulingiz bor');

let ticketPrice = prompt('Samalyot chiptasi necha dollar');
let hotelPrice = prompt('Umumiy yotoqxona xarajatlar necha dollar');
let relax = prompt("Muzey va ko’ngilochar joy xarajatlari necha euro");

alert(`${ism}da ${userMoney} so'm pul bor`);
alert(`Samalyot chiptasi ${ticketPrice * dollar} so'm`);
alert(`Umumiy yotoqxona xarajatlari ${hotelPrice * dollar} so'm`);
alert(`Muzey va ko’ngilochar joy xarajatlari ${relax * euro} so'm`);

let moduleMoney = (`${(ticketPrice * dollar) + (hotelPrice * dollar) + (relax * euro)}`);

alert(`Umumiy safarga borib kelish summasi ${(ticketPrice * dollar) + (hotelPrice * dollar) + (relax * euro)} so'm
${ism}ning umumiy puli ${userMoney} so'm 
Safardan so'ng ${ism}da qoladi ${userMoney - moduleMoney} so'm`);
