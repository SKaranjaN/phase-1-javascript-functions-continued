// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
function mondayWork(activity2 = "go to the office") {
     return (`This Monday, I will ${activity2}.`);
}
let wrapAdjective = function(style="*") {
    return function (activity3="special") {
        return `You are ${style}${activity3}${style}!`
    }
}


