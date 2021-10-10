const title = document.querySelector(".citations");
const auteurOne = document.querySelector(".auteur");
const btnNews = document.querySelector(".btnNews");
const btnAdd = document.querySelector(".btnAdd");

let lesCitations = [
  {
    citation: "L'homme est un loup pour l'homme.",
    auteur: "Plaute"
  },
  {
    citation:
      "Il m'a fait trop de bien pour en dire du mal, il m'a fait trop de mal pour en dire du bien.",
    auteur: "Pierre Corneille"
  },
  {
    citation: "Rien de grand ne s'est accompli dans le monde sans passion.",
    auteur: "Georg Wilhelm Friedrich Hegel"
  },
  {
    citation: "On n'est pas sérieux, quand on a dix-sept ans",
    auteur: "Arthur Rimbaud"
  },
  {
    citation: "Science sans conscience n'est que ruine de l'âme.",
    auteur: "François Rabelais"
  },
  {
    citation:
      "Familles! je vous hais! Foyers clos; portes refermées; possessions jalouses du bonheur.",
    auteur: "André Gide"
  },
  {
    citation: "L'homme n'est pas né pour le repos.",
    auteur: "Voltaire"
  },
  {
    citation: "Il faut cultiver notre jardin.",
    auteur: "Voltaire"
  }
];

btnNews.addEventListener("click", () => {
  const randomCitation = Math.ceil(Math.random() * lesCitations.length - 1);
  console.log(randomCitation);

  const generateCitations = () => {
    console.log(lesCitations[randomCitation].citation);
    title.textContent = lesCitations[randomCitation].citation;
    auteurOne.textContent = lesCitations[randomCitation].auteur;
  };

  generateCitations();
});
