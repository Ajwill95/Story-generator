//topics
const romance="Romance";
const action="Action";
const comedy="Comedy";
const horror="Horror";
var topics =[romance,action,comedy,horror];
function randomTopicGenerator(){
    let topic= Math.floor(Math.random()*topics.length);
    return topics[topic];
}

//leads
const male= ["Sam","John","Michael"];
const female=["Sara","Joanna","Mary"];
const nonbinary=["Grey","black","red"];
const animal=["Cat","Dog","Bird"];
var leads = [male,female,nonbinary,animal];

function randomLeadGenerator(){
    let lead=Math.floor(Math.random()*leads.length)
    let names =leads[lead];
    let selectedName = Math.floor(Math.random()*names.length)
    return names[selectedName];
}
function pronouns(name){
    var pronoun="";
     if (name==="Sara"||name==="Joanna"||name==="Mary"){
         pronoun="She"
     }else if (name==="Sam"||name==="John"||name==="Michael"){
         pronoun="He"
     }else if (name==="Grey"||name==="black"||name==="red"){
         pronoun="They"
     }else if (name==="Cat"||name==="Dog"||name==="Bird"){
         pronoun=`This ${name}`
     }
     return pronoun;
    }


//goal
var goals=["fall in love","fight monsters","defeat enemies","conquer the world"];
function randomGoalGenerator(){
    let goal=Math.floor(Math.random()*goals.length)
    return goals[goal];
}


//structuring

function story(){
    let lead= randomLeadGenerator();
    let pronoun =pronouns(lead);
    let goal= randomGoalGenerator();
    let topic=randomTopicGenerator();
    let partA = `The lead of this story is ${lead}.\n`
    let partB = `${pronoun} will ${goal} in this fantastic ${topic} story.`
    return partA + partB;
}

console.log(story());





