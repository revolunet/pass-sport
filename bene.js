// Génération de 7,5 million de code dans un fichier
const fs = require('fs')
const csv = require('csv-parser')
global.window = {}

const streamCsv = fs.createWriteStream('code2023.csv')
console.log('Start reading')
const  generateRandomString = (num) => {
  const characters ='ABCDEFGHJKLMNPQRSTUVWXY';
  const charactersLength = characters.length;
  let result1='';
  for ( let i = 0; i < num; i++ ) {
    result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
}
  //let result1= Math.random().toString(36).substring(0,num);       
  return result1;
}
for(let i=0; i<7500000; i++) {
  const code =  generateRandomString(9);
  const code_formate = code.substring(0,3)+"-"+code.substring(3,6)+"-"+code.substring(6,9)
  streamCsv.write(code_formate + "\n")
}
// fs.createReadStream('/home/menz/Projets/Pass-sport/script/qpv_bene_res.csv')
//   .pipe(csv({separator : ';'}))
//   .on('data', (data) => {
//     if (data._IDENTIFIANT && data._IDENTIFIANT.length > 4) {
//       streamCsv.write("UPDATE beneficiaire SET qpv = true WHERE id_psp='"+data._IDENTIFIANT + "';\n")
//     }
//   })
//   .on('end', () => {
//     console.log('Finished -> sortie.csv', codes[j-1])
//     })
//   .on('error', (err) => {
//     console.log('err durant le traitement du fichier de codes ', err)
//   })  



