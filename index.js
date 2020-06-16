import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const final2014Data = fifaData.filter((final) => {
    return final.Year === 2014 && final.Stage === "Final";
});

console.log(final2014Data[0]["Home Team Name"], final2014Data[0]["Away Team Name"], final2014Data[0]["Home Team Goals"], final2014Data[0]["Away Team Goals"]);
if (final2014Data[0]["Home Team Goals"] > final2014Data[0]["Away Team Goals"]) {
    console.log(final2014Data[0]["Home Team Name"]);
} else {
    console.log(final2014Data[0]["Away Team Name"]);
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(final => {
        return final.Stage === "Final";
    });
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    return callback.map(data => {
        return data.Year;
    });
}

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback) {
    return callback.map(data => {
        let homeGoals = data["Home Team Goals"];
        let awayGoals = data["Away Team Goals"];

        if (homeGoals > awayGoals) {
            return data["Home Team Name"];
        } else if (awayGoals > homeGoals) {
            return data["Away Team Name"];
        } else {
            return data["Win conditions"];
        }
    });
}

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callbackWinners, callbackYears) {
    let winners = [];

    for (let i = 0; i < callbackWinners.length; i++) {
        winners.push(`In ${callbackYears[i]}, ${callbackWinners[i]} won the world cup!`);
    }

    return winners;
}

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));
/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const total = data.reduce((acc, game) => {
        return acc += game["Home Team Goals"] + game["Away Team Goals"];
    }, 0);

    return total;
}

console.log(getAverageGoals(fifaData) / fifaData.length);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, ti) {
    let winners = getFinals(data).map(game => {
        if (game["Home Team Goals"] > game["Away Team Goals"]) return game["Home Team Initials"];
        else return game["Away Team Initials"];
    });

    let wins = winners.reduce((acc, team) => {
        if(team === ti) return acc += 1;
        else return acc;
    }, 0);
    return `${ti} has won ${wins} times!`;
}

console.log(getCountryWins(fifaData, 'ENG'));
console.log(getCountryWins(fifaData, 'ARG'));
console.log(getCountryWins(fifaData, 'GER'));
console.log(getCountryWins(fifaData, 'HUN'));
console.log(getCountryWins(fifaData, 'ITA'));
console.log(getCountryWins(fifaData, 'NED'));
/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
    
    /* code here */

}

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
