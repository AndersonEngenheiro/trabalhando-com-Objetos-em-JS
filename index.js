const meuObjeto = {
  listTeamOne: [
    "Inglaterra",
    "Bragantino - Feminino",
    "Alverca",
    "Eibar",
    "Stade d'Abidjan",
    "Xerez CD",
    "Cacereño B - Feminino",
    "Cuilapa FC",
    "FCB Magpies",
    "Hapoel Azur",
    "BEA Mountain FC",
    "Stade Malien de Bamako",
    "Atlético Bruces",
    "Roma (Chikitos) Esports",
    "Sevilla (Bluefir3) Esports",
    "Lazio (Gorilla) EsportsGOL",
    "Villarreal (Rafa) Esports",
  ],
  listTeamTwo: [
    "Senegal",
    "Taubaté - Feminino",
    "CF Os Belenenses",
    "Huesca",
    "ASEC Mimosas",
    "CA Antoniano",
    "Malaga Feminino",
    "Democracia FC",
    "Mons Calpe SC",
    "MS Hapoel Lod",
    "Cece United",
    "USC Kita",
    "Deportivo Garcilaso",
    "Arsenal (Harsen) Esports",
    "RB Leipzig (k1w1Q) Esports",
    "Fiorentina (Lio) Esports",
    "Trabzonspor (aibothard) Esports",
  ],
  scoreTeamOne: [
    "0",
    "4",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "2",
    "2",
    "0",
    "2",
    "1",
    "1",
    "1",
    "1",
    "0",
  ],
  scoreTeamTwo: [
    "0",
    "2",
    "0",
    "1",
    "1",
    "0",
    "0",
    "1",
    "0",
    "1",
    "0",
    "0",
    "3",
    "3",
    "2",
    "0",
    "0",
  ],
  listOddsColuna1: [
    "1.66",
    "1.02",
    "1.90",
    "26.00",
    "15.00",
    "2.10",
    "4.75",
    "PI",
    "1.004",
    "1.30",
    "1.40",
    "1.02",
    "29.00",
    "6.00",
    "5.00",
    "1.50",
    "1.95",
  ],
  listOddsColuna2: [
    "3.20",
    "19.00",
    "3.50",
    "3.60",
    "6.00",
    "2.50",
    "1.44",
    "Sem Gol1.005",
    "41.00",
    "4.50",
    "4.00",
    "19.00",
    "17.00",
    "5.00",
    "3.60",
    "4.50",
    "3.60",
  ],
  listOddsColuna3: [
    "7.00",
    "29.00",
    "3.60",
    "1.33",
    "1.14",
    "4.50",
    "5.00",
    "PI",
    "67.00",
    "11.00",
    "7.50",
    "29.00",
    "1.025",
    "1.40",
    "1.61",
    "5.50",
    "3.25",
  ],
};

// Object.keys(meuObjeto).forEach((item) => {
//     console.log(item + " = " + meuObjeto[item]);
// });

//   for (const property in meuObjeto) {
//     console.log(property + " = " + meuObjeto[property]);
//   }

/*  Object.entries(meuObjeto).forEach((v,i,a)=>{
            console.log( meuObjeto.listTeamOne[i],'-',meuObjeto.scoreTeamOne[i],'X',meuObjeto.scoreTeamTwo[i],'-', meuObjeto.listTeamTwo[i] )
        }) */

// pego o array listTeamOne e conto quantos elementos tem
const gameCount = meuObjeto.listTeamOne.length;

// presumo que todas as arrays dentro do meuObjeto tem a mesma quantidade de elementos
for (let i = 0; i < gameCount; i++) {
  console.log(
    meuObjeto.listTeamOne[i],
    "-",
    meuObjeto.scoreTeamOne[i],
    "X",
    meuObjeto.scoreTeamTwo[i],
    "-",
    meuObjeto.listTeamTwo[i]
  );
}

// print de total de jogos
console.log(`\nTotal: ${gameCount} games`);
