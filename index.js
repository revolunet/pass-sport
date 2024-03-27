// Traitement des fichier du cnous => Produit plusieurs fichiers
const fs = require('fs')
const csv = require('csv-parser')
global.window = {}

let streamCsv = fs.createWriteStream('new_boursier_1.csv')
//const streamSql = fs.createWriteStream('sortie.sql')
streamCsv.write('codepsp;Beneficiaire;nombeneficiaire;prenombeneficiaire;nomallocataire;prenomallocataire;qualiteallocataire;emailallocataire;communeallocataire;codepostalcommune' + '\n')
let j=0;
let i = 2;
fs.createReadStream('/home/menz/Projets/Pass-sport/script/cnous_insert.csv')
.pipe(csv({separator : ';'}))
  .on('data', (data) => {
    //console.log(data)
    const id_psp = data.code.trim()
    const nom = data.nom.trim()
    const prenom = data.prenom.trim()
    const allocataire = JSON.parse(data.allocataire.trim())
    const adresse = JSON.parse(data.adresse.trim())
    streamCsv.write(id_psp+";boursier;"+nom+";"+prenom+";"+allocataire.nom+";"+allocataire.prenom+";"+allocataire.qualite+";"+allocataire.courriel+";"+adresse.commune+";"+adresse.code_postal+"\n");
    
    if ( j === 50000) {
      let nomfic = 'new_boursier_' + i +'.csv'
      console.log(nomfic)
      streamCsv = fs.createWriteStream(nomfic)
      streamCsv.write('codepsp;Beneficiaire;nombeneficiaire;prenombeneficiaire;nomallocataire;prenomallocataire;qualiteallocataire;emailallocataire;communeallocataire;codepostalcommune' + '\n')
      j = 0;
      i++;
    }
    else j++
  })
  .on('end', () => {
    console.log('Finished')
  })
  .on('error', (err) => {
      console.log('err durant le traitement du fichier de codes ', err)
  })  



