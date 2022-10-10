import { table,getBorderCharacters } from 'table';
let TextAnimation = require("text-animation");
const { exec } = require("child_process");
const c = require('ansi-colors');
const prompts = require('prompts');
const { Input, AutoComplete } = require('enquirer');


let numberRegex:RegExp = /\d+/g;
let letterRegex:RegExp = /[a-zA-Z]+/g; 

const removeDuplicates = (str:string) =>{
  let lhs = new Set();
  for (let i = 0; i < str.length; i++)
      lhs.add(str[i]);

  for (var ch of lhs)
   return ch
}

let directions = {
N:"North",
NE:"North East",
NW:"North West",
E:"East",
W:"West",
S:"South",
SE:"South East",
SW:"South West"
}

TextAnimation("Physics Vector",  (err: any)=>{
    if (err) throw err;
    TextAnimation({
        text: "Solver", 
        animation: "top-bottom",
        end:()=>{
          console.clear();
          const vectorAddition=()=>{
              let askVector1 = new Input({
                name: 'name',
                message: `Vector 1: `
              });
  
              let askVector2 = new Input({
                name: 'name',
                message: `Vector 2: `
              });
         const run = async () => {
    const v1:string = await askVector1.run();
    const v2:string = await askVector2.run();
    let v1Int = v1.match(numberRegex);
    let v2Int = v2.match(numberRegex);
    let matchLetter = v1.match(letterRegex);
console.log(`The resultant vector is: ${c.green(Number(v1Int?.[0]) + Number(v2Int?.[0]))} ${c.red(matchLetter)}`)
  }
  run();
          }

const addRightAngle = ()=>{
  let getVector1 = new Input({
    name: 'name',
    message: `Opposite Side: `
  });

  let getVector2 = new Input({
    name: 'name',
   message: `Adjacent Side: `
})

let scalarQuantity = new Input({
  name: 'name',
 message: `Scalar Quantity: `
})

const run2 = async () => {
  const vector1:string = await getVector1.run();
  const vector2:string = await getVector2.run();
  const scalar:string = await scalarQuantity.run()
  let v1Int = vector1.match(numberRegex);
  let v2Int = vector2.match(numberRegex);
  let matchLetter1 = vector1.match(letterRegex);
  let matchLetter2 = vector2.match(letterRegex);
  let concatDirection = matchLetter1?.concat(String(matchLetter2)).join("");
let magnitude = Number(v1Int?.[0]) ** 2 + Number(v2Int?.[0]) ** 2;
let finalMagnitude = Math.round(Math.sqrt(magnitude) * 100) / 100
console.log(`Magnitude: ${c.green(finalMagnitude)} ${c.red(matchLetter1)}`)

let direction = Number(v2Int) / Number(v1Int);
let finalDirection = Math.atan(direction)
let degrees = Math.round(finalDirection * 180 / Math.PI * 100) / 100
console.log(`Direction in Degrees: ${c.green(degrees)} ${c.red(matchLetter1)}`)

switch(concatDirection){
  case "N":
    console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.N}`)
    break;
  case "NN":
    console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.N}`)
    break;
  case "NE":
    console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.NE}`)
break;
case "EN":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.NE}`)
break;
case "NW":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.NW}`)
break;
case "WN":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.NW}`)
break;
case "E":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.E}`)
break;
case "EE":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.E}`)
break;
case "W":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.NE}`)
break;
case "WW":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.W}`)
break;
case "SE":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.SE}`)
break;
case "ES":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.SE}`)
break;
case "SW":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.SW}`)
break;
case "WS":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.SW}`)
break;
case "S":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.S}`)
break;
case "SS":
  console.log(`Final Answer: ${finalMagnitude} ${scalar}, ${degrees}° ${directions.S}`)
break;
}


}
run2();

}

const vectorResolution = () =>{
  let getMagnitude = new Input({
    name: 'name',
    message: `Magnitude: `
  });
  let getDirection = new Input({
    name: 'name',
    message: `Degrees: `
  });

  const run3 = async()=>{
    const magnitudeQ:string = await getMagnitude.run();
    const directionQ:string = await getDirection.run();

    let magnitudeInt = magnitudeQ.match(numberRegex);
    let directionInt = directionQ.match(numberRegex);
    let matchLetter1 = magnitudeQ.match(letterRegex);

    let degreesfy =  Math.sin((Math.PI / 180) * Number(directionQ))
    let degreesfx = Math.cos((Math.PI / 180) * Number(directionQ))

    let fy = Math.round(Number(magnitudeInt) * degreesfy)
    let fx = Math.round(Number(magnitudeInt) * degreesfx)

    console.log(`Fx(Horizontal Component): ${c.green(fx)} ${c.red(matchLetter1)}`)
    console.log(`Fy(Vertical Component): ${c.green(fy)} ${c.red(matchLetter1)}`)
  }
  run3();
}

        const tableShow = () =>{
            const data = [
                [`${c.bgBlue('1. Addition of Vectors')}`, 'Addition of two vectors to get the Resultant Vector.'],
                [`${c.bgRed('2. Adding at RIGHT ANGLE to Each Other')}`, 'Pythagorean theorem is the useful approach for this one.'],
                [`${c.bgMagenta('3. Resolution of Vector Quantity')}`, 'process where one vector is broken into smaller vectors.'],
              ];
          
          const config:Object = {
            columnDefault: {
              width: 60,
            },
            header: {
              alignment: 'center',
              content: c.red('Available Solvers'),
            },
          }
          
          console.log(table(data, config));
        }
      
        tableShow();

        (async () => {
            const response = await prompts({
              type: 'text',
              name: 'meaning',
              message: 'Which Solver Do you Want?: ',
            });
       
           if(response.meaning === "1"){
          vectorAddition();
           }
           else if(response.meaning === "2"){
addRightAngle();
           }
           else if(response.meaning === "3"){
vectorResolution();
           }else{
            console.log(c.red("Error - Invalid Option!"))
           }
          
          })();
    }
 

    });
});
