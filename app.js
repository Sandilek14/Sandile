//Movement animaiton to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//items
const title = document.querySelector(".title");
const Lindo = document.querySelector(".Lindo img");
const question= document.querySelector(".question");
const description = document.querySelector(".info h3");
const Pretty = document.querySelector(".Pretty");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    Lindo.style.transform = "translateZ(200px)";
    description.style.transform = "translateZ(125px)";
    question.style.transform = "translateZ(100px)";
    Pretty.style.transform="translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform =`rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    Lindo.style.transform = "translateZ(0px)";
    description.style.transition = "translateZ(0px)";
    Pretty.style.transform = "translateZ(0px)";
});