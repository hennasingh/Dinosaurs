
    // Create Dino Constructor
    function Dinosaurs(species, weight, height,diet, where, when, fact) {
      this.species = species;
      this.weight = weight;
      this.height = height;
      this.diet = diet;
      this.where = where;
      this.when = when;
      this.fact = fact;
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



    // Use IIFE to get human data from form
    const getHumanData = function () {

       let species = document.getElementById('name').value;
       let feet = document.getElementById('feet').value;
       let inches = document.getElementById('inches').value;
       let weight = document.getElementById('weight').value;
       const height = feet*12+inches;
       let diet = document.getElementById('diet').value;

       let human = new Dinosaurs("human", weight,height, diet);
       return human;

    };

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
    const compareHeight = function(dino, humanHeight){
      if(dino.height < humanHeight){
        return `Can you believe you are ${humanHeight/dino.height} taller than ${dino.species}`;
      }
      else if(dino.height > humanHeight && dino.height/humanHeight > 2){
        const diff = dino.height - humanHeight
        return `Not Even Closer! ${dino.species} is ${diff} inches taller than you!`;
      }
      else if(dino.height == humanHeight){
        return `Congratulations Human, You are the same height as the Dino ${dino.species}`;
      }else {
        return `Sorry Human! Dino ${dino.species} is taller than you by ${dino.height - humanHeight}`;
      }
    }


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
     const compareDiet = function(dino, humanDiet){
      if(dino.diet === "Herbavor"){
        return `You can be friends Human, Dino ${dino.species} is Herbavor, He wont eat you ;)`;
      }
      else if(dino.diet === humanDiet){
        return `Be Careful of your food, You both seem to be ${dino.diet} :P`;
      }
      else {
        return `Ahh!! Human, your diet don't match. You are ${humanDiet} and Dino is ${dino.diet}`;
      }
    }


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    const compareWeight = function(dino, humanWeight){
      if(dino.weight < humanWeight){
        return `You wont believe Human, You are heavier than dino ${dino.species} ;) by ${humanWeight - dino.weight} pounds`;
      }
      else if(dino.weight/humanWeight >=100){
        return `No match! Sorry to say Human ${human.name}, Dino ${dino.species} weighs ${dino.weight/human.weight} times more`;
      }else {
        return `Dont Worry Human, You only need to weigh ${dino.weight - humanWeight} lbs more to fight dino ${dino.species}`;
      }
    }

   // Generate Tiles for each Dino in Array
      const grid = document.getElementById('grid')

    let htmlTiles= ''
   const createTiles = function(human_data) {

      dinos = [dino1, dino2, dino3, dino4, human_data, dino5, dino6, dino7, bird];

     dinos.forEach((item, index) => {

       htmlTiles+= `<div class ="grid-item">
            <h3>${item.species}</h3>`

            switch (index) {
              case 0:
                htmlTiles+= `<img src= "images/` + item.species.toLowerCase() + '.png"/>';
                htmlTiles+= `<h4>`+ compareDiet(item, human_data.diet) + `</h4>`
                break;
                case 1:
                htmlTiles+= `<img src= "images/` + item.species.toLowerCase() + '.png"/>';
                htmlTiles+= `<h4>`+ compareHeight(item, human_data.height) + `</h4>`
                break;
                case 2:
                htmlTiles+= `<img src= "images/` + item.species.toLowerCase() + '.png"/>';
                htmlTiles+= `<h4>`+ compareWeight(item, human_data.weight) + `</h4>`
                break;
                case 4:
                htmlTiles+= `<img src= "images/` + item.species.toLowerCase() + '.png"/>';
                htmlTiles+=`<h4></h4>`
                 break;
              default:
              htmlTiles+= `<img src= "images/` + item.species.toLowerCase() + '.png"/>';
              htmlTiles+= `<h4>`+ item.fact + `</h4>`
              }
              htmlTiles+= `</div>`
   });
   //Draw the Tiles on screen
   grid.insertAdjacentHTML('afterbegin', htmlTiles);
 }

    // Remove form from screen
    const humanForm = document.querySelector("#dino-compare");
    function removeForm() {
      humanForm.style.display = "none";
    }


// On button click, prepare and display infographic
const button = document.getElementById('btn');

btn.addEventListener('click', function() {
 createTiles(getHumanData());
 removeForm();
});
