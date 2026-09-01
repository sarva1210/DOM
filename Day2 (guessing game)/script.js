var arr = [
    {
        team: 'CSK',
        fullName: 'Chennai Super Kings',
        primary: 'yellow',
        secondary: 'blue',
        trophies: 5,
        captain: 'Ruturaj Gaikwad',
    },
    {
        team: 'MI',
        fullName: 'Mumbai Indians',
        primary: 'navy',
        secondary: 'gold',
        trophies: 5,
        captain: 'Hardik Pandya',
    },
    {
        team: 'KKR',
        fullName: 'Kolkata Knight Riders',
        primary: 'purple',
        secondary: 'gold',
        trophies: 3,
        captain: 'Ajinkya Rahane',
    },
    {
        team: 'RCB',
        fullName: 'Royal Challengers Bengaluru',
        primary: 'red',
        secondary: 'black',
        trophies: 1,
        captain: 'Rajat Patidar',
    },
    {
        team: 'SRH',
        fullName: 'Sunrisers Hyderabad',
        primary: 'orange',
        secondary: 'black',
        trophies: 1,
        captain: 'Pat Cummins',
    },
    {
        team: 'RR',
        fullName: 'Rajasthan Royals',
        primary: 'pink',
        secondary: 'blue',
        trophies: 1,
        captain: 'Sanju Samson',
    },
    {
        team: 'DC',
        fullName: 'Delhi Capitals',
        primary: 'blue',
        secondary: 'red',
        trophies: 0,
        captain: 'Axar Patel',
    },
    {
        team: 'PBKS',
        fullName: 'Punjab Kings',
        primary: 'red',
        secondary: 'silver',
        trophies: 0,
        captain: 'Shreyas Iyer',
    },
    {
        team: 'GT',
        fullName: 'Gujarat Titans',
        primary: 'navy',
        secondary: 'gold',
        trophies: 1,
        captain: 'Shubman Gill',
    },
    {
        team: 'LSG',
        fullName: 'Lucknow Super Giants',
        primary: 'blue',
        secondary: 'orange',
        trophies: 0,
        captain: 'Rishabh Pant',
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

