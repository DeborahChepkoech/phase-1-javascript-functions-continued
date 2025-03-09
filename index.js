// code your solution here
function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun());

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork())

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage:
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing")); // Output: You are !!!amazing!!!
console.log(encouragingPromptFunction()); // Output: You are !!!special!!!

const wrapWithDashes = wrapAdjective("--");
console.log(wrapWithDashes("a champion")); // Output: You are --a champion--


