var dollar = 10650.34;
var euro = 10650.5;
let ism = prompt('Ismingizni kiriting')
let money = prompt('Qancha pulingiz bor');

let mon = prompt('Samalyot chiptasi necha dollar');
let umumiy = prompt('Umumiy yotoqxona xarajatlar necha dollar');
let relax = prompt("Muzey va ko’ngilochar joy xarajatlari necha euro");
alert(`${ism}da ${money} so'm pul bor`);
alert(`Samalyot chiptasi ${mon * dollar} so'm`);
alert(`Umumiy yotoqxona xarajatlari ${umumiy * dollar} so'm`);
alert(`Muzey va ko’ngilochar joy xarajatlari ${relax * euro} so'm`);
let kal = (`${(mon * dollar) + (umumiy * dollar) +(relax * euro)}`);
alert(`Umumiy safarga umumiy borib kelish summasi ${(mon * dollar) + (umumiy * dollar) +(relax * euro)} so'm
${ism}ning umumiy puli ${money} so'm 
Safardan so'ng ${ism}da qoladi ${money - kal} so'm`)
