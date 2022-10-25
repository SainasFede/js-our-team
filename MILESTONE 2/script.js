/*

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
Wayne Barnett	Founder & CEO			wayne-barnett-founder-ceo.jpg
Angela Caroll	        Chief Editor			        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager			walter-gordon-office-manager.jpg
Angela Lopez	        Social Media Manager	        angela-lopez-social-media-manager.jpg
Scott Estrada	        Developer				scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer		        barbara-ramos-graphic-designer.jpg
**MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.
**MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto
**MILESTONE 2:**
Stampare le stesse informazioni su DOM sotto forma di stringhe
**MILESTONE 3:**
Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)
**BONUS:**
Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card

*/

// CREO L'ARRAY TEAM
const information = document.getElementById('information');


const team = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    photo: '../img/wayne-barnett-founder-ceo.jpg'
  },

  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    photo: '../img/angela-caroll-chief-editor.jpg'
  },

  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    photo: '../img/walter-gordon-office-manager.jpg'
  }, 

  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    photo: '../img/angela-lopez-social-media-manager.jpg'
  },

  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    photo: '../img/scott-estrada-developer.jpg'
  },

  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    photo: '../img/barbara-ramos-graphic-designer.jpg'
  }
];

// STAMPO SU CONSOLE I DATI DEL TEAM

for(let groupMember of team){
  console.log(groupMember);
};

// STAMPO LE INFO 
for(let groupMember of team){
  let member = `Nome: ${groupMember.nome}, Ruolo: ${groupMember.ruolo}, Photo: ${groupMember.photo}<br>`;
  information.innerHTML += member;
};