import {
    cssIcon,
    htmlIcon,
    javascriptIcon,
    jestIcon,
    muiIcon,
    nodeJsIcon,
    postgresqlIcon,
    postmanIcon,
    reactIcon,
    reduxIcon,
    sequelizeIcon,
    swaggerIcon,
    typescriptIcon,
    angularIcon,
    nextJsIcon,
    nestJsIcon
} from '../../constants/stackIcons';

export const stack = [
    {
        type: 'Front-end',
        list: [
            {
                name: 'React',
                icon: reactIcon,
            },
            {
                name: 'Redux',
                icon: reduxIcon,
            },
            {
                name: 'NextJS',
                icon: nextJsIcon
            },
            {
                name: 'Material UI',
                icon: muiIcon
            },
            {
                name: 'Angular',
                icon: angularIcon
            },
            {
                name: 'JavaScript',
                icon: javascriptIcon,
            },
            {
                name: 'TypeScript',
                icon: typescriptIcon
            },
            {
                name: 'HTML5',
                icon: htmlIcon
            },
            {
                name: 'CSS3',
                icon: cssIcon
            },
            {
                name: 'Jest',
                icon: jestIcon
            },
        ]
    },
    {
        type: 'Back-end | DataBase',
        list: [
            {
                name: 'NodeJs',
                icon: nodeJsIcon
            },
            {
                name: 'PostgreSQL',
                icon: postgresqlIcon
            },
            {
                name: 'NestJS',
                icon: nestJsIcon
            },
            {
                name: 'Sequelize',
                icon: sequelizeIcon
            },
            {
                name: 'Postman',
                icon: postmanIcon
            },
            {
                name: 'Swagger',
                icon: swaggerIcon
            },
        ]
    },
];

export const mixCards = (cards) => {
    let cardOnGame = [];

    for (let i = 0; i < cards.length; i++) {
        cardOnGame.push({icon: cards[i].icon, position: cards[i].position, name: cards[i].name})
        cardOnGame.unshift({icon: cards[i].icon, position: cards[i].position, name: cards[i].name + 'copy'})
    }
    cardOnGame.forEach(card => {
        card.position = Math.random();
    })
    return cardOnGame.sort((a, b) => a.position - b.position);
}

export const questions = [
    {
        question: '¿Cuánto es 2 x 15 x 3 + 0 x 2?',
        options: ['180', '51', '0', '90'],
        correct: '90'
    },
    {
        question: '¿Quién es John Frusciante?',
        options: ['Actor', 'Músico', 'Futbolista', 'Pintor'],
        correct: 'Músico'
    },
    {
        question: '¿Qué es Audioslave ?',
        options: ['Banda de Rock', 'Marca de amplificadores', 'Marca de radios', 'Canal musical'],
        correct: 'Banda de Rock'
    },
    {
        question: '¿Cuál es la capital de Checoslovaquia?',
        options: ['Viedma', 'Seúl', 'Kiev', 'Praga'],
        correct: 'Praga'
    },
    {
        question: '¿Cuál es mi velocidad si hago 1km en aproximadamente 33 segundos?',
        options: ['100km/h', '105km/h', '110km/h', '95km/h'],
        correct: '110km/h'
    },
    {
        question: 'Según Spinetta, la risa no va a surgir a menos que...',
        options: ['te subas al árbol', 'te pongas zapatos', 'descanses un rato', 'te quieras a diario'],
        correct: 'te subas al árbol'
    },
    {
        question: '¿Cuál de estos temas NO es de Pink Floyd?',
        options: ['Dogs', 'Another brick in the wall', 'Marooned', 'Money for nothing'],
        correct: 'Money for nothing'
    },
    {
        question: '¿Qué es un Yunque?',
        options: ['Un animal patagónico', 'Un instrumento musical', 'Una herramienta de herrería', 'Un árbol'],
        correct: 'Una herramienta de herrería'
    },
    {
        question: '¿Cuántas veces puede doblarse una hoja por la mitad?',
        options: ['5 veces', '7 veces', 'según el tamaño del papel', 'depende la fuerza del sujeto'],
        correct: '7 veces'
    },
    {
        question: '¿Además de una serpiente, qué es Pitón?',
        options: ['Una parte de la montura de un caballo', 'Un planeta', 'La poda corta de un sarmiento en la vid', 'La raza de un perro'],
        correct: 'La poda corta de un sarmiento en la vid'
    }
]