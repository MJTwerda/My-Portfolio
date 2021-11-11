export const stack = [
    {
        type: 'Front',
        list: [
            {
                name: 'JavaScript',
                icon: require('../utils/icons/javascript-original.png').default,
            },
            {
                name: 'HTML5',
                icon: require('../utils/icons/html-original.png').default,
            },
            {
                name: 'CSS3',
                icon: require('../utils/icons/css-original.png').default,
            },
            {
                name: 'React',
                icon: require('../utils/icons/react-original.png').default,
            },
            {
                name: 'Redux',
                icon: require('../utils/icons/redux-original.png').default,
            },
            {
                name: 'TypeScript',
                icon: require('../utils/icons/typescript-original.png').default,
            },
        ]
    },
    {
        type: 'Back',
        list: [
            {
                name: 'NodeJs',
                icon: require('../utils/icons/nodejs-original.png').default,
            },
            {
                name: 'PostgreSQL',
                icon: require('../utils/icons/postgresql-original.png').default,
            },
            /* {
                name: 'ExpressJs',
                icon: require('../utils/icons/expressjs-original.png').default,
            }, */
            {
                name: 'Sequelize',
                icon: require('../utils/icons/sequelize-original.png').default,
            },
            {
                name: 'Postman',
                icon: require('../utils/icons/postman-original.png').default,
            },
            {
                name: 'Swagger',
                icon: require('../utils/icons/swagger-original.png').default,
            },
        ]
    },
]

export const imageStack = [
    {
        icon: require('../utils/icons/javascript-original.png').default,
        position: 0,
        name: 'javascript',
    },
    {
        icon: require('../utils/icons/html-original.png').default,
        position: 1,
        name: 'html',
    },
    {
        icon: require('../utils/icons/css-original.png').default,
        position: 2,
        name: 'css',
    },
    {
        icon: require('../utils/icons/react-original.png').default,
        position: 3,
        name: 'react',
    },
    {
        icon: require('../utils/icons/redux-original.png').default,
        position: 4,
        name: 'redux',
    },
    {
        icon: require('../utils/icons/typescript-original.png').default,
        position: 5,
        name: 'typescript',
    },
    {
        icon: require('../utils/icons/nodejs-original.png').default,
        position: 6,
        name: 'node',
    },
    {
        icon: require('../utils/icons/postgresql-original.png').default,
        position: 7,
        name: 'postgresql',
    },
    {
        icon: require('../utils/icons/socialIcons/github-logos1.png').default,
        position: 8,
        name: 'github',
    },
    {
        icon: require('../utils/icons/sequelize-original.png').default,
        position: 9,
        name: 'sequelize',
    },
    {
        icon: require('../utils/icons/postman-original.png').default,
        position: 10,
        name: 'postman',
    },
    {
        icon: require('../utils/icons/swagger-original.png').default,
        position: 11,
        name: 'swagger',
    },
]

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
