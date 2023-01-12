let savol = prompt("To'plagan ballni kiriting...");
if (savol <= 79.9) {
  alert("Siz o'qishga kira olmadingiz");
} else if (savol <= 99.9) {
  alert("Siz super kontrakt asosida o'qishga qabul qilindingiz");
  let superkontrakt = prompt(
    "Kontrakt miqdori yiliga 3000, Qancha pulingiz bor...?"
  );
  if (superkontrakt >= 3000) {
    let mainpul = superkontrakt - 3000,
      natija = `Siz o'qishga kirdingiz.... Sizda ${mainpul}$ qoldi`;
    alert(natija);
  } else if (superkontrakt < 3000) {
    let mainpul = superkontrakt - 3000,
      natija = `Afsuski siz o'qishga kira olmaysiz... Sizga ${mainpul}$ pul yetmadi`;
    alert(natija);
  }
} else if (savol <= 129.9) {
  alert("Tabriklaymiz siz o'qishga kontrakt asosida qabul qilindingiz");
  let kontrakt = prompt(
    "Kontrakt miqdori yiliga 2000$... Qancha pulingiz bor...?"
  );
  if (kontrakt >= 2000) {
    let pul = kontrakt - 2000,
      tolov = `Tabriklaymiz siz o'qishga kirdingiz!!! Sizda ${pul}$ qoldi`;
    alert(tolov);
  } else if (kontrakt < 2000){
    let pul = kontrakt - 2000,
    tolov = `Afsuski siz o'qishga kira olmaysiz!!! Sizga ${pul}$ pul yetmadi`;
    alert(tolov);
  }
} else if (savol <= 180){
    alert("Tabriklaymiz siz grand asosida o'qishga kirdingiz!!!");
} else {
    alert("Noto'g'ri qiymat kiritilgan..?");
}
