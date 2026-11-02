const dataFilm = []

function tambahDataFilm(nama,durasi,genre,tahun){
  dataFilm.push({nama: nama,durasi: durasi,genre: genre,tahun: tahun});
}

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("Avenger", "2 jam", "action", "2019")
tambahDataFilm("X-Men", "2 jam", "action", "2004")
tambahDataFilm("ju-on", "2 jam", "horror", "2004")
console.log(dataFilm)