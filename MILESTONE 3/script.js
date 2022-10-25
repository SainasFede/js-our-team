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
const rowCard = document.querySelector('.row-card');

const team = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    skills: [
      'Dinamico',
      'Leadership'
    ],
    photo: '../img/wayne-barnett-founder-ceo.jpg'
  },

  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    skills: [
      'Dinamico',
      'Leadership'
    ],
    photo: '../img/angela-caroll-chief-editor.jpg'
  },

  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    skills: [
      'Dinamico',
      'Leadership'
    ],
    photo: '../img/walter-gordon-office-manager.jpg'
  }, 

  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    skills: [
      'Dinamico',
      'Leadership'
    ],
    photo: '../img/angela-lopez-social-media-manager.jpg'
  },

  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    skills: [
      'Dinamico',
      'Leadership'
    ],
    photo: '../img/scott-estrada-developer.jpg'
  },

  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    skills: [
      'Dinamico',
      'Leadership'
    ],
    photo: '../img/barbara-ramos-graphic-designer.jpg'
  }
];

// STAMPO SU CONSOLE I DATI DEL TEAM

for(let groupMember of team){
  console.log(groupMember);
};

/* STAMPO LE INFO 
for(let groupMember of team){
  let member = `Nome: ${groupMember.nome}, Ruolo: ${groupMember.ruolo}, Photo: ${groupMember.photo}<br>`;
  information.innerHTML += member;
};
*/

// CREO LA STRUTTURA CARD E STAMPO

for(let groupMember of team){

  let skills = '';

  for(let skill of groupMember.skills){
    skills += `<p>${skill}</p>`
  }

  let card = `
  <div class="col-4 mb-5">
  
    <div class="card" style="width: 24rem;">
      <img src="${groupMember.photo}" class="card-img-top" alt="${groupMember.photo}">
      <div class="card-body text-center">
        <h3 class="card-title">${groupMember.nome}</h3>
          <h5>${groupMember.ruolo}</h5>         
        </div>
      <div class="skills text-center">
      <h6 class="fw-bold">Skills</h6>
              ${skills}
      </div>
    </div>
  
  </div>`;

  rowCard.innerHTML += card;
}