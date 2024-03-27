// Je sais pas ce que ça fait
const fs = require('fs')
const csv = require('csv-parser')
global.window = {}

const streamCsv = fs.createWriteStream('coderestant.csv')
console.log('Start reading')
let codes= []
fs.createReadStream('/home/menz/Projets/Pass-sport/liste_code.csv')
  .pipe(csv())
  .on('data', (data) => {
    
    codes.push(data.CODE)
  })
  .on('end', () => {
      console.log('Finished -> codes.csv')
      let j = 0      

      // TRAITEMENT DIU FICHIER CAF
      fs.createReadStream('/home/menz/Projets/Pass-sport/codes.csv')
        .pipe(csv({separator : ';'}))
        .on('data', (data) => {
          let trouve = codes.find(x => {
		        //console.log('code prod :',x,'-----code généré :',data.code,'#')
            if (x == data.code) { 
              return true
            }
 	        })
          j++
          let ratio = j / 79_99_973 * 100;
          console.log(j,':',ratio)
	        if (trouve) { 
            
          }
          else {
            console.log('code absent : ',data.code)
            streamCsv.write(data.code + '\n')
	        }  
        })
        .on('error', (err) => {
            console.log('err', err)
        })
  })
  .on('error', (err) => {
      console.log('err durant le traitement du fichier de codes ', err)
  })  



