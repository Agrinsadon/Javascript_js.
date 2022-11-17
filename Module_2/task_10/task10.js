const person = [
    {
        name: 'ellie',
        votes: 1,
    },
    {
        name: 'frank',
        votes: 1,
    },
    {
        name: 'pamela',
        votes: 3,
    },
];
const votes = prompt('Enter the persons name that you want to vote for: ');
function voteForPerson(votes) {
    for (let i = 0; i < person.length; i++) {
        if (person[i].name === votes) {
            person[i].votes++;
        }
    }
}

function Results() {
    console.log(`Results:`)
    for (let i = 0; i < person.length; i++) {
        console.log(`${person[i].name} has ${person[i].votes} votes`);
    }
}
voteForPerson(votes);
Results();
