var arr = [
    {
        team: 'CSK',
        primary: 'gold',
        secondary: 'blue',
        trophies: 5,
        captain: 'Ruturaj Gaikwad',
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black',
        trophies: 0,
        captain: 'Faf du Plessis',
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold',
        trophies: 5,
        captain: 'Hardik Pandya',
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold',
        trophies: 3,
        captain: 'Shreyas Iyer',
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'black',
        trophies: 1,
        captain: 'Pat Cummins',
    },
    {
        team: 'PBKS',
        primary: 'crimson',
        secondary: 'silver',
        trophies: 0,
        captain: 'Shikhar Dhawan',
    },
];

var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var h2 = document.querySelector('#captain');
var h3 = document.querySelector('#trophies');
var main = document.querySelector('main');

btn.addEventListener('click', function () {
    var winner = arr[Math.floor(Math.random() * arr.length)];

    h1.innerHTML = `Team: ${winner.team}`;
    h2.innerHTML = `Captain: ${winner.captain}`;
    h3.innerHTML = `Trophies: ${winner.trophies}`;

    h1.style.backgroundColor = winner.secondary;
    main.style.backgroundColor = winner.primary;
});

