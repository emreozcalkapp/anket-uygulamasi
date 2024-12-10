// Soruları ve seçenekleri içeren bir array oluştur.
// Kullanıcıdan her soru için cevap al ve sonuçları obje olarak tut.

let sorular = [
{
    soruSor: "Yaşınız nedir ?",
    secenekler: ["18-24", "25-34", "35-44", "45+"]
},
{
    soruSor: "Cinsiyetiniz nedir?",
    secenekler: ["Erkek", "Kadın"]
},
{
    soruSor: "En sevdiğiniz tatlı nedir ?",
    secenekler: ["Çikolatalı", "Meyveli", "Sütlü"]
},
{
    soruSor: "En çok hangi tür müzik dinlersiniz ?",
    secenekler: ["Pop", "Rock", "Elektronik", "Klasik", "Rap"]
}
];
let kullaniciCevap = {};
for(let index = 0; index < sorular.length; index++) {
    const soru = sorular[index];

    kullaniciCevap = prompt(`${soru.soruSor} \n ${soru.secenekler}`);
    console.log(`${soru.soruSor} ${kullaniciCevap}`);
}