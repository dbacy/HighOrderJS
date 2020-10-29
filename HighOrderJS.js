// What you have
var programmers = [
    { id: 120, name: 'Steve Jobs' },
    { id: 224, name: 'Stephen Gosling' },
    { id: 556, name: 'Bill Gates' },
    { id: 818, name: 'Edge Tech Student' }
];
// What you need
//[120, 224, 556, 818]
///////////////////////////////////////////////////////////////////////////
var programmerIds = [];
programmers.forEach(function (officer) {
    programmerIds.push(officer.id);                                                   // .foreach
});
console.log(programmerIds)
var programmerIds = programmers.map(function (programmer) {
    return programmer.id                                                             // .map
});
let ProgrammerIds = programmers.map(p => p.id);                                      // .map with arrow
console.log(ProgrammerIds)    /// printed the array for only the programmers id
////////////////////////////////////////////////////////////////////////////
var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];
var totalYears = pilots.reduce(function (accumulator, pilot) {            // reduce
    return accumulator + pilot.years;
}, 0);
console.log(totalYears)
const TotalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);   // reduce with arrows
console.log(TotalYears)
var mostExpPilot = pilots.reduce(function (oldest, pilot) {               //reduce
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
//////////////////////////////////////////////////////////////////////////////////////
var pilots = [
    {
        id: 2,
        name: "Wedge Antilles",
        faction: "Rebels",
    },
    {
        id: 8,
        name: "Ciena Ree",
        faction: "Empire",
    },
    {
        id: 40,
        name: "Iden Versio",
        faction: "Empire",
    },
    {
        id: 66,
        name: "Thane Kyrell",
        faction: "Rebels",
    }
];
var rebels = pilots.filter(function (pilot) {
    return pilot.faction === "Rebels";
});                                                              // above and below both filter
var empire = pilots.filter(function (pilot) {
    return pilot.faction === "Empire";
});
console.log(empire)
let Rebels = pilots.filter(pilot => pilot.faction === "Rebels");
let Empire = pilots.filter(pilot => pilot.faction === "Empire");     // both are filter with arrows
console.log(Empire)
////////////////////////////////////////////////////////////////
var personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];

var jediPersonnel = personnel.filter(function (person) {
    return person.isForceUser;                                       // will give me the ones that are true
});

var jediScores = jediPersonnel.map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
});
                                                                    // Result: [154, 110, 156]    because its only looking at the true

var totalJediScore = jediScores.reduce(function (acc, score) {
    return acc + score;
}, 0);
                                                                    // Result: 420    adding the three scores from above together

var totalJediScore = personnel
    .filter(function (person) {
        return person.isForceUser;
    })
    .map(function (jedi) {
        return jedi.pilotingScore + jedi.shootingScore;            // all three form above thrown together
    })
    .reduce(function (acc, score) {
        return acc + score;
    }, 0);

const totalJediScore = personnel
    .filter(person => person.isForceUser)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)               // all three from above thrown together with arrows
    .reduce((acc, score) => acc + score, 0);

const totalJediScore = personnel.reduce((acc, person) => person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc, 0);

//  more condensed version from the one directly above