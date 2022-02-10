
let resultado = "";
 let pronoun = ['the','our'];
 let adj = ['great', 'big' ];
   let noun = ['jogger','racoon'];
let dominio = ['.com', '.org', '.net']
   for (let k = 0; k <=(pronoun.length -1); k++) {
       for (let l = 0; l <=(adj.length -1); l++) {
           for (let m = 0; m <=(noun.length -1); m++) {
               for (let n = 0; n <=(dominio.length -1); n++) {
                  const element = pronoun[k]+adj[l]+noun[m]+ dominio[n];  
                  console.log (element);
               }
               
              
           }
       }
        }
 
