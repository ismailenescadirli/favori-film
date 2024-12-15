let favoriFilm=[];

for (let i = 0; true; i++) {
    let filmAdi=prompt("Lütfen Film Adı Giriniz.Favorileriniz bu kadarsa lütfen bitir yazınız");
    if (filmAdi.toLowerCase() === 'bitir') {
        break;
    }else{
        favoriFilm[favoriFilm.length]=filmAdi;
         }
}

favoriFilm.sort();


console.log("Favori Filmlerim:",favoriFilm);


