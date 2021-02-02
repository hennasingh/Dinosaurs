
    // Create Dino Constructor
    function Dinosaurs(species, weight, height,diet, where, when, fact) {
      this.species = species;
      this.weight = weight;
      this.height = height;
      this.diet = diet;
      this.where = where;
      this.when = when;
      this.fact = fact;
      this.image ="images/" + species.toLowerCase() + '.png';
    }

   // Create Dino Objects

   //Dino 1
   const dino1 = new Dinosaurs("Triceratops", 13000, 114, "herbavor", "North America",
   "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh");

   //Dino 2
   const dino2 = new Dinosaurs("Tyrannosaurus Rex", 11905, 144, "carnivor", "North America",
   "Late Cretaceous", "The largest known skull measures in at 5 feet long");

  //Dino 3
  const dino3 = new Dinosaurs("Anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous",
  "Anklyosaurus survived for approximately 135 million years");

  //Dino 4
  const dino4 = new Dinosaurs("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurassic",
   "An asteroid was named 9954 Brachiosaurus in 1991");

   //Dino 5
   const dino5 = new Dinosaurs("Stegosaurus", 11600, 79, "herbavor", "North America, Europe, Asia",
    "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 seperate places and flat spines");

  //Dino 6
  const dino6 = new Dinosaurs("Elasmosaurus", 16000, 59, "carnivor","North America", "Late Cretaceous",
  "Elasmosaurus was a marine reptile first discovered in Kansas");

  //Dino 7
  const dino7 = new Dinosaurs("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous",
  "Actually a flying reptile, the Pteranodon is not a dinosaur");

  //Dino 8
  const bird = new Dinosaurs("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are living dinosaurs")

  //Creating array of Dino Objects
  const Dinos = [dino1, dino2, dino3, dino4, dino5, dino6, dino7, bird];


    // Use IIFE to get human data from form
    const getHumanData = function () {

       let species = document.getElementById('name').value;
       let feet = document.getElementById('feet').value;
       let inches = document.getElementById('inches').value;
       let weight = document.getElementById('weight').value;
       let diet = document.getElementById('diet').value;

       function getName(){
         return species;
       }

       function getHeight(){
         return (feet * 5) + inches;
       }

       function getWeight(){
         return weight;
       }

       function getDiet() {
         return diet;
       }
       function getImage() {
         return  "images/human.png";
       }

       return {
         species: getName,
         height: getHeight,
         weight: getWeight,
         diet: getDiet,
         image: getImage
       };

    };
      // Create Human Object
     const Human = getHumanData();

    function CreateHuman(human) {

         Dinos.push(4, new Dinosaurs(Human.species, Human.weight, Human.height, Human.diet, "", ""));
         console.log(Dinos);
    }



    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
    const compareHeight = function(dino, human){
      if(dino.height < human.height){
        return 'Can you believe you are ${human.height/dino.height} taller than ${dino.name}';
      }
      else if(dino.height > human.height && dino.height/human.height > 2){
        const diff = dino.height - human.height
        return 'Not Even Closer! ${dino.species} is ${diff} inches taller than you!';
      }
      else if(dino.height == human.height){
        return 'Congratulations ${human.name}, You are the same height as the Dino ${dino.species}';
      }else {
        return 'Sorry Human ${human.name}! Dino ${dino.species} is taller than you by ${dino.height - human.height}';
      }
    }


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    const compareDiet = function(dino, human){
      if(dino.diet === "Herbavor"){
        return 'You can be friends ${human.name}, Dino ${dino.species} is Herbavor, He wont eat you ;)';
      }
      else if(dino.diet === human.diet){
        return 'Be Careful of your food, You both seem to be ${dino.diet} :P';
      }
      else {
        return 'Ahh!! Human ${human.name}, your diet dont match. You are ${human.diet} and Dino is ${dino.diet}';
      }
    }


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    const compareWeight = function(dino, human){
      if(dino.weight < human.weight){
        return 'You wont believe Human ${human.name}, You are heavier than dino ${dino.species} ;) by ${human.weight - dino.weight} pounds';
      }
      else if(dino.weight/human.weight >=100){
        return 'No match! Sorry to say Human ${human.name}, Dino ${dino.species} weighs ${dino.weight/human.weight} times more';
      }else {
        return 'Dont Worry Human ${human.name}, You only need to weigh ${dino.weight - human.weight} lbs more to fight dino ${dino.species}'
      }
    }

   // Generate Tiles for each Dino in Array

    let htmlTiles= ''
   const createTiles = function() {

     const grid = document.getElementById('grid')

     Dinos.forEach((item, index) => {

       htmlTiles+= `<div class ="grid-item">
            <h3>${item.species}</h3>`

            switch (index) {
              case 0:
                htmlTiles+= `<img src= "` + item.image + '/>';
                htmlTiles+= `<h4>`+ compareDiet(item, Human) + `</h4>`
                break;
                case 1:
                htmlTiles+= `<img src= "` + item.image + '/>';
                htmlTiles+= `<h4>`+ compareHeight(item, Human) + `</h4>`
                break;
                case 2:
                htmlTiles+= `<img src= "` + item.image + '/>';
                htmlTiles+= `<h4>`+ compareWeight(item, Human) + `</h4>`
                break;
                case 4:
                htmlTiles+= `<img src="images/human.png" />`;
                htmlTiles+=`<h4></h4>`
                 break;
              default:
              htmlTiles+= `<img src= "` + item.image + '/>';
              htmlTiles+= `<h4>`+ item.fact + `</h4>`
              }
              htmlTiles+= `</div>`
   });
   //Draw the Tiles on screen
   grid.innerHtml = htmlTiles;
 }

    // Remove form from screen
    const humanForm = document.querySelector("#dino-compare");
    function removeForm() {
      humanForm.style.display = "none";
    }


// On button click, prepare and display infographic
const button = document.getElementById('btn');
btn.addEventListener('click',function() {
 CreateHuman(getHumanData());
 createTiles();
 removeForm();
});
