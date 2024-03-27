// Creation des différents fichiers pour serbacanne
const fs = require('fs')
const csv = require('csv-parser')
global.window = {}

const streamCsv = fs.createWriteStream('test.csv')
//const streamSarbacane = fs.createWriteStream('sarbacane.csv')
//const streamSql = fs.createWriteStream('sortie.sql')
streamCsv.write('id_psp;organisme;situation;nom;prenom;genre;date_naissance;allocataire;adresse_allocataire' + '\n')
//streamSarbacane.write('id_psp;NomBeneficiaire;PrenomBeneficiaire;NomAllocataire;PrenomAllocataire;QualiteAllocataire;EmailAllocataire;CommuneAllocataire;CodePostal' + '\n')
console.log('Start reading')

fs.createReadStream('/home/menz/Projets/Pass-sport/script/qpv.csv')
  .pipe(csv({separator : ';'}))
  .on('data',(data) => {
            //console.log(data)
            const codeQPV = data.codeQPV
            const codeCommune = data.codeCommune
            const libelleQPV = data.libelleQPV.trim().toString();
            const codeCommuneArrondissement = data.codeCommuneArrondissement.trim().toString();
            const libelle = data.libelle.trim();
            let nom=libelle.split(',')
            let commune = [];
            let arrondissement = [];
            if (codeCommune.length > 5) {
                
                let j = 0;
                for (let i = 0; i < codeCommune.length; i=i+5) {
                    commune[j]= codeCommune.substr(i,5)
                    j++
                  }
            }
            else {
                commune[0] = codeCommune
            }
            let j = 0
            if (codeCommuneArrondissement.length > 5) {
                if (codeQPV == 'QP013059') { console.log(codeCommuneArrondissement)}
                let j = 0;
                for (let i = 0; i < codeCommuneArrondissement.length; i=i+5) {
                    arrondissement[j]= codeCommuneArrondissement.substr(i,5)
                    if (codeQPV == 'QP013059') { console.log(arrondissement[j])}
                    j++
                  }
            }
            else {
                arrondissement[0] = codeCommuneArrondissement
            }
            if (codeQPV == 'QP013059') {
                for(m=0; m< commune.length;m++) {
                    console.log('commune',m,commune[m])
                }
                for(m=0; m< arrondissement.length;m++) {
                    console.log('arron',m,arrondissement[m])
                }
            }
            if (commune.length === 1) {
                for (k=0; k < arrondissement.length;k++) {
                    streamCsv.write(codeQPV+';'+commune[0]+';'+libelleQPV+';'+arrondissement[k]+';'+nom[k].trim()+'\n');
                }
            } 
            else {
                for(l=0;l < commune.length;l++) {
                    streamCsv.write(codeQPV+';'+commune[l]+';'+libelleQPV+';'+arrondissement[l]+';'+nom[l].trim()+'\n');
                }
            }
            /*const libelleQPV = data.libelleQPV.trim().toString();
            const codeCommuneArrondissement = data.codeCommuneArrondissement.trim().toString();
            const libelle = data.libelle.trim().toString();
            
            if (codeCommune.length === 5) {
                streamCsv.write(codeQPV+';'+codeCommune+';'+libelleQPV+';'+codeCommuneArrondissement+';'+libelle+'\n');
            }
            else {
                let nom=libelle.split(',')
            if (codeCommune.length === 10) {
                
                streamCsv.write(codeQPV+';'+codeCommune.substr(0,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(0,5)+';'+nom[0].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(4,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(4,5)+';'+nom[1].trim()+'\n');
            }
            if (codeCommune.length === 15) {
                streamCsv.write(codeQPV+';'+codeCommune.substr(0,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(0,5)+';'+nom[0].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(4,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(4,5)+';'+nom[1].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(9,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(9,5)+';'+nom[2].trim()+'\n');
            }
            if (codeCommune.length === 20) {
                streamCsv.write(codeQPV+';'+codeCommune.substr(0,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(0,5)+';'+nom[0].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(4,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(4,5)+';'+nom[1].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(9,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(9,5)+';'+nom[2].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(14,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(14,5)+';'+nom[3].trim()+'\n');
            }
            if (codeCommune.length === 25) {
                streamCsv.write(codeQPV+';'+codeCommune.substr(0,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(0,5)+';'+nom[0].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(4,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(4,5)+';'+nom[1].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(9,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(9,5)+';'+nom[2].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(14,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(14,5)+';'+nom[3].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(19,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(19,5)+';'+nom[4].trim()+'\n');
            }
            if (codeCommune.length === 30) {
                streamCsv.write(codeQPV+';'+codeCommune.substr(0,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(0,5)+';'+nom[0].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(4,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(4,5)+';'+nom[1].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(9,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(9,5)+';'+nom[2].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(14,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(14,5)+';'+nom[3].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(19,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(19,5)+';'+nom[4].trim()+'\n');
                streamCsv.write(codeQPV+';'+codeCommune.substr(24,5)+';'+libelleQPV+';'+codeCommuneArrondissement.substr(24,5)+';'+nom[5].trim()+'\n');
            }
        }*/
  })
  .on('end', () => {

    console.log('Finished -> sortie.csv')
    })
  .on('error', (err) => {
      console.log('err durant le traitement du fichier de codes '+';'+ err)
  })  



