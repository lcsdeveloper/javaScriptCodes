let arr = [ {
        name: 'lucas',
        gender: 'male'
    },
    {
        name: 'lisa',
        gender: 'female'
    },
    {
        name: 'joao',
        gender: 'male'
    }
];

const returMale = arr.map( e => ( e.gender == 'male' ? e.gender = 'I am a man' : 'I am a woman' ) );

console.log( returMale );